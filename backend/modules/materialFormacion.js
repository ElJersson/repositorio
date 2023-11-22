import mongoose from "mongoose";
//material de formacion
const materialFromacionSchema=new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    tipo: { type: String, required: true },
    codigo: { type: String, required: true },
    documento: { type: String},
    estado: { type: Boolean, default: true }, 


})

export default mongoose.model('MaterialFormacion',materialFromacionSchema)