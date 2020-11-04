//Express
const app = require('./app');

app.listen(app.get('PORT'), ()=>{

    console.log(`Server run on port ${app.get('PORT')}`);
});