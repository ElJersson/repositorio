import mongoose from "mongoose";

const programaFormacionSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true, },
  nombre: { type: String, required: true, unique: true, },
  redConocimiento: { type: mongoose.Schema.Types.ObjectId, ref: 'RedConocimiento' ,require:true},
  nivelFormacion: { type: String, required: true },
  version: { type: Number, required: true },
  estado:  { type: Boolean, default: true },
  diseñoCurricular: { type: String},
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' ,require:true},

});

export default mongoose.model('programaFormacion', programaFormacionSchema);
