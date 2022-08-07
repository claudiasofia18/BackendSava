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
var warehousePackageRouter = require('./routes/warehouse_packages.routes');
var metodoContactoRouter = require('./routes/metodoContacto.routes');
var dashboardRouter = require('./routes/dashboard.routes')

var app = express();

var corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true
}


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/paqueteSava', paqueteSavaRouter);
app.use('/api', warehousePackageRouter);
app.use('/metodoContacto',metodoContactoRouter);
app.use('/dashboard',dashboardRouter)

// Default Handlers for errors
app.use((err, req, res, next)=> {
    res.status(500).json({status:500,message: err.message})
});

module.exports = app;
