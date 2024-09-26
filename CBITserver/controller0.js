const express= require('express')
const router= express.Router()
const Model0= require('../Model1/model0')

router.get('/', async(req, res)=>
{
    try{
        const controller0= await Model0.find()
        res.json(controller0)
    }
    catch(err){
        res.send('Error'+ err)
    }
})

router.get('/:id', async(req, res)=>
{
    try{
        const model0= await Model0.findById(req.params.id)
        res.json(model0)
    }
    catch(err){
        res.send('Error'+ err)
    }
})

router.post('/', async(req, res)=>
{
    const model0= new Model0
    ({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
        rno: req.body.rno,
        year: req.body.year,
    })
    try{
        const a1= await model0.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
})

router.patch('/:id', async(req, res)=>
{
    try{
        const model0= await Model0.findById(req.params.id)
        model0.sub= req.body.sub
        const a1= await model0.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
})

module.exports= router