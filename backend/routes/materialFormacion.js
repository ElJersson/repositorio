import httpMaterialFormacion from "../controllers/materialFormacion.js"
import { Router } from "express"

const router = Router()

  router.get("/", httpMaterialFormacion.getMaterialFormacion)

  router.post("/", httpMaterialFormacion.postMaterialFormacion)

  router.put("/editMaterialFormacion/:id", httpMaterialFormacion.putMaterialFormacion);

  
  export default router