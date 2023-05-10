const mysql = require("mysql2");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    mysql.query(
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
              message: "This account does not exist",
            });
          }
          const isMatch = await bcrypt.compare(password, rows[0].hashed_password);
          if (!isMatch) {
            res.json({
              success: false,
              message: "the password is not correct",
            });
          } else {
            //   const token = jwt.sign({ email: rows[0].email_address }, secret);
            const token = jwt.sign({ userId: rows[0].id, email: rows[0].email_address }, secret, {
              expiresIn: "1d",
            });
            res.cookie("user", token);
            res.json({
              success: true,
              message: "login success",
              user: rows[0],
              token: token,
            });
          }
        }
      }
    );
}

    // app.post("/login", (req, res) => {
    //     const email = req.body.email;
    //     const password = req.body.password;
      
    //     connection.query(
    //       `SELECT * FROM users WHERE email_address = ?`,
    //       [email],
    //       async (err, rows) => {
    //         if (err) {
    //           res.json({
    //             success: false,
    //             data: null,
    //             error: err.message,
    //           });
    //         } else {
    //           numRows = rows.length;
    //           if (numRows == 0) {
    //             return res.json({
    //               success: false,
    //               message: "This account does not exist",
    //             });
    //           }
    //           const isMatch = await bcrypt.compare(password, rows[0].hashed_password);
    //           if (!isMatch) {
    //             res.json({
    //               success: false,
    //               message: "the password is not correct",
    //             });
    //           } else {
    //             //   const token = jwt.sign({ email: rows[0].email_address }, secret);
    //             const token = jwt.sign({ userId: rows[0].id, email: rows[0].email_address }, secret, {
    //               expiresIn: "1d",
    //             });
    //             res.cookie("user", token);
    //             res.json({
    //               success: true,
    //               message: "login success",
    //               user: rows[0],
    //               token: token,
    //             });
    //           }
    //         }
    //       }
    //     );
    //   });