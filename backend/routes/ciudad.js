import { check } from "express-validator";
import httpCiudad from "../controllers/ciudad.js";
import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos.js";
// import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",
// [validarJWT], 
httpCiudad.getCiudad);

router.post("/", [
    // validarJWT,
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("codigoDaneCiudad", "El código DANE de la ciudad es requerido").not().isEmpty(),
    check("region", "La región es requerida").not().isEmpty(),
    check("departamento", "El departamento es requerido").not().isEmpty(),
    check("codigoDaneDepartamento", "El código DANE del departamento es requerido").not().isEmpty(),
], validarCampos, httpCiudad.postCiudad);

export default router;
