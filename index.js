//Librerias
const SocketIO = require('socket.io');
const mongoose = require('mongoose');

//Importamos la configuracion principal del proyecto
const app = require('./app');

//Creamos un servidor por medio de http
const server = require('http').Server(app);

//Asignamos una variable para conectar al servidro
//y poder mandar datos en tiempo real al servidor
const io = SocketIO.listen(server);

//Conexion a la base de datos de mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sensor',
    {useNewUrlParser:true,useUnifiedTopology:true})
    .then( () => {
        console.log('La conexion a la base de datos fue exitosa');
        server.listen(3000, () => {
            console.log('http://localhost:3000/');
        })
    }).catch(err => console.log(err))

/**************************CONEXION SERIAL CON ARDUINO**********************************/

//Aqui iniciamos la conexion para recibir los datos que capta el arduino 
//y poder pasarlo a nuestro servidor
//Libreria para la conexion serial con arduino
const SerialPort = require('serialport');

//Conexion con nuestro arduino
const port = new SerialPort("COM3", {
    baudRate: 9600
});
//Escribimos los valores del monitor serial de arduino en una linea diferente
const ReadLine = SerialPort.parsers.Readline;
const parser = port.pipe(new ReadLine({ delimiter: '\r\n' }));

//Verificamos que la conexion es exitosa
parser.on('open', function () {
    console.log('connection is opened');
});

//Capturamos los datos del arduino
parser.on('data', function (data) {
    console.log(data);
    io.emit('datos', data.toString());//Mandamos los datos en tiempo real
});

//Capturamos cualquier error de conexion
parser.on('error', (err) => console.log(err));
port.on('error', (err) => console.log(err));

