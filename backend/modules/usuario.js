import mongoose from "mongoose";
//Usuario
const UsuarioSchema=new mongoose.Schema({
    cc: { type: String, required: true, minlength: 7, maxlength: 10 },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    password: { type: String, required: true, minlength: 8 },
    direccion: { type: String, required: true },
    email: { type: String, required: true,},
    perfilProfesional: { type: String},
    curriculum: { type: String},
    rol: { type: mongoose.Schema.Types.ObjectId, ref: 'RolUsuario', required: true },
    telefono: { type: Number, minlength: 7, maxlength: 10, required: true },
    estado:  { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
})
export default mongoose.model('Usuario',UsuarioSchema)