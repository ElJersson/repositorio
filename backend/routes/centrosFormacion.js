import httpCentroFormacion from "../controllers/centrosFormacion.js"
import { Router } from "express"

const router = Router()

  router.get("/", httpCentroFormacion.getCentroFormacion)

  router.post("/", httpCentroFormacion.postCentroFormacion)

  router.put("/editCentroFormacion/:id", httpCentroFormacion.putCentroFormacion);

  
  export default router