const errorHandler = (err, req,res)=>{
    let statuscode = 500;
    let errorMessage= "Internal Server error"
    if(err.name === 'VallidationError'){
        console.log(err.errors)
        const message = Object.values(err.errors).map((val)=>{
            return val.message
        })
        statuscode = 400
        errorMessage = message
    }
    res.status(statuscode.json({
        message:errorMessage
    }))
}

module.exports = errorHandler