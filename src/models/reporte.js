const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    titulo: {
        type: String,
        require: true
    },
    descripcion:{
        type: String,
        require: true
    },
    ubicacion:{
        type: String,
        require: true
    },
    prioridad:{
        type: String,
        enum: ['Baja','Media','Alta'],
        default: 'media'
    },
    estado:{
        type: String,
        default: 'Abierto'
    },
    fecha_creacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Reporte', reportSchema);