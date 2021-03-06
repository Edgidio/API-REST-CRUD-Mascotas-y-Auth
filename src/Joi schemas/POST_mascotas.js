const Joi = require('joi');

const mascotaSchema_Joi = Joi.object({
    Dueño_mascota: Joi.string()
    .max(50)
    .min(3)
    .trim(true)
    .required(),

    Nombre_mascota: Joi.string()
    .required()
    .trim()
    .min(3)
    .max(50),

    Sobre_nombre: Joi.string()
    .required()
    .trim()
    .min(3)
    .max(50),

    Edad: Joi.number()
    .required()
    .integer()
    .greater(0)
    .less(16)
    .positive(),

    Descripcion: Joi.string()
    .required()
    .min(3)
    .trim()

});

module.exports = mascotaSchema_Joi;

