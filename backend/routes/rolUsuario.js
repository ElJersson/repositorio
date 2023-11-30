import { check } from "express-validator";
import hhtpRolUsuario from "../controllers/rolUsuario.js";
import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";


const router = Router();

router.get("/",
[validarJWT],
 hhtpRolUsuario.getRolUsuario);

router.post("/", [
    check("codigo", "El código es requerido").not().isEmpty(),
    check("denominacion", "La denominación es requerida").not().isEmpty(),
], validarCampos, hhtpRolUsuario.postRolUsuario);

router.put("/editRolUsuario/:id", [
    check("codigo", "El código es requerido").not().isEmpty(),
    check("denominacion", "La denominación es requerida").not().isEmpty(),
], validarCampos, hhtpRolUsuario.putRolUsuario);

router.put("/estado/:id", hhtpRolUsuario.actualizarestado);

export default router;