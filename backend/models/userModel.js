// name  // email / phone // password 
const mongoose = require('mongoose')
const validator = require("validator");
const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required:[true ,"Name is Required"],
        maxLenngth :[40][40, "Name cannot be exceed 40 charcters"],
    },
    email :{
        type:String,
        required : [true , "Email is Required"],
        Unique :true ,
        validate :{
            validator : function(value) {
                return validator.isEmail(value)
            },
            message : "Please enter a valid email"
        }
    },
    phone :{
        type : String ,
        required : [true , "Phone no. is Required"],
        unique: true
    },

    password  : {
        type : String,
        required : [true , "Password is Required"],
        validate : {
            validator : function(value) {
                return validator.isStrongPassword(value , {
                    minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5
                })
            },
            
        }
    }
})



const user = mongoose.model("user" , userSchema) ;

module.exports=user;


// role