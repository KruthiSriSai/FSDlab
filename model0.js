const mongoose= require('mongoose')
const model0Schema= new mongoose.Schema
({
    name:{
        type: String,
        required: true
    },
    tech:{
        type: String,
        required: true
    },
    sub:{
        type: Boolean,
        required: true,
        default: false
    },
    rno:{
        type: Number,
        required: true,
    },
    year:{
        type: Number,
        required: true,
    }
})

module.exports= mongoose.model('Model0', model0Schema)