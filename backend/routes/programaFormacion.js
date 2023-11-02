import { check } from "express-validator";
import httpProgramaFormacion from "../controllers/programaFormacion.js";
import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";


const router = Router();

router.get("/",
[validarJWT], 
httpProgramaFormacion.getProgramaFormacion);

router.get("/:codigo", httpProgramaFormacion.getProgramaFormacionCodigo);

router.post("/", [
    validarJWT,
    check("codigo", "El código es requerido").not().isEmpty(),
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("redConocimiento", "La red de conocimiento es requerida").not().isEmpty(),
    check("nivelFormacion", "El nivel de formación es requerido").not().isEmpty(),
    check("version", "La versión es requerida").not().isEmpty(),
], validarCampos, httpProgramaFormacion.postProgramaFormacion);

router.put("/ProgramaFormacion/:id", [
    check("codigo", "El código es requerido").not().isEmpty(),
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("redConocimiento", "La red de conocimiento es requerida").not().isEmpty(),
    check("nivelFormacion", "El nivel de formación es requerido").not().isEmpty(),
    check("version", "La versión es requerida").not().isEmpty(),
], validarCampos, httpProgramaFormacion.putProgramaFormacion);

router.put("/estado/:id", httpProgramaFormacion.actualizarestado);

export default router;
