import jwt from "jsonwebtoken"
import Usuario from "../modules/usuario.js";

const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.CLAVE, {
            expiresIn: "4h"//4h
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("No se pudo generar el token")
            } else {
                resolve(token)
            }
        })
    })
}
const validarJWT = async (req, res, next)=>{
    const token = req.header("x-token")

    if(!token){
        return res.status(401).json({message:"No hay token"})
    }
    try {
        const payload = jwt.verify(token, process.env.CLAVE)
        const usuario = await Usuario.findById(payload.userId)
        req.usuario= usuario
        next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({message:"Token no valido"})
    }
}



export { generarJWT, validarJWT }