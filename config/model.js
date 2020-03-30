//Archivo que define el modelo de nuestra documento en la base de datos

//Librerias
const mongose = require('mongoose');

//Creamos variable para hacer un modelo del documento
const Schema = mongose.Schema;

//Definimos los atributos del modelo y su tipo de dato
const sensor = new Schema({
    valor: String,
    date: String
})

//Exportamos el modelo
module.exports = mongose.model("Sensor",sensor);
