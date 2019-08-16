'use strict';

const express = require('express');
require('dotenv').config();
const app = express()

app.use(express.static('./public'));

app.get('/', (request, response) => {
    response.sendFile('index.html')
});


app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});


app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Just Okay',
  }

  response.status(200).json(airplanes);
});

app.use('*', (request, response) => {
  response.send(`Error 404: Monkies ate our software dev`)
});

//we listen for port at the bottom of the file
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));