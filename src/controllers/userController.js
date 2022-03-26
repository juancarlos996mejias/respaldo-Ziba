const userController = {

   
    
     iniciarSesion: (req,res) => {
        res.render ('users/iniciarSesion');
       
     },

     registrate: (req,res) => {
      res.render ('users/registrate');
     
   },
   
};



module.exports = userController;


