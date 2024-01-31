const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModel')

const getTareas = asyncHandler( async(req,res) =>{
    const tareas =await Tarea.find();
    res.status(200).json(tareas)
})

const createTareas = asyncHandler( async (req,res) =>{
    if(!req.body.descripcion){
        //res.status(400).json({message: 'Por favor escriba una description'})
        res.status(400)
        throw new Error('Por favor escriba una description');
    }
    const tarea= await Tarea.create({
        descripcion: req.body.descripcion
    })
    res.status(201).json(tarea)
})

const updateTareas = asyncHandler( async(req,res) =>{
    const tarea = await Tarea.findById(req.params.id)

    if(!tarea){
        res.status(400)
        throw new Error('Esa tarea no existe')
    }
    
    const tareaUpdate = await Tarea.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.status(200).json(tareaUpdate)
})

const deleteTareas = asyncHandler( async(req,res) =>{
    const tarea = await Tarea.findById(req.params.id)
    if(!tarea){
        res.status(400)
        throw new Error('Esa tarea no existe')
    }
    await Tarea.deleteOne(tarea)
    //const tareaDeleted = await Tarea.findByIdAndDelete(req.params.id)
    res.status(200).json({id: req.params.id})
})

module.exports={
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}