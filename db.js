const mongoose = require('mongoose');
require('dotenv').config();

//define the mongoDB connection file
const mongoURL = 'mongodb://localhost:27017/voting' //here our database name is hotels
//const mongoURL = process.env.MONGODB_URL;
//const mongoURL = process.env.MONGODB_URL_LOCAL

//set up mongoose connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//deafult connection
//mongoose maintains a default connection object representing the mongoDB connection
const db = mongoose.connection;

//define event listener for database connection

db.on('connected',() =>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err) =>{
    console.error('MongoDB connection error:',err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

//export the database connection
module.exports = db;