import express from "express"
import cors from "cors"
import mongoose from 'mongoose'
import redConocimiento from "../routes/redConocimiento.js"
import ambienteFormacion from "../routes/ambienteFormacion.js"
import desarolloCurricular from "../routes/desarolloCurricular.js"
import usuario from "../routes/usuario.js"
import ciudad from "../routes/ciudad.js"
import rolUsuario from "../routes/rolUsuario.js"
import programaFormacion from "../routes/programaFormacion.js"
import centrosFormacion from "../routes/centrosFormacion.js"
import materialFormacion from "../routes/materialFormacion.js"
import nivelFormacion from "../routes/nivelFormacion.js"

import fileUpload from 'express-fileupload';


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
        this.app.use('/desarolloCurricular',desarolloCurricular)
        this.app.use('/usuario',usuario)
        this.app.use('/programaFormacion',programaFormacion)
        this.app.use('/centrosFormacion',centrosFormacion)
        this.app.use('/ciudad',ciudad)
        this.app.use('/materialFormacion',materialFormacion)
        this.app.use('/rolUsuario',rolUsuario)
        this.app.use('/nivelFormacion',nivelFormacion)


    }

    middlewares(){

        this.app.use(fileUpload({
                useTempFiles:true,
                tempFileDir:'/tmp/',
                createParentPath:true}));
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