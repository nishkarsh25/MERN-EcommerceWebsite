const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
    try{
        const token = req.header("Authorization")
        console.log(token)
        
    }catch(err){
        
    }
}

