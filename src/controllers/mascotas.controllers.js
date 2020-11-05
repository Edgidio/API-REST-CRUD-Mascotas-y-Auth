const controllers = {}

//imports
const Mascota = require('../models/mascota.model');

controllers.GET_macotas = ( async (req, res)=>{

    const mascotas = await Mascota.find();

    res.json({
        mascotas
    });

});

controllers.POST_macotas = ( (req, res)=>{

    res.json({
        Success:true,
        mascota:req.body.value
    });
    
});

controllers.PUT_macotas = ( (req, res)=>{
    res.send('actualizar mascotas')
});

controllers.DELETE_macotas = ( (req, res)=>{
    res.send('eliminar mascotas')
});

module.exports = controllers;