import httpRedConocimiento from "../controllers/redConocimiento.js";
import { Router } from "express";
import { check } from "express-validator";


const router = Router();


router.get("/", httpRedConocimiento.getRedesConocimiento);

router.get("/:nombre", httpRedConocimiento.getRedesConocimientoNombre);

router.post("/", httpRedConocimiento.postRedesConocimiento);

router.put("/RedConocimiento/:id", httpRedConocimiento.putRedConocimiento);

router.put("/estado/:id", httpRedConocimiento.actualizarestado)


export default router;
