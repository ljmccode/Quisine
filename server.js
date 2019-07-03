require('dotenv').config();

var express = require('express');
var path = require("path");
var app = express();
var port = process.env.PORT || 9000;
var config = require('./config/config');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port);

require("./routes/api-routes")(app);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
