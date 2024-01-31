const mongoose  = require('mongoose');

const tareaSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: [true, 'por favor ingrese una descripción']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)