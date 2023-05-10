const express = require("express");
const app = express();
const port = 4000;
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = " ZJGX1QL7ri6BGJWj3t";
const cookieParser = require("cookie-parser");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_uaqzo",
  password: "K3Ca8ShiHCtC3HOa",
  database: "lab_blank01_u3jtdf",
});

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});
const corsOptions = {
  origin: [
    "http://localhost:4000",
    "http://127.0.0.1",
    "http://example.com",
    // your origins here
  ],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

app.use(cors(corsOptions));
// app.use(cors());
// app.use(express.json());

// app.use(bodyParser.urlencoded({ extened: true }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.post("/login", require("./endpoint_login"));
// app.post("/register", require("./endpoint_register"));
// app.get("/check", require("./endpoint_check_login"));
// app.get("/todo/all", require("./endpoint_get_all_todos"));

app.get("/", (req, res) => {
  res.send("hello mink");
});

app.post(
  "/register",
  check("password")
    .notEmpty()
    .withMessage("password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("password ")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    .withMessage(
      "Password must be at least 8 characters, have at least 1 digit, uppercase, and lowercase"
    ),
  async (req, res) => {
    const name = req.body.name;
    const location = req.body.location;
    const email = req.body.email;
    const password = req.body.password;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({
        errors: errors.array(),
        message: "password format is not valid",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const sqlInsert = `INSERT INTO users (name,location,email_address,hashed_password) VALUES (?,?,?,?)`;

    connection.query(
      sqlInsert,
      [name, location, email, hashedPassword],
      (err, results) => {
        if (err) {
          //   res.json({
          //     success: false,
          //     data: null,
          //     error: err.message,
          //   });
          return connection.rollback(() => {
            console.error("Error inserting row:", error.stack);
            throw error;
          });
        } else {
          if (results) {
            res.json({
              success: true,
              message: "register success",
            });
          }
        }
      }
    );
  }
);

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  connection.query(
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
          const token = jwt.sign(
            { userId: rows[0].id, email: rows[0].email_address },
            secret,
            {
              expiresIn: "1d",
            }
          );
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
});

// app.post("/authen", (req, res) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const decoded = jwt.verify(token, secret);
//     res.json({ secret: "ok", decoded });
//   } catch (err) {
//     res.json({ status: "error", message: err.message });
//   }
// });

app.get("/checklogin", (req, res) => {
  //   console.log(req.cookies);
  const token = req.cookies.user;
  const decoded = jwt.verify(token, secret);
  //   console.log(decoded);

  if (decoded) {
    res.json({
      success: true,
      message:
        "User is logged in with ID: " +
        decoded.userId +
        " with email: " +
        decoded.email,
    });
  } else {
    res.json({
      success: false,
      message: "User is not logged in",
    });
  }
});

// app.get("/email", (req, res) => {
//   const token = req.cookies.user;
//   const decoded = jwt.verify(token, secret);
//   const userId = decoded.userId;
//   console.log(userId);

// const userId = decoded.userId;
// res.send(`User ID: ${userId}`);
// connection.query(
//   "SELECT email_address FROM users WHERE owner_id = ?",
//   [decoded.userId],
//   (err, rows) => {
//     // Check if cannot find the data in the database then return the error
//     if (err) {
//       res.json({
//         success: false,
//         data: null,
//         error: err.message,
//       });
//     } else {
//       // Return data to the client if success
//       return res.json({
//         success: true,
//         data: rows,
//         error: null,
//       });
//     }
//   }
// );
// });
app.get("/get", (req, res) => {
  const sqlSelect = "SELECT * FROM users";
  connection.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});

app.post("/create_ticket",authenticateToken ,(req, res) => {
  const {title, date, time, cinema, seat, isPrivate, selectedStyle} = req.body;
  const userId = req.user.userId;
  const sqlInsert =
    "INSERT INTO tickets (title,date,time,cinema,seat,isPrivate,selectedStyle, user_id) VALUES (?,?,?,?,?,?,?,?)";
 
  connection.query(
    sqlInsert,
    [title, date, time, cinema, seat, isPrivate, selectedStyle, userId],
    (req, res) => {
      if (err) {
        return connection.rollback(() => {
          console.error("Error inserting row:", error.stack);
          throw error;
        });
      } else {
        if (results) {
          res.json({
            success: true,
            message: "create ticket success",
          });
        }
      }
    }
  );
});



app.get("/get_tickets", (req, res) => {
  const sqlSelect = "SELECT * FROM tickets WHERE user_id = ?";
  connection.query(sqlSelect, [userId], (err, results) => {
    if (err) {
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      return res.json({
        success: true,
        data: results,
        error: null,
      });
    }
  });
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }
app.get('/user', authenticateToken, (req, res) => {
    const userId = req.user.userId;
    // Retrieve user data from database using userId
    // ...
    res.json(userData);
  });
