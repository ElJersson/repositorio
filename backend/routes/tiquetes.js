import httpTiquetes from "../controllers/tiquetes.js"
import { Router } from "express"

const router = Router()

  router.get("/", httpTiquetes.getTiquete)

  router.post("/", httpTiquetes.postTiquete)
  
  export default router