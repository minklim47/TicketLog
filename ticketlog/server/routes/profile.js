const express = require("express");
const router = express.Router();
const connection = require("../db");
const auth = require("../middleware/auth");

router.get("/", auth, (req, res) => {
  try {
    const userId = req.userId;
    const sqlSelect = "SELECT * FROM users";
    connection.query(sqlSelect, (err, results) => {
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

router.patch("/", auth, (req, res) => {
  const userId = req.user.userId;
  const updates = req.body;
  console.log(userId);
  if (updates.currentPassword != "" && updates.newPassword != "") {
    const sqlSelect = "SELECT * users WHERE id = ?";
    connection.query(sqlSelect, [userId], async (err, results) => {
      const isMatch = await bcrypt.compare(
        updates.newPassword,
        results[0].hashed_password
      );
      if (!isMatch) {
        return res.json({
          success: false,
          message: "the current password is not correct",
        });
      } else {
        const sqlUpdate = "UPDATE users SET ? WHERE id = ?";
        connection.query(sqlUpdate, [updates, userId], async (err, results) => {
          if (err) {
            console.log(err);
            res.json({
              success: false,
              data: null,
              error: err.message,
            });
          } else {
            console.log(`User ${userId} updated successfully`);
            const new_hashed = await bcrypt.hash(updates.newPassword, 10);
            res.json({
              success: true,
              data: {
                id: userId,
                name: updates.name,
                location: updates.location,
                hashed_password: new_hashed,
              },
              error: null,
            });
          }
        });
      }
    });
  } else {
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
          res.json({
            success: true,
            data: {
              id: userId,
              name: updates.name,
              location: updates.location,
            },
            error: null,
          });
        }
      }
    );
  }
});

router.post("/checkpassword", auth, (req, res) => {
  const password = req.body.password;
  const userId = req.user.userId;
  const sqlSelect = "SELECT * users WHERE id = ?";
  connection.query(sqlSelect, [userId], (err, results) => {});
});

module.exports = router;