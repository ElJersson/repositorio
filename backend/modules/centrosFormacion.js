import mongoose from "mongoose";
//centro de formacion
const CentroFromacionSchema=new mongoose.Schema({
    nombre: { type: String, required: true },
    codigo: { type: String, required: true },
    direccion: { type: String, required: true },
    idCiudad: { type: mongoose.Schema.Types.ObjectId, ref: 'Ciudad', required: true }
})

export default mongoose.model('CentroFormacion',CentroFromacionSchema)