import mongoose from "mongoose";
//Redes de conocimiento
const redConocimientoSchema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    codigo: { type: String, required: true },
    estado:  { type: Boolean, default: true },
  });
// hol
export default mongoose.model('RedConocimiento', redConocimientoSchema)