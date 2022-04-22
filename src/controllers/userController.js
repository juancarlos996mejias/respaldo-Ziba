const userController = {

   
    
     iniciarSesion: (req,res) => {
        res.render ('users/iniciarSesion');
       
     },

    

     registrate: (req,res) => {
      res.render ('users/registrate');
     
     },
      
     registro: (req,res) => {
         const r = req.body;
         
        // const r = JSON.parse(req.body);
         
         con = query("insert into user(name,user,rol,pasword)values('"+r.name+"','"+r.user+"','usuario','"+r.password+"')")

         res.send({
           'message': "paso x cosa"
         });
         
   
   }
   
};

//alert("insert into user(name,user,rol,pasword)values('"+r.name+"','"+r.user+"','usuario','"+r.password+"')")
/*registro = {
   "name":document.getElementById('nombre').value,
   "user":document.getElementById('correo').value,
   "password":document.getElementById('password').value
}
*/
module.exports = userController;


