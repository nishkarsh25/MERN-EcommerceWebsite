const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cookieParser());

// Enable CORS with credentials
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true
}));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ msg: "This is Example" });
});

app.listen(PORT, () => {
    console.log("SERVER IS RUNNING ...");
});

app.use('/user', require('./routes/userRouter'));
app.use('/api', require('./routes/categoryRouter'));
app.use('/api', require('./routes/productRouter'));

// Connect to MongoDB
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.log(err);
});
