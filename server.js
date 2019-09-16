'use strict'

//express is the library that lets us setup a server
const express= require('express');
//dotenv is the library that lets us talk to our .env file
require('dotenv').config();

//this initializes our express server
const app = express()

//this is where we define our PORT variable from our .env, or runs a hard-coded 3000;
const PORT = process.env.PORT || 3000;




//this starts our express server
app.listen(PORT, () => console.log(`listening on port ${PORT}`))