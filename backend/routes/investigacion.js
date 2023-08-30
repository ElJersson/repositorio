import httpInvestigacion from "../controllers/investigacion.js"
import { Router } from "express"

const router = Router()

  router.get("/", httpInvestigacion.getInvestigacion)

  // router.post("/", httpDesarolloCurricular.postTiquete)
  
  export default router