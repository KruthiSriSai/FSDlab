const express= require('express')
const mongoose= require('mongoose')
//const cors= require('cors')
const model0Router= require('./Controller1/controller0')

const url= 'mongodb://127.0.0.1:27017/CBIT'
//const url= 'mongodb+srv://kruthisrisai6:6303845370@cluster0.54rrt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const app= express()
mongoose.connect(url)
const con= mongoose.connection

con.on('open', ()=>
{
    console.log('connected...')
})
//app.use(cors())
app.use(express.json())

app.use('/controller0.js', model0Router)
app.listen(9000, ()=>
{
    console.log('Server started')
})