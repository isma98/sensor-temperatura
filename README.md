# sensor-temperatura
Proyecto de un sistema embebido, en este proyecto se creara un pequeño ejemplo de un sistema embebido de un sensor de temperatura, en donde utilizaremos el microcontrolador Arduino para recibir una señal relativa de un sensor DHT11 y poder mandar dicha señal a un servidor local, que este se muestre en pantalla y a su vez poder guardar el valor captado por el sensor dentro de una base de datos con MongoDB

## iniciar el proyecto

### descargando el proyecto
Primero descargen los archivos del proyecto dentro de alguna carpeta que deseen utilizar, pueden utilizar el comando

`git clone https://github.com/isma98/sensor-temperatura`

dentro de la carpeta donde deseen guardar el proyecto. Despues abren la carpeta donde esta el proyecto desde una terminal (CMD) y ejecutan el comando 

`npm install`

para que se instalen todas las dependencias del proyecto.

### cargar codigo en arduino
Dentro de la carpeta scketch_arduino hay dos archivos, el primero es una imagen de como debe estar armado el circuito y el segundo es un archivo que contiene el codigo que debemos cargar dentro de nuestro arduino

### iniciamos nuestro base de datos
Ahora bien tenemos que iniciar nuestra base de datos mongodb y para ello usamos el siguiente comando dentro de nuestra terminal

`mongod`

### arrancando el proyecto
Cuando tengamos completado los pasos anteriores,abrimos una terminal (CMD) ejecutamos el comando 
`npm start`
para iniciar el proyecto, ojo debemos estar dentro de la carpeta del proyecto. Y ya para teminar ingresamos a la dirección localhost:3000/inicio para ver el resultado del proyecto
