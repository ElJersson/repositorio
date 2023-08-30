import { check } from "express-validator"
import httpAdministrador from "../controllers/administrador.js"
import { Router } from "express"

const router= Router()


router.get("/", httpAdministrador.getAdministrador);

router.post('/inicio-sesion', httpAdministrador.iniciarSesion);

// router.get("/:NumeroIdBus", httpAdministrador.getAdministrador);

router.post("/crearAdmi", httpAdministrador.postAdministrador);

router.put("/administrador/:id", httpAdministrador.putAdministrador);

router.put("/estado/:id", httpAdministrador.actualizarestado)

  
  
  export default router