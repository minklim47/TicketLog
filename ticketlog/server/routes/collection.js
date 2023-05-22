const express = require("express");
const router = express.Router();
const connection = require("../db");
const auth = require("../middleware/auth");

router.get("/:userId", auth, (req, res) => {
    const userId = req.params.userId;
    const selectCollection = "SELECT * FROM tickets WHERE user_id = ? ";
    connection.query(selectCollection, [userId], (err, results) => {
        if (err) {
            res.json({
                success: false,
                data: null,
                error: err.message,
              });
        } else {
            res.json({
                success: true,
                message: "the tickets are fetched",
                tickets : results
            })
        }
    })

})



module.exports = router;