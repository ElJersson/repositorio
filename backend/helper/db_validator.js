import Usuario from "../modules/usuario.js";
import RedConocimiento from "../modules/redConocimiento.js";

const validarCedula= async(cc) =>{
 const existeDocumento= await Usuario.findOne({cc})
 if (existeDocumento) {
    throw new Error (`El documento ${cc} ya existe, cambielo.`)
 }
}

const validarCodigoRed=async(codigo)=>{
   const existeCodigo=await RedConocimiento.findOne({codigo})
   if (existeCodigo) {
   throw new Error (`El Codigo ${codigo} ya existe, cambielo.`)
   }
}

export { validarCedula,validarCodigoRed }