import { check } from "express-validator";
import httpRedConocimiento from "../controllers/redConocimiento.js";
import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos.js";
// import { validarJWT } from "../middlewares/validar-jwt.js";
import { validarCodigoRed } from "../helper/db_validator.js";

const router = Router();

router.get("/",
// [validarJWT], 
httpRedConocimiento.getRedesConocimiento);

router.get("/:nombre", httpRedConocimiento.getRedesConocimientoNombre);

router.post("/", [
    // validarJWT,
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("codigo").custom(codigo => validarCodigoRed(codigo)).withMessage("El codigo no es válida"),
    check("codigo", "El código es requerido").not().isEmpty(),
], validarCampos, httpRedConocimiento.postRedesConocimiento);

router.put("/editRedConocimiento/:id", [
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("codigo", "El código es requerido").not().isEmpty(),
], validarCampos, httpRedConocimiento.putRedConocimiento);

router.put("/estado/:id", httpRedConocimiento.actualizarestado);

export default router;
