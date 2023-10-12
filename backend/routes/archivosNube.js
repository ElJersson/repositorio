import { Router } from "express";
import holdersHttp from "../controllers/archivosNube.js";

const router = Router();


router.post('/upload/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(helpersHolder.existeHolderById), 
    validarExistaArchivo,
    validarCampos
],holdersHttp.cargarArchivo)

router.post('/uploadcloud/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(helpersHolder.existeHolderById), 
    validarExistaArchivo,
    validarCampos
],holdersHttp.cargarArchivoCloud)

router.get("/upload/:id",[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(helpersHolder.existeHolderById), 
    validarCampos   
],holdersHttp.mostrarImagen)

router.get("/uploadcloud/:id",[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(helpersHolder.existeHolderById), 
    validarCampos   
],holdersHttp.mostrarImagenCloud)

export default router;
