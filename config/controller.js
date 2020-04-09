//Archivo para definir las acciones que tendra el documento en la base de datos

//Importamos el modelo
const Sensor = require('./model');

//Funcion para cargar el inicio
function home(req,res){
    //Renderizamos el archivo index.edge
    return res.render('index');
}

//Funcion para agregar nuevos registros
function sensorAdd(req, res){
    const sensor = new Sensor();
    const { valor } = req.body;

    sensor.valor = valor;
    sensor.date = new Date();

    if(valor){
        sensor.save((err, sensorStored) => {
            if(err) return res.status(500).send({message:"Error en el servidor"});
            if(!sensorStored) return res.status(406).send({message:"Error al registrar valor"}) 
            else{
                //Renderizamos el archivo index.edge
                return res.render('index');
            }
        })
    }else{
        res.status(406).send({message:"Error al resibir datos"})
    }

}

//Funcion para listar los registros dentro de la base de datos
function sensorInq(req,res){
    Sensor.find((err, values) => {
        if(err) return res.status(500).send({message:"Error en el servidor"})
        if(!values) return res.status(404).send({message:"Error al listar los valores"})
        else{
            //Renderizamos el archivo registros.edge y pasamos los valores de la base de datos
            return res.status(200).render('registros',{
                values
            })
        }
    })
}

//Exportamos las funciones a utilizar
module.exports = {
    home,
    sensorAdd,
    sensorInq
}