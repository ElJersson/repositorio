import mongoose from "mongoose"

const pagoSchema = new mongoose.Schema({
   total_pago: {type:String},
   fecha_pago:{type:Date},
   numero_asiento: {type:Number},
   estado: {type:String},
   createAt:{type:Date, default:Date.now},
   cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Clientes' ,require:true },
   administrador: { type: mongoose.Schema.Types.ObjectId, ref: 'Administrador' ,require:true},
   bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Buses' ,require:true },
   estado:  { type: Boolean, default: true },
});
export default mongoose.model('tiquetes', pagoSchema);

  