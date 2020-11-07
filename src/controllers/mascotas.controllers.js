const controllers = {}

//imports
const Mascota = require('../models/mascota.model');

controllers.GET_macotas = ( async (req, res)=>{

    const mascotas = await Mascota.find();

    res.json({
        mascotas
    });

});

controllers.POST_macotas = ( async (req, res)=>{

    try{

        const nuevaMascota = new Mascota({

            Dueño_mascota:req.body.value.Dueño_mascota,
            Nombre_mascota:req.body.value.Nombre_mascota,
            Sobre_nombre: req.body.value.Sobre_nombre,
            Edad: req.body.value.Edad,
            Descripcion:req.body.value.Descripcion
    
        });
    
        const mascotaCreada = await nuevaMascota.save()
    
        res.json({
            Success:true,
            mascota:mascotaCreada
        });

    }catch(err){

        return res.status(400)
                  .json({
                      Success:false,
                      Message:err
                  });

    }
    
});

controllers.PUT_macotas = ( async (req, res)=>{
    
    try{

        const busquedaMascota = await Mascota.findById(req.params.id);

        if(busquedaMascota){

            const mascotaActualizada = await Mascota.findByIdAndUpdate(req.params.id, req.body.value, {
                new:true
            });

            mascotaActualizada.save();

            res.json({
                Success:true,
                Message:'Mascota actualizada',
                mascotaActualizada
            })

        }

       


    }catch(err){

        return res.status(404)
                      .json({
                          Success:false,
                          Message:'Mascota no encotrada',
                          err:err
                      });

    }

});

controllers.DELETE_macotas = ( async (req, res)=>{
    
    const mascotasDelete = await Mascota.findByIdAndDelete(req.params.id, req.body.value);

    if(!mascotasDelete){
        return res.status(400)
                  .json({
                    Success:false,
                    Message:'No se pudo eliminar la mascota'
                  });
    }

    res.json({
        Success:true,
        Message:'Mascota eliminada',
        mascotasDelete
    });

});

module.exports = controllers;