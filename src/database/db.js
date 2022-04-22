const mysql = require('mysql');
/*const Connection = require('mysql/lib/Connection');*/
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: ProcessingInstruction.env.DB_DATABASE
});

Connection.connect((error)=>{
    if(error){
        console.log('El error de conexión es: '+error);
        return;
    }
    console.log('¡Conectado a la base de datos!');
});

module.exports = connection;