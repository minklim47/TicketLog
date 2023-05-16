const express = require("express");
const app = express();
const port = 4000;
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
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
  origin: ["http://localhost:4000", "http://127.0.0.1"],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};
app.use(express.static('assets'));
app.use(cors(corsOptions));

app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');

app.use("/auth", authRoute)
app.use("/user", userRoute)


app.get("/", (req, res) => {
  res.send("hello mink");
});


app.get("/get", (req, res) => {
  const sqlSelect = "SELECT * FROM users";
  connection.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});

app.post("/create_ticket", (req, res) => {
  const { title, date, time, cinema, seat, isPrivate, selectedStyle } =
    req.body;
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
