const mascotasMiddlewares = {}

// imports
const validationMascota = require('../Joi schemas/POST_mascotas')
const PUT_validationMascota = require('../Joi schemas/PUT_mascotasSchema');

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

mascotasMiddlewares.PUT_mascotasMiddlewares = ( async (req, res, next) =>{

    req.body.id = req.params.id 

    const { error, value } = await PUT_validationMascota.validate(req.body);

    if(error){

        return res.status(400)
                  .json({
                      Success:false,
                      Message:error
                  });
    }

    delete value.id

    req.body.value = value;

    next();

});

module.exports = mascotasMiddlewares;