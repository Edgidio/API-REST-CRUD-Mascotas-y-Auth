const express = require('express');
const router = express.Router();

//imports
const infor = require('../../package.json');

router.get('/', (req, res)=>{

    res.json({
        Informacion:{
            name:infor.name,
            version: infor.version,
            description: infor.description,
        },
        Author: infor.author
    })

});

module.exports = router;