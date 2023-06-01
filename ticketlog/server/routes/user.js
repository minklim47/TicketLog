const express = require("express");
const router = express.Router();
const connection = require("../db");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");

router.get("/:userId", auth, (req, res) => {
  try {
    const userId = req.params.userId;
    const sqlSelect = "SELECT * FROM users WHERE id = ?";
    connection.query(sqlSelect, [userId], (err, results) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        const userData = {
          id: results[0].id,
          name: results[0].name,
          email: results[0].email_address,
          location: results[0].location,
        };
        res.status(200).json({
          success: true,
          message: "get logged in user successful",
          data: userData,
        });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.patch("/:userId", auth, (req, res) => {
  const userId = req.params.userId;
  const updates = req.body;
  const currentPassword = updates.currentPassword;
  const newPassword = updates.newPassword;

  if (newPassword && currentPassword) {
    const sqlSelect = "SELECT * FROM users WHERE id = ?";
    connection.query(sqlSelect, [userId], async (err, results) => {
      if (err) {
        console.log(err);
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        const num = results.length;
        if (num == 0) {
          return console.log("User does not exist.");
        }
        const storedPassword = results[0].hashed_password;
        const isPasswordValid = await bcrypt.compare(
          currentPassword,
          storedPassword
        );
        if (!isPasswordValid) {
          return console.log("Invalid current password");
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const sqlUpdatePassword =
          "UPDATE users SET hashed_password = ? WHERE id = ?";
        console.log();
        connection.query(
          sqlUpdatePassword,
          [hashedPassword, userId],
          (err, results) => {
            if (err) {
              console.log(hashedPassword);
              console.log(err);
              res.json({
                success: false,
                data: null,
                test: hashedPassword,
                error: err.message,
              });
            } else {
              console.log("change password successful");
            }
          }
        );
      }
    });
  }
  const sqlUpdate = "UPDATE users SET name = ?, location = ? WHERE id = ?";
  connection.query(
    sqlUpdate,
    [updates.name, updates.location, userId],
    (err, results) => {
      if (err) {
        console.log(err);
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          message: "change information and/or password successful",
          data: null,
        });
      }
    }
  );
});

module.exports = router;
