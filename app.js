const express = require('express');
const path = require ('path');
var app = express();
// load the things we need




/*app.use(express.static(__dirname + '/public/css/iconos'));*/
app.use(express.static(path.join(__dirname, './public')));


// se/t the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//rutas

const mainRoutes = require ('./src/routes/mainRoutes');
const productsRoutes = require ('./src/routes/productsRoutes');
const userRoutes = require ('./src/routes/userRoutes');



app.use('/',mainRoutes);
app.use('/products',productsRoutes);
app.use('/users',userRoutes);





app.use((req,res,next)=>{
    res.status(404).render("404",{
       titulo:"ERROR",
       descripcion: "404"
   })
});


app.listen(3000,() =>{
    console.log('servidor corriendo en el puerto 3000');
});


// use res.render to load up an ejs view file
// ** RUTAS ** 



// index page
/*
app.use('/,userRoutes');
app.use('/',mainRoutes);
*/






/*
app.get('/', function(req, res) {
    res.render('index', {titulo: "mi pagina dinamica"});//sirve para traer datos de base de datos {titulo:}
});

// about page
app.get('', function(req, res) {
    res.render("",{tituloGaleria:"Renderizando vista de Galeria"})
});

app.get('/inic', function(req, res) {
    res.render("iniciar",{tituloIniciarSesion:"Renderizando vista a Inicio de Sesion"})
});

app.get('/registrate', function(req, res) {
    res.render("registrate",{tituloRegistrate:"Renderizando vista de Registro"})
});

app.get('/nosotros', function(req, res) {
    res.render("nosotros",{tituloNosotros:"Renderizando vista a Nosotros"})
});

app.get('/contacto', function(req, res) {
    res.render("contacto",{tituloContacto:"Renderizando vista a Contacto"})
})
*/







































/*const express=require ("express");
const app= express();
const port= 3000;
const path = require ('path');
const ejs=require ("require");

// *** Config de Vistas ***
app.set('view engine','ejs');
app.set('views/template',__dirname + "/views");

app.use(express.static(__dirname + "/public"));

/*app.set('views', path.join(__dirname, '/view'));*/

/*app.get ("/",(req,res)=>{
    res.render("views/index",{titulo:"mi titulo dinamico"})
});

app.use(express.static(path.join(__dirname, './public')));


app.get('/servicios',(req,res)=>{res.send('estas en la pagina de servicios')})
app.use((req,res,next)=>{res.status (404).render("404")})

app.listen(port,()=>{
    console.log ("servidor corriendo en el puerto", port)
})

var mysql=require("mysql");
const { error } = require("console");
var conexion=mysql.createConnection({
host:"localhost",
database:"usuarios_db",
user:"root", 
password:""
});

conexion.connect(function(error){
if (error){
    throw error;
}else{
    console.log("CONEXION EXITOSA");
}
});
conexion.end ();
*/
