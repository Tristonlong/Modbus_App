// import { write } from '../serial'
var ser = require('./serial')

var express = require('express')

var app = express()

app.get('/pages/HomeView', ser.write)
console.log(ser.write)
