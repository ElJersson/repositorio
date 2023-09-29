import { check } from "express-validator";
import hhtpRolUsuario from "../controllers/rolUsuario.js";
import { Router } from "express";

const router = Router();


router.get("/", hhtpRolUsuario.getRolUsuario);

router.post("/", hhtpRolUsuario.postRolUsuario);

router.put("/editRolUsuario/:id", hhtpRolUsuario.putRolUsuario);

router.put("/estado/:id", hhtpRolUsuario.actualizarestado)

  

export default router;
