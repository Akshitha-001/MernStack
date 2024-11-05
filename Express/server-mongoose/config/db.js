const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://Akshitha:01102004@in-aws.qxas7.mongodb.net/max-store?retryWrites=true&w=majority&appName=In-AWS")

const connection=mongoose.connection;

connection.on('connected',()=>{console.log("DB Connected")})
connection.on('error',()=>{console.log("DB error")})
module.exports=mongoose

//const db=require('./config/db')