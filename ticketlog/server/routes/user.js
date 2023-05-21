const express = require("express");
const router = express.Router();
const connection = require("../db");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
// const multer = require('multer');
// const path = require('path');

// const upload = multer({ dest: 'uploads/' });

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
        const userData = results[0];
        return res.json(userData);
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.patch("/:userId", auth, (req, res) => {
  const userId = req.user.userId;
  const updates = req.body;
  const currentPassword = updates.currentPassword;
  const newPassword = updates.newPassword;

  // console.log(userId);
  // console.log("is going to change password");

  if (newPassword && currentPassword) {
    // console.log("is going to change password");
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
        // console.log(`User ${results[0].id} found`);
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
              console.log("changed password");
              res.json({
                success: true,
                message: "Change password successful.",
              });
              // console.log("Change password successful.")
            }
          }
        );
      }
    });
  }

  console.log("is changing other information");
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
        console.log(`User ${userId} updated successfully`);
      
      }
    }
  );
});

// router.post("/checkpassword", auth, (req, res) => {
//   const password = req.body.password;
//   const userId = req.user.userId;
//   const sqlSelect = "SELECT * users WHERE id = ?";
//   connection.query(sqlSelect, [userId], (err, results) => {});
// });

// router.get("/profile/:userId", auth, (req, res) => {

// })

module.exports = router;
