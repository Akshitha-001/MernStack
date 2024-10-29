const express=require('express')
const Port=3000

const app=express()

app.use(express.json())//To pass the request

app.get('/',(req,res)=>{
    res.status(200).json("Hello");
})


app.listen(Port,(()=>console.log(`Listening on: ${Port}`))
)