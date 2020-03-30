//Archivo donde indicamos las rutas dentro de la URL para ver el contenido

//Librerias
const express = require('express');

//Importamos las acciones que se podran realizar
const SensorController = require('./controller');

//Variable para declarar las rutas dentro de la URL
const api = express.Router();

//Rutas del proyecto
api.get("/inicio",SensorController.home);//URI de inicio
api.post("/inicio",SensorController.sensorAdd);//URI para agregar registros
api.get("/registros",SensorController.sensorInq);//URI para ver los registros

//Exportamos el modulo principal
module.exports = api;