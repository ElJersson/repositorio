import mongoose from "mongoose";

const ambienteFormacionSchema = new mongoose.Schema({
  numAmbiente: { type: Number, required: true, unique: true  },
  centroFormacion: { type: mongoose.Schema.Types.ObjectId, ref: 'CentroFormacion', required: true },
  tipo: { type: String, required: true },
  descripcion: { type: String, required: true },
  estado: { type: Boolean, default: true }, // Cambiado el tipo de String a Boolean y establecido un valor por defecto
});

export default mongoose.model('AmbienteFormacion', ambienteFormacionSchema);

