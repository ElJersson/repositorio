import { check } from "express-validator"
import { validarCampos } from "../middlewares/validar-campos.js"
import httpInstructor from "../controllers/Instructor.js"
import { Router } from "express"

const router= Router()

  
router.get("/", httpInstructor.getInstructor);

router.get("/:identificacion", httpInstructor.getInstructorIdentificacion);

router.post("/", httpInstructor.postInstructor);

router.put("/administrador/:id", httpInstructor.putInstructor);

router.put("/estado/:id", httpInstructor.actualizarestado)

  
  
  export default router