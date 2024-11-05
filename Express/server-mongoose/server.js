const express=require('express')
const app=express()
const Port=4000
const db = require('./config/db')




//const Products=require('./models/ProductsModel')
//const Users = require('./models/UserModel')

const Products=require('./routes/ProductRoute')
app.get('/',(req,res)=>{
    res.status(200).json({ message:"Hello"});
})
app.use('/products',Products)


app.listen(Port,(()=>console.log(`Listening on: ${Port}`))
)