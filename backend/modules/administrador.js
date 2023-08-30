import mongoose from "mongoose";
//Administrador
const administradorSchema=new mongoose.Schema({
    cc: { type: String, required: true, unique: true, minlength: 7, maxlength: 10 },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    password: { type: String, required: true, minlength: 8 },
    direccion: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: Number, minlength: 7, maxlength: 10 },
    estado:  { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
})

export default mongoose.model('Administrador', administradorSchema)