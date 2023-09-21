import httpCiudad from "../controllers/ciudad.js"
import { Router } from "express"

const router = Router()

  router.get("/", httpCiudad.getCiudad)

  router.post("/", httpCiudad.postCiudad)
  
  export default router