const express = require('express');
const { required } = require('joi');
const controllers = require('../controllers/mascotas.controllers');
const mascotasMiddlewares = require('../middlewares/mascota.middlewares');
const router = express.Router();

//middlewares
const mascotasMiddleware = require('../middlewares/mascota.middlewares');

//controllers
require('../controllers/mascotas.controllers');

router.get('/', controllers.GET_macotas);
router.post('/crear', [mascotasMiddlewares.POTS_mascotasMiddlewares], controllers.POST_macotas);
router.put('/actualizar', controllers.PUT_macotas);
router.delete('/eliminar', controllers.DELETE_macotas);


module.exports = router;