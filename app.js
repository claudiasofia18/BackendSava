var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var logger = require('morgan');
const db = require('./models/index');
require("dotenv").config();
console.log(process.env);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var paqueteSavaRouter = require('./routes/paqueteSavaRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/paqueteSava', paqueteSavaRouter);


module.exports = app;
