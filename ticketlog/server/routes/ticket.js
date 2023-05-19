const express = require("express");
const router = express.Router();
const connection = require("../db");
const auth = require("../middleware/auth");

router.get("/home/:userId", auth, (req, res) => {
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
router.get("/:ticketId", auth, (req, res) => {
  try {
    const ticketId = req.params.ticketId;
    const sqlSelect = "SELECT * FROM tickets WHERE id = ?";
    connection.query(sqlSelect, [ticketId], (err, results) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
          message: "hello",
        });
      } else {
        numRows = results.length;
        if (numRows == 0) {
          console.log("not found");
        } else {
          return res.json(results);
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
});
router.post("/", auth, (req, res) => {
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

router.patch("/:ticketId", auth, (req, res) => {
  const ticketId = req.params.ticketId;
  const updates = req.body.ticket;
// console.log(updates.date)
  const formattedDate = updates.date.split("T")[0];
//   const formattedTime = new Date(updates.time)
//   console.log(ticketId)
//   console.log(updates.title)
//   console.log(updates)
//   console.log(updates.title)
// console.log("hello")
  sqlUpdate =
    // "UPDATE tickets SET title=?, date=?,time=?,cinema=?,seat=?,style=?,is_private=? WHERE id = ?";
    "UPDATE tickets SET title=?,date=?,time=?,cinema=?,seat=?,style=?,is_private=? WHERE id = ?";

  connection.query(
    sqlUpdate,
    [
      updates.title,
        formattedDate,
      updates.time,
      updates.cinema,
      updates.seat,
      updates.style,
      updates.is_private,
      ticketId,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        console.log(`Ticket ${ticketId} updated successfully`);
        res.json({
          success: true,
          data: {
            id: ticketId,
          },
          error: null,
        });
      }
    }
  );
});

router.delete("/:ticketId", auth, (req, res) => {
    const ticketId = req.params.ticketId;
    sqlDelete = "DELETE FROM tickets WHERE id = ?";
    connection.query(sqlDelete,[ticketId], (err,results) => {
        if (err) {
            console.log(err);
            res.json({
              success: false,
              data: null,
              error: err.message,
            });
          } else {
            console.log(`Ticket ${ticketId} deleted successfully`);
            res.json({
              success: true,
              error: null,
            });
          }
    })
})
module.exports = router;
