'use strict';

const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.static('./public'));

app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well trained'
  }
  response.status(200).json(airplanes);
})

app.get('/', (request, response) => {
  response.status(200).redirect('index.html');
})

//catch all function
app.use('*', (request, response) => {
  response.send('Sorry, that route does not exist');
})



//bottom of file
const PORT = process.env.PORT || (3000);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
