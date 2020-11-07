const express = require('express');
const { required } = require('joi');
const controllers = require('../controllers/mascotas.controllers');

const router = express.Router();

//middlewares
const mascotasMiddlewares = require('../middlewares/mascota.middlewares');

//controllers
require('../controllers/mascotas.controllers');

router.get('/', controllers.GET_macotas);
router.post('/crear', [mascotasMiddlewares.POTS_mascotasMiddlewares], controllers.POST_macotas);
router.put('/actualizar/:id', [mascotasMiddlewares.PUT_mascotasMiddlewares], controllers.PUT_macotas);
router.delete('/eliminar/:id', [mascotasMiddlewares.PUT_mascotasMiddlewares], controllers.DELETE_macotas);


module.exports = router;