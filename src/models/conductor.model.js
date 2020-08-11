const {Schema,model} = require('mongoose');

const conductorSchema = new Schema({
    rut: {type: String, unique: true, required: true},
    nombres:{type: String, required: true},
    apellidos: {type: String, required: true},
    estado:{type:String}

},{
    timestamps: true
})

module.exports = model('Conductores', conductorSchema);
