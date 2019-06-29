require('dotenv').config();

var express = require('express');
var app = express();
var port = process.env.PORT || 9000;
var config = require('./config/config');

app.use(express.static(__dirname + './public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port);

require("./routes/api-routes")(app);
