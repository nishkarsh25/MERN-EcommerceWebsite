const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const app = express();
app.get('/',(req,res)=>{
    res.json({msg:"This is Example"})
})

app.listen(PORT,() => {
    console.log("SERVER IS RUNNING ...")
})


//connect mongoDB

const URI = 'mongodb://127.0.0.1:27017/myDatabase2';

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("MongoDB Connected")
}).catch(err => {
    console.log(err)
})
