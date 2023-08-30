import { check } from "express-validator";
import httpProgramaFormacion from "../controllers/programaFormacion.js";
import { Router } from "express";

const router = Router();



router.get("/", httpProgramaFormacion.getProgramaFormacion);

router.get("/:codigo", httpProgramaFormacion.getProgramaFormacionCodigo);

router.post("/", httpProgramaFormacion.postProgramaFormacion);

router.put("/ProgramaFormacion/:id", httpProgramaFormacion.putProgramaFormacion);

router.put("/estado/:id", httpProgramaFormacion.actualizarestado)


export default router;
