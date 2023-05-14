const sql = require('mysql2');

const connection = sql.createConnection({
    host: "server2.bsthun.com",
    port: "6105",
    user: "lab_uaqzo",
    password: "K3Ca8ShiHCtC3HOa",
    database: "lab_blank01_u3jtdf",
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

module.exports = connection;