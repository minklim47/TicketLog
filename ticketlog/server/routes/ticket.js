const express = require("express");
const router = express.Router();
const connection = require("../db");
const auth = require("../middleware/auth");

router.get("/:userId", auth, (req, res) => {
  try {
    const userId = req.params.userId;
    const sqlSelect = "SELECT * FROM tickets WHERE user_id = ?";
    connection.query(sqlSelect, [userId], (err, results) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        return res.json(results);
      }
    });
  } catch (err) {
    console.error(err);
  }
});

router.post("/", auth,(req, res) => {
  const { title, date, time, cinema, seat, selectedStyle, isPrivate, userId } =
    req.body;
  const formattedDate = new Date(date).toISOString().split("T")[0];
  const formattedTime = new Date(time)
    .toISOString()
    .split("T")[1]
    .substring(0, 8);

  const sqlInsert =
    "INSERT INTO tickets (title,cinema,seat,date,time,style,is_private,created_at,user_id) VALUES (?,?,?,?,?,?,?,CONVERT_TZ(NOW(), 'UTC', 'Asia/Bangkok'),?)";
  const values = [
    title,
    cinema,
    seat,
    formattedDate,
    formattedTime,
    selectedStyle,
    isPrivate,
    userId,
  ];

  connection.query(sqlInsert, values, (err, results) => {
    if (err) {
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      res.json({
        success: true,
        message: "create ticket successful",
        user: results[0],
      });
    }
  });
});

module.exports = router;
