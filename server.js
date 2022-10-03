// Load express
const express = require('express');
const methodOverride = require('method-override')
const logRoutes = require('./routes/logRoutes')
// Create a special router object for our routes
const router = express.Router()
// Loading our Model of fruit
// const Logs = require('../models/logs')

// Bring in seed data
// const seed = require('../models/seed')
// const methodOverride = require('method-override')

// Bring in mongoConfig function
const mongoConfig = require('./config');
const Log = require('./models/log');
const logs = require('./models/seed');

require('dotenv').config()
// require('body-parser').config()
// Creates our express app (object)
const app = express();

// Connect to DB
mongoConfig()

//Listening our Port 
port = process.env.PORT;
//setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(express.json())
app.use(methodOverride("_method"))
app.use("/logs",logRoutes)




//Listening to Port 
app.listen(port, () => console.log('Listening on port: ', port))