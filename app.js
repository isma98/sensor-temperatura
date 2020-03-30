//Librerias
const express = require('express');
const { config, engine } = require('express-edge');
const bodyParser = require('body-parser');

//Importamos las rutas del proyecto
const sensorRoute = require('./config/routes');

//Creando variables del servidor
const app = express();

//Permitimos a express utilizar peticiones REST
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Cargamos la carpeta donde esta la pagina del cliente
//y especificamos la URL
app.use(`/`,sensorRoute);

//app.use(express.static("public"));

app.use(engine);
app.set('views', `${__dirname}/views`);

//Exportamos el modulo principal
module.exports = app;