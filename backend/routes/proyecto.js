import { check } from "express-validator";
import httpProyecto from "../controllers/proyecto.js";
import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router();

router.get("/", httpProyecto.getProyecto);

router.get("/:codigo", httpProyecto.getProyectoCodigo);

router.post("/", [
    check("codigo", "el codigo es requerido").not().isEmpty(),
    check("nombre", "el nombre es requerido").not().isEmpty(),
    check("descripcion", "la descripcion es obligatoria").not().isEmpty(),
], validarCampos,httpProyecto.postProyecto);

router.put("/administrador/:id", [
    check("codigo", "el codigo es requerido").not().isEmpty(),
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
check("descripcion", "la descripcion es obligatoria").not().isEmpty(),
], validarCampos, httpProyecto.putProyecto);

router.put("/estado/:id", httpProyecto.acutalizarestado);

export default router;