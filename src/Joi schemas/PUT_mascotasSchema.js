const Joi = require('joi');

const Schema = Joi.object({

    Dueño_mascota: Joi.string()
    .min(3)
    .max(50)
    .trim(),

    Nombre_mascota: Joi.string()
    .trim()
    .min(3)
    .max(50),

    Sobre_nombre: Joi.string()
    .max(50)
    .min(3)
    .trim(),

    Edad: Joi.number()
    .integer()
    .greater(0)
    .less(16)
    .positive(),

    Descripcion: Joi.string()
    .trim()
    .min(3),

    id: Joi.string()
    .required()
    .trim()
    .alphanum(true)

});

module.exports = Schema;