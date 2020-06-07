const express=require('express')
const mongoose=require('mongoose')
const url= 'mongodb://localhost/AlienDBex'
const app=express()
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
con.on('open',function(){
    console.log('connected...')
})

const alienRouter=require('./routes/aliens')
app.use('/aliens',alienRouter)
app.listen(9000,function(){
    console.log('server started')
})