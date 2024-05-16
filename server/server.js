const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const app = express();
app.get('/',(req,res)=>{
    res.json({msg:"This is Example"})
})


