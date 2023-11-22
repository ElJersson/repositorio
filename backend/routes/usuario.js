import { check } from "express-validator";
import httpUsuario from "../controllers/usuario.js";
import { Router } from "express";
import { validarCedula } from "../helper/db_validator.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js"

const router = Router();

router.get("/",
httpUsuario.getUsuario);
router.post('/inicio-sesion', httpUsuario.iniciarSesion);

router.post("/crearUsuario", [
    check("cc","Complete el campo cedula").trim().not().isEmpty(),
    check("cc","La cedula debe estar entre 8 y 10 digitos").trim().isLength({min:8,max:10}),
    check("nombre", "Nombre está vacío").not().isEmpty(),
    check("apellidos", "Apellidos están vacíos").not().isEmpty(),
    check("password", "La contraseña debe tener al menos 8 caracteres").isLength({ min: 8 }),
    check("direccion", "La dirección está vacía").not().isEmpty(),
    check("email", "El correo electrónico no es válido").isEmail(),
    check("perfilProfesional").optional(),
    check("rol", "El rol es requerido").trim().isMongoId(),
    check("telefono", "El teléfono debe ser numérico y tener entre 7 y 10 dígitos").isNumeric().isLength({ min: 7, max: 10 }),
], validarCampos, httpUsuario.postUsuario);

router.put("/editUsuario/:id", [
    check("nombre", "Nombre está vacío").not().isEmpty(),
    check("apellidos", "Apellidos están vacíos").not().isEmpty(),
    check("perfilProfesional").optional(),
    check("curriculum").optional(),
    check("telefono", "El teléfono debe ser numérico y tener entre 7 y 10 dígitos").isNumeric().isLength({ min: 7, max: 10 }),
], validarCampos, httpUsuario.putUsuario);

router.put("/estado/:id", httpUsuario.actualizarestado);

export default router;
