import express from "express"
import cors from "cors"
import mongoose from 'mongoose'
import redConocimiento from "../routes/redConocimiento.js"
import ambienteFormacion from "../routes/ambienteFormacion.js"
import tiquetes from "../routes/tiquetes.js"
import administrador from "../routes/administrador.js"
import Instructor from "../routes/Instructor.js"
import programaFormacion from "../routes/programaFormacion.js"


class Server{
    
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
        this.conectarBD()
    }
    conectarBD(){
        mongoose.connect(process.env.mongoDB)
        .then(()=>console.log('conectado')).catch((Err)=> console.log(Err))
    }

    routes(){
        this.app.use('/redConocimiento',redConocimiento)
        this.app.use('/ambienteFormacion',ambienteFormacion)
        this.app.use('/tiquetes',tiquetes)
        this.app.use('/administrador',administrador)
        this.app.use('/Instructor',Instructor)
        this.app.use('/programaFormacion',programaFormacion)
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(express.static('public'))
    }
    escuchar(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
          }) 
    } 
}   

export default Server