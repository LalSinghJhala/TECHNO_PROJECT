const express = require('express') ;
const colors = require('colors');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 3000;
const dbConnect =require('./db.js');
const validator = require('validator');

app.use(express.json());

console.log(validator.isStrongPassword("Hello1@2",{
    minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
}))


dbConnect();

// console.log(colors.yellow())
app.use('/api' , require('./routes/userRoutes'))


app.listen(3000 , () => {
    console.log(colors.yellow 
        (`App is listening on the PORT:${PORT}`))
})