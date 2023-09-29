import { check } from "express-validator";
import hhtpAmbienteFormacion from "../controllers/ambienteFormacion.js";
import { Router } from "express";

const router = Router();


router.get("/", hhtpAmbienteFormacion.getAmbienteFormacion);

router.get("/:numAmbiente", hhtpAmbienteFormacion.getAmbienteFormacionNumAmbiente);

router.post("/", hhtpAmbienteFormacion.postAmbienteFormacion);

router.put("/AmbienteFormacion/:id", hhtpAmbienteFormacion.putAmbienteFormacion);

router.put("/estado/:id", hhtpAmbienteFormacion.actualizarestado)

  

export default router;
