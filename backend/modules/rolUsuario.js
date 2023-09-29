import mongoose from "mongoose";

const rolUsuarioSchema = new mongoose.Schema({
  codigo: { type: Number, required: true, unique: true  },
  denominacion: { type: String, required: true },
  estado: { type: Boolean, default: true }, // Cambiado el tipo de String a Boolean y establecido un valor por defecto
});

export default mongoose.model('RolUsuario', rolUsuarioSchema);

