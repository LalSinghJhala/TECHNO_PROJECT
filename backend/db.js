const { default: mongoose } = require("mongoose")

const colors=require('colors');  // For customize colors in console


const dbConnect= async()=>{
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/ecommerce');
        console.log(colors.blue("Successful Connection.."))
    } catch (error) {
        console.log(colors.red(error));
    }
}
// jjkbkjbhv

module.exports = dbConnect;