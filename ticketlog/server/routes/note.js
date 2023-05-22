const express = require("express");
const router = express.Router();
const connection = require("../db");
const auth = require("../middleware/auth");

// router.post('/', auth, (req, res) => {
//     const sqlInsert = "INSERT "
// })
router.get("/:ticketId", auth, (req, res) => {
  const ticketId = req.params.ticketId;
  const selectNote = "SELECT * FROM notes WHERE ticket_id = ?";
  connection.query(selectNote, [ticketId], (err, results) => {
    if (err) {
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      res.json({
        success: true,
        message: `open note of ticket ${ticketId} successful`,
        note: results[0],
      });
    }
  });
});
// router.patch("/:ticketId", auth, (req, res) => {
//   const ticketId = req.params.ticketId;

//   sqlUpdate =
//     "UPDATE  SET title=?,date=?,time=?,cinema=?,seat=?,style=?,is_private=? WHERE id = ?";
//   connection.query(selectNote, [ticketId], (err, results) => {
//     if (err) {
//       res.json({
//         success: false,
//         data: null,
//         error: err.message,
//       });
//     } else {
//       res.json({
//         success: true,
//         message: `open note of ticket ${ticketId} successful`,
//         note: results[0],
//       });
//     }
//   });
// });

module.exports = router;
