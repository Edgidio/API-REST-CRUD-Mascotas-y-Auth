const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/super-database'

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false})
.then(()=>{
    console.log('Database is connected')
})
.catch( (err)=>{
    console.log(err);
});

