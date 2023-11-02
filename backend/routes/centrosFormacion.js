import { check } from "express-validator";
import httpCentroFormacion from "../controllers/centrosFormacion.js";
import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
const router = Router();

router.get("/",
[validarJWT],
 httpCentroFormacion.getCentroFormacion);

router.post("/", [
    validarJWT,
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("codigo", "El código es requerido").not().isEmpty(),
    check("direccion", "La dirección es requerida").not().isEmpty(),
    check("idCiudad", "El ID de la ciudad es requerido").not().isEmpty(),
], validarCampos, httpCentroFormacion.postCentroFormacion);

router.put("/editCentroFormacion/:id", [
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("codigo", "El código es requerido").not().isEmpty(),
    check("direccion", "La dirección es requerida").not().isEmpty(),
    check("idCiudad", "El ID de la ciudad es requerido").not().isEmpty(),
], validarCampos, httpCentroFormacion.putCentroFormacion);

export default router;
