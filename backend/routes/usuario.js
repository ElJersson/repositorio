import { check } from "express-validator"
import httpUsuario from "../controllers/usuario.js"
import { Router } from "express"

const router= Router()


router.get("/", httpUsuario.getUsuario);

router.post('/inicio-sesion', httpUsuario.iniciarSesion);

// router.get("/:NumeroIdBus", httpAdministrador.getAdministrador);

router.post("/crearUsuario", httpUsuario.postUsuario);

router.put("/usuario/:id", httpUsuario.putUsuario);

router.put("/estado/:id", httpUsuario.actualizarestado)

  
  
  export default router