import httpDesarolloCurricular from "../controllers/desarolloCurricular.js"
import { Router } from "express"

const router = Router()

  router.get("/", httpDesarolloCurricular.getDesarolloCurricular)

  // router.post("/", httpDesarolloCurricular.postTiquete)
  
  export default router