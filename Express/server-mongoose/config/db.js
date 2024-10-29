const mongoose=require('mongoose')

mongoose.coonect("mongodb+srv://Akshitha:01102004in-aws.qxas7.mongodb.net/")

const connection=mongoose.connection;

connection.on('connected',()=>{console.log("DB Connected")})
connection.on('error',()=>{console.log("DB error")})
module.exports=mongoose
