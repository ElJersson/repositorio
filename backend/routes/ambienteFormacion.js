import { check } from "express-validator";
import htpAmbienteFormacion from "../controllers/ambienteFormacion.js";
import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
const router = Router();

router.get("/",
[validarJWT],
 htpAmbienteFormacion.getAmbienteFormacion);

router.get("/:numAmbiente", htpAmbienteFormacion.getAmbienteFormacionNumAmbiente);

router.post("/", [
    check("numAmbiente", "El número de ambiente es requerido").not().isEmpty(),
    check("centroFormacion", "El centro de formación es requerido").not().isEmpty(),
    check("tipo", "El tipo de ambiente es requerido").not().isEmpty(),
    check("descripcion", "La descripción es requerida").not().isEmpty(),
], validarCampos, htpAmbienteFormacion.postAmbienteFormacion);

router.put("/AmbienteFormacion/:id", [
    check("numAmbiente", "El número de ambiente es requerido").not().isEmpty(),
    check("centroFormacion", "El centro de formación es requerido").not().isEmpty(),
    check("tipo", "El tipo de ambiente es requerido").not().isEmpty(),
    check("descripcion", "La descripción es requerida").not().isEmpty(),
], validarCampos, htpAmbienteFormacion.putAmbienteFormacion);

router.put("/estado/:id", htpAmbienteFormacion.actualizarestado);

export default router;
