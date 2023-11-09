import { check } from "express-validator";
import httpNivelFormacion from "../controllers/nivelFormacion.js";
import { Router } from "express";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { validarCampos } from "../middlewares/validar-campos.js";


const router = Router();

router.get("/",
[validarJWT],
 httpNivelFormacion.getNivelDeFormacion);

router.get("/:codigo", httpNivelFormacion.getNivelFormacionCodigo);

router.post("/", [
    validarJWT,
    check("codigo", "El código es requerido").not().isEmpty(),
    check("denominacion", "La denominación es requerida").not().isEmpty(),
], validarCampos, httpNivelFormacion.postNivelFormacion);

router.put("/administrador/:id", [
    check("codigo", "El código es requerido").not().isEmpty(),
    check("denominacion", "La denominación es requerida").not().isEmpty(),
], validarCampos, httpNivelFormacion.putNivelFormacion);

router.put("/estado/:id", httpNivelFormacion.actualizarestado);

export default router;
