import mongoose from "mongoose";

const nivelFormacionSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true },
  denominacion: { type: String, required: true },
  estado: { type: Boolean, default: true },
});
export default mongoose.model("NivelFormacion", nivelFormacionSchema);


