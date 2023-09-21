import mongoose from "mongoose";
//Ciudad
const CiudadSchema=new mongoose.Schema({
    nombre: { type: String, required: true },
    codigoDaneCiudad: { type: String, required: true },
    region: { type: String, required: true },
    departamento: { type: String, required: true },
    codigoDaneDepartamento: { type: String, required: true },
})

export default mongoose.model('Ciudad',CiudadSchema)