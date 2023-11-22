import mongoose from "mongoose";
//Investigaciones
const InvestigacionSchema=new mongoose.Schema({
    nombre: {type: String, required:true},
    codigo: {type:String, required: true},
    descripcion: {type:String, required: true},
    fecha: {type:Date, required: true},
    documento: {type:String, required: true},
    programaFormacion: { type: mongoose.Schema.Types.ObjectId, ref: 'programaFormacion' ,require:true}, 
    estado: { type: Boolean, default: true },
})

export default mongoose.model('Investigacion',InvestigacionSchema)