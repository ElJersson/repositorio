import mongoose, { mongo } from "mongoose";

const proyectoSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    estado : { type: Boolean, default: true },

})
export default mongoose.model("Proyecto", proyectoSchema)