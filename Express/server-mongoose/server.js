const express=require('express')
const app=express()
const Port=3000



app.use(express.json())//To pass the request
const db = require('./config/db')

app.get('/',(req,res)=>{
    res.status(200).json("Hello");
})


app.listen(Port,(()=>console.log(`Listening on: ${Port}`))
)