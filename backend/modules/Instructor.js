import mongoose from "mongoose";
//Instructor
const InstructorSchema=new mongoose.Schema({
    identificacion: {type: String, required:true, unique: true},
    nombreApellidos: {type:String, required: true},
    programaFormacion: { type: mongoose.Schema.Types.ObjectId, ref: 'programaFormacion' ,require:true},
    email: {type:String, required: true, unique: true},
    estado:  { type: Boolean, default: true }
})

export default mongoose.model('Instructor', InstructorSchema)