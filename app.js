var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var logger = require('morgan');
require("dotenv").config();

var validate_token = require("./Middleware/validate_token.js");

var authRouter = require('./routes/authentication.routes')
var usersRouter = require('./routes/users.routes');
var paqueteSavaRouter = require('./routes/paquete_sava.routes');
var metodoContactoRouter = require('./routes/metodoContacto.routes');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/paqueteSava', paqueteSavaRouter);
app.use('/metodoContacto',metodoContactoRouter);

// Default Handlers for errors
app.use((err, req, res, next)=> {
    res.status(500).json({status:500,message: err.message})
});

module.exports = app;
