const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json())             
app.use(cookieParser())

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({msg:"This is Example"})
})

app.listen(PORT,() => {
    console.log("SERVER IS RUNNING ...")
})

app.use('/user',require('./routes/userRouter'))


//connect mongoDB

const URI = process.env.MONGODB_URL;

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("MongoDB Connected")
}).catch(err => {
    console.log(err)
})
