const express = require('express');
const app = express();

//modules node
const path = require('path');

//mudules npm
require('dotenv').config()

//imports

//setting express
app.set('PORT', process.env.PORT || 4000);

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes

app.use(require('./routes/informacion.routes')) //Route informacion

app.use('/mascotas', require('./routes/mascotas.routes')); // Route mascotas

//connection to the database
require('./db');

module.exports = app