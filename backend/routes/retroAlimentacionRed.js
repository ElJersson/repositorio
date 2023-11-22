import { check } from "express-validator";
import httpRetroAlimentacionRed from "../controllers/retroAlimentacionRed.js";
import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router();

router.get("/", httpRetroAlimentacionRed.getRetroAlimentacionRed);

router.get("/:codigo", httpRetroAlimentacionRed.getRetroAlimentacionRedCodigo)

router.post("/", [
    check("codigo", "el codigo es requerido").not().isEmpty(),
    check("nombre", "el nombre es requerido").not().isEmpty(),
], validarCampos, httpRetroAlimentacionRed.postRetroAlimentacionRed);

router.put("/administrador/:id", [
    check("codigo", "el codigo es requerido").not().isEmpty(),
    check("nombre", "el nombres es requerido").not().isEmpty(),
], validarCampos, httpRetroAlimentacionRed.putRetroAlimentacionRed);

router.put("/estado/:id", httpRetroAlimentacionRed.actualizarestado)

export default router