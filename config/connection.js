var mysql = require("mysql");
// var config = require(__dirname + "/../config/config.json")[process.env.APP_ENV || 'local'];
// var connection = mysql.createConnection({
//   host: config.host,
//   port: config.port,
//   user: config.user,
//   password: config.password,
//   database: config.database
// });
var connection = mysql.createConnection({
  host: "localhost", 
  port: 8889, 
  user: "root", 
  password: "root", 
  database: "celz" 
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;