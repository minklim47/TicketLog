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
        message: `get note of ticket ${ticketId} successful`,
        data: results[0]
      });
    }
  });
});
module.exports = router;
