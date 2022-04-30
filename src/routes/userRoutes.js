const router = require('express').Router();
const userController = require ('../controllers/userController');
const path = require ('path');

router.get('/iniciarSesion', userController.iniciarSesion);
router.get('/registrate', userController.registrate);


router.post('/registro', userController.registro);



module.exports = router;