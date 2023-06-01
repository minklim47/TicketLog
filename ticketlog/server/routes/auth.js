const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = "secretjaaaaaa";
const cookieParser = require("cookie-parser");
const { check, validationResult } = require("express-validator");
const connection = require("../db");
const auth = require("../middleware/auth");

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  connection.query(
    `SELECT * FROM users WHERE email_address = ?`,
    [email],
    async (err, rows) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        numRows = rows.length;
        if (numRows == 0) {
          return res.json({
            success: false,
            data: null,
            message: "this account does not exist",
          });
        }
        const isMatch = await bcrypt.compare(password, rows[0].hashed_password);
        if (!isMatch) {
          return res.json({
            success: false,
            data: null,
            message: "the password is not correct",
          });
        } else {
          const token = jwt.sign(
            { userId: rows[0].id, email: rows[0].email_address },
            secret,
            {
              expiresIn: "1d",
            }
          );
          res.cookie("user", token);
          console.log("Login successful for email:", email);
          res.status(200).json({
            success: true,
            message: "login successful",
            data: {
              id: rows[0].id,
              email: rows[0].email,
              token: token,
            },
          });
        }
      }
    }
  );
});

router.post(
  "/register",
  check("password")
    .notEmpty()
    .withMessage("password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("password ")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    .withMessage(
      "Password must be at least 8 characters, have at least 1 digit, uppercase, and lowercase"
    ),
  async (req, res) => {
    const name = req.body.name;
    const location = req.body.location;
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({
        errors: errors.array(),
        success: false,
        message: "password format is not valid",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const sqlInsert = `INSERT INTO users (name,location,email_address,hashed_password) VALUES (?,?,?,?)`;
    connection.query(
      sqlInsert,
      [name, location, email, hashedPassword],
      (err, results) => {
        if (err) {
          res.json({
            success: false,
            data: null,
            error: err.message,
          });
          return connection.rollback(() => {
            console.error("Error inserting row:", err.stack);
            throw err;
          });
        } else {
          if (results) {
            res.json({
              success: true,
              message: "register success",
              userId: results.insertId,
            });
          }
        }
      }
    );
  }
);

router.get("/checklogin", (req, res) => {
  const token = req.cookies.user;
  const decoded = jwt.verify(token, secret);
  if (decoded) {
    res.setStatus(200).json({
      success: true,
      message:
        "User is logged in with ID: " +
        decoded.userId +
        " with email: " +
        decoded.email,
      data: null
    });
  } else {
    res.json({
      success: false,
      message: "User is not logged in",
    });
  }
});

module.exports = router;
