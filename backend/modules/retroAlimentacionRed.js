import mongoose from "mongoose";

const retroAlimentacionRedSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true},
    nombre: { type: String, required: true},
    estado: {type: Boolean, default: true},
})

export default mongoose.model("RetroAlimentacionRed", retroAlimentacionRedSchema);