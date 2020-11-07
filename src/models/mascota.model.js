const mongoose = require('mongoose');
const {Schema} = mongoose;

const mascotaSchema = new Schema({
    Dueño_mascota:{type:String, minlength:3, maxlength:50},
    Nombre_mascota:{type:String, minlength:3, maxlength:50},
    Sobre_nombre:{type:String, minlength:3, maxlength:50},
    Edad:Number,
    Descripcion:{type:String, minlength:5,}
});

const Mascota = mongoose.model('mascotas', mascotaSchema);

module.exports = Mascota;

