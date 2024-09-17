const User = require('../models/userModel')

exports.signup = async(req , res ) => {
   try {
    const {email} = req.body;
    const isExisting = await User.
    findOne({email});
    console.log(isExisting);
    // check if user already exist 
    if(isExisting) {
       return res.status(400).send("pehle se hi user hai tu");
    }

    const user = await User.create(req.body)
    if(user) {
        res.status(201) .json ({
            message : "User Registered Succesfully ",
            data : user
        })
    }
   }catch(error) {
        return res.status(400).send(error.message);
   }
}


// {
//     name : 'lalsingh',
//     email : 'lalsinghjhala1999@gmail.com',
//     phone : '',
//     password : 'ekfsadsgsd'
// }