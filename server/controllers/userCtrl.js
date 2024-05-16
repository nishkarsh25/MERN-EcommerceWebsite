const Users = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userCtrl = {
    register: async(req,res) => {
        try{
            const {name,email,password} = req.body;

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg:"Email Already Registered"})

            if(password.length < 6)
            return res.status(400).json({msg:"Password is at least 6 character"})

            //Password Encryption
            const passwordHash = await bcrypt.hash(password,10)

            const newUser = new Users({
                name,email,password:passwordHash
            })

            //Save mongodb
            await newUser.save()

            //create jwt to authenticate
            const accesstoken = createAccessToken({id:newUser._id})
            const refreshtoken = createRefreshToken({id:newUser._id})

            res.cookie('refreshtoken', refreshtoken,{
                httpOnly:true,
                path:'/user/refresh_token'
            })

            res.json({accesstoken})

        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

const createAccessToken = (payload) => {
    return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'})
}
const createRefreshToken = (payload) => {
    return jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'7d'})
}

module.exports = userCtrl