const getTareas = (req,res) =>{
    res.status(200).json({mesaje: 'Get tareas'})
}

const createTareas = (req,res) =>{
    res.status(200).json({mesaje: 'Create tareas'})
}

const updateTareas = (req,res) =>{
    res.status(200).json({
        mesaje: `Modificar la tarea con id ${req.params.id}`
    })
}

const deleteTareas = (req,res) =>{
    res.status(200).json({id: req.params.id})
}

module.exports={
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}