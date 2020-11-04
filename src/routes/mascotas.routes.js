const express = require('express');
const controllers = require('../controllers/mascotas.controllers');
const router = express.Router();

//controllers
require('../controllers/mascotas.controllers');

router.get('/', controllers.GET_macotas);
router.post('/crear', controllers.POST_macotas);
router.put('/actualizar', controllers.PUT_macotas);
router.delete('/eliminar', controllers.DELETE_macotas);


module.exports = router;