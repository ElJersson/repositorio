import { check } from "express-validator";
import httpInvestigacion from "../controllers/investigacion.js"
import { Router } from "express"
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router()

router.get("/", httpInvestigacion.getInvestigacion)

router.get("/:codigo", httpInvestigacion.getInvestigacionCodigo)

router.post("/", [
  check("nombre", "el nombre es requerido").not().isEmpty(),
  check("codigo", "el codigo es requerido").not().isEmpty(),
  check("descripcion", "la descripcion es obligatoria").not().isEmpty(),
  check("fecha", "la fecha es obligatoria").not().isEmpty(),
  check("documento", "el documento es obligatorio").not().isEmpty(),
  check("programaFormacion", "el programa formacion es obligatoria").not().isEmpty(),
], validarCampos, httpInvestigacion.postInvestigacion);

router.put("/", [
  check("nombre", "el nombre es requerido").not().isEmpty(),
  check("codigo", "el codigo es requerido").not().isEmpty(),
  check("descripcion", "la descripcion es obligatoria").not().isEmpty(),
  check("fecha", "la fecha es obligatoria").not().isEmpty(),
  check("documento", "el documento es obligatorio").not().isEmpty(),
  check("programaFormacion", "el programa formacion es obligatoria").not().isEmpty(),
], validarCampos, httpInvestigacion.putInvestigacion);

router.put("/estado/:id", httpInvestigacion.actualizarestado)

export default router