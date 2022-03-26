const mainController = {
   
   
    index: (req,res) => {
       res.render ('index');
    },

    prueba: (req,res) => {
      res.render ('prueba');
   },

   

     nosotros: (req,res) => {
        res.render ('aboutUs/nosotros');
       
     },


     contacto: (req,res) => {
        res.render ('aboutUs/contacto');
     },

     
    
   
};

module.exports = mainController; 