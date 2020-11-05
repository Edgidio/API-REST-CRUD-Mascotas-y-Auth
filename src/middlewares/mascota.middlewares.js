const mascotasMiddlewares = {}

// imports
const validationMascota = require('../Joi schemas/POST_mascotas')

mascotasMiddlewares.POTS_mascotasMiddlewares = ( async (req, res, next)=>{

    const { error, value } = await validationMascota.validate(req.body);

    if(error){

        return res.status(400)
                  .json({
                      Success:false,
                      Message: error
                  });
    }else{

        req.body.value = value;

        next()

    }





});

module.exports = mascotasMiddlewares;