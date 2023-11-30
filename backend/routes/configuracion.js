import httpconfiguracion from "../controllers/configuracion.js";
import { Router } from "express"


const router= Router()

router.post("/", httpconfiguracion.postConfiguracion)

router.get('/', httpconfiguracion.getConfiguracion);

router.put("/:id", httpconfiguracion.putConfiguracion);


export default router;