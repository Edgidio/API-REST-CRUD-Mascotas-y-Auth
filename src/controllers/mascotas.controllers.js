const controllers = {}

controllers.GET_macotas = ( (req, res)=>{
    res.send('mascotas')
});

controllers.POST_macotas = ( (req, res)=>{
    res.send('crear mascotas')
});

controllers.PUT_macotas = ( (req, res)=>{
    res.send('actualizar mascotas')
});

controllers.DELETE_macotas = ( (req, res)=>{
    res.send('eliminar mascotas')
});

module.exports = controllers;