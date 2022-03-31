const router = require('express').Router();
const productsController = require ('../controllers/productsController')

//hoy  const productController = require ('../controllers/productController')
//hoy  const usersController = require ('../controllers/usersController')
const path = require ('path');
//const multer = require('multer'); // Requiero el multer para poder luego subir las imagenes y tratarlas.
//const {body} = require ('express-validator');

router.get('/galeria', productsController.galeria);



module.exports = router;









