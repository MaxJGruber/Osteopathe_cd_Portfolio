require('dotenv').config()
require("./db.config")
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
const cors = require("cors");
const logger = require('morgan');

// link to cloudinary router file
const cloudinaryRouter = require("./cloudinaryConfig")

const TimeTableRouter = require("./TimeTable.router")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

const corsOptions = { origin: process.env.VUE_APP_FRONTEND_URL, credentials: true };
app.use(cors(corsOptions));

app.use("/", cloudinaryRouter)
app.use("/api/timetable", TimeTableRouter)
//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '../dist')))
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

const port = process.env.VUE_APP_PORT || process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)