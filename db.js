const mongoose = require("mongoose");

const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
mongoose.connect(mongoURL);
const db = mongoose.connection;
// /*
// // Event listner   thare  multipal event listner
// .on('connected' , ......),
// .on('error' , .......),
// .on('disconnected' , ............),
// /*
db.on('connected', ()=> console.log("mongodb connected"));
db.on('error' , (err)=> console.log("mongodb  error",err));
db.on('disconnected', ()=>console.log("mongodb disconnected"));

module.exports = db;

