import mongoose from "mongoose";
//desarollo curricular
const DesarolloCurricularSchema=new mongoose.Schema({
    idGuias: {type: String, required:true, unique: true},
    matrizCorrelacion: {type:String, required: true},
    proyectoFormacion: {type:String, required: true},
    planeacionPedagogica: {type:String, required: true,},
})

export default mongoose.model('DesarolloCurricular',DesarolloCurricularSchema)