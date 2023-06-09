const express = require("express");
const router = express.Router();
const connection = require("../db");
const auth = require("../middleware/auth");
const e = require("express");

router.get("/home/:userId", auth, (req, res) => {
  try {
    const userId = req.params.userId;
    connection.query(
      'SELECT COUNT(*) AS rowCount FROM tickets WHERE user_id = ?',
      [userId],
      (err, countResult) => {
        if (err) {
          res.json({
            success: false,
            data: null,
            error: err.message,
          });
        } else {
          const ticketCount = countResult[0].rowCount;
          const sqlSelect = "SELECT * FROM tickets WHERE user_id = ?";
          connection.query(sqlSelect, [userId], (err, results) => {
            if (err) {
              res.json({
                success: false,
                data: null,
                error: err.message,
              });
            } else {
              console.log(ticketCount)
              return res.status(200).json({
                success: true,
                message: "get tickets successful",
                data: results,
                count: ticketCount,
              });
            }
          });
        }
      }
    )

   

    
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
          res.json({
            success: false,
            data: null,
            message:"ticket does not exist."
          })
        } else {
          console.log(results[0])
          res.json({
            success: true,
            data: results[0],
            message: "get ticket successful",
            
          });
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
});

router.post("/", auth, (req, res) => {
  const {
    title,
    date,
    time,
    cinema,
    seat,
    selectedStyle,
    isPrivate,
    userId,
    note,
  } = req.body;
  const formattedDate = new Date(date).toISOString().split("T")[0];
  const formattedTime = new Date(time)
    .toISOString()
    .split("T")[1]
    .substring(0, 8);

  const insertTicket =
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
  connection.query(insertTicket, values, (err, results) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      note.ticketId = results.insertId;
      const insertNote =
        "INSERT INTO notes (ticket_id, title, content) VALUES (?,?,?)";

      connection.query(
        insertNote,
        [note.ticketId, note.title, note.content],
        (err, results) => {
          if (err) {
            res.json({
              success: false,
              data: null,
              error: err.message,
            });
          } else {
            res.json({
              success: true,
              message: "create ticket and note successful",
              data:{
                ticketId:note.ticketId,
                noteId: results.insertId
              }
              // ticketId: note.ticketId,
              // noteId: results.insertId,
            });
          }
        }
      );
    }
  });

  //   connec
});

router.patch("/:ticketId", auth, (req, res) => {
  const ticketId = req.params.ticketId;
  const updates = req.body.ticket;
  const note = req.body.note;
  const formattedDate = updates.date.split("T")[0];

  sqlUpdate =
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
        sqlUpdate = "UPDATE notes SET title=?,content=? WHERE ticket_id = ?";
        connection.query(
          sqlUpdate,
          [note.title, note.content, ticketId],
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
                message: "ticket and note update successful",
                data: null
              });
            }
          }
        );
      }
    }
  );
});

router.delete("/:ticketId", auth, (req, res) => {
  const ticketId = req.params.ticketId;
  sqlDelete = "DELETE FROM tickets WHERE id = ?";
  connection.query(sqlDelete, [ticketId], (err, results) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      connection.query("DELETE FROM notes WHERE ticket_id = ?",[ticketId], (err, results) => {
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
            message: `ticket id ${ticketId} deleted successful`,
            data: null,
          });
        }
      })
    }
  });
});


module.exports = router;
