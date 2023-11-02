import { check } from "express-validator";
import httpMaterialFormacion from "../controllers/materialFormacion.js";
import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos.js";
// import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",
// [validarJWT],
 httpMaterialFormacion.getMaterialFormacion);

router.post("/", [
    // validarJWT,
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("descripcion", "La descripción es requerida").not().isEmpty(),
    check("tipo", "El tipo es requerido").not().isEmpty(),
    check("codigo", "El código es requerido").not().isEmpty(),
], validarCampos, httpMaterialFormacion.postMaterialFormacion);

router.put("/editMaterialFormacion/:id", [
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("descripcion", "La descripción es requerida").not().isEmpty(),
    check("tipo", "El tipo es requerido").not().isEmpty(),
    check("codigo", "El código es requerido").not().isEmpty(),
], validarCampos, httpMaterialFormacion.putMaterialFormacion);

router.put("/estado/:id", httpMaterialFormacion.actualizarestado);

export default router;
