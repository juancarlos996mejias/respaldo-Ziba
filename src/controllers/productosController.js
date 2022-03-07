const res = require("express/lib/response");
const { home } = require("nodemon/lib/utils");

const controlador =
{
index: (req,res)=> {
    res.send("home");
},
product: (req,res) =>{
    res.send("producto");
}
}

module.exports =controlador;