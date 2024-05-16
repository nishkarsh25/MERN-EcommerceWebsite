const Users = require('../models/userModel')

const authAdmin = async(req,res,next) => {
    try{
        const user = await Users.findOne({
            _id : req.user.id
        })

        
    }
    catch(err){
        
    }
}

