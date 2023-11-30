import mongoose from 'mongoose';

const configuracionSchema = new mongoose.Schema(
  {
   colorletra: {type:String, require:true},
   colormenu: {type:String, require:true},
   createdat : {type: Date, default: Date.now}
  },
  {collection: 'Configuracion', }
);

export default  mongoose.model('Configuracion', configuracionSchema);
