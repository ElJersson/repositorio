import Usuario from "../modules/usuario.js";
import bcryptjs from "bcryptjs";
import { generarJWT } from "../middlewares/validar-jwt.js";

const httpUsuario = {
  iniciarSesion: async (req, res) => {
    const { email, password } = req.body;

    try {
      const usuario = await Usuario.findOne({ email });

      if (!usuario) {
        return res.status(401).json({ message: "Correo incorrectos" });
      }

      if (usuario.estado === false) {
        return res.status(400).json({
          message: "Usuario inactivo",
        });
      }

      let idUsuario = usuario._id;
      //console.log(id);

      const compContraseña = bcryptjs.compareSync(password, usuario.password);
      console.log("compContraseña:", compContraseña);
      if (!compContraseña) {
        return res.status(401).json({ message: "contraseña incorrectos" });
      }
      let token = await generarJWT(idUsuario);
      return res.json({ message: "Inicio de sesión exitoso", token, usuario });
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      return res
        .status(500)
        .json({ message: "Ocurrió un error durante el inicio de sesión" });
    }
  },
  //listar los usuarios
  getUsuario: async (req, res) => {
    const usuarios = await Usuario.find();
    res.json({ usuarios });
  },

  //crear un nuevo Usuario

  postUsuario: async (req, res) => {
    const {
      cc,
      nombre,
      apellidos,
      password,
      direccion,
      email,
      perfilProfesional,
      curriculum,
      rol,
      telefono,
      estado,
    } = req.body;
    try {
      const nuevoUsuario = {
        cc,
        nombre,
        apellidos,
        password,
        direccion,
        email,
        perfilProfesional,
        curriculum,
        rol,
        telefono,
        estado,
      };
      const salt = bcryptjs.genSaltSync();
      nuevoUsuario.password = bcryptjs.hashSync(req.body.password, salt);

      Usuario.create(nuevoUsuario);

      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al crear el Usuario" });
    }
  },
  // editar usuario
  putUsuario: async (req, res) => {
    const { id } = req.params; // Se obtiene el parámetro 'id' desde la URL
    const {
      nombre,
      apellidos,
      direccion,
      perfilProfesional,
      curriculum,
      telefono,
      estado,
    } = req.body;

    try {
      // Buscar el usuario por id
      const usuario = await Usuario.findById(id);

      if (!usuario) {
        return res.status(404).json({ error: "usuario no encontrado" });
      }

      // Actualizar los campos del usuario con los valores nuevos
      usuario.apellidos = apellidos;
      usuario.nombre = nombre;
      usuario.direccion = direccion;
      usuario.perfilProfesional = perfilProfesional;
      usuario.curriculum = curriculum;
      usuario.telefono = telefono;
      usuario.estado = estado;

      // Guardar los cambios en la base de datos
      await usuario.save();

      res.json({ usuario });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor" });
    }
  },

  // editar el estado
  actualizarestado: async (req, res) => {
    const id = req.params.id;
    console.log(`estado actualizado ${id}`);

    const actualizado = {
      estado: req.body.estado,
    };

    try {
      const administradorActualizado = await Usuario.findByIdAndUpdate(
        id,
        actualizado
      );

      if (administradorActualizado) {
        console.log(administradorActualizado);
        res.status(200).json(administradorActualizado);
      } else {
        res.status(400).json({ error: "administrador no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "no se pudo actualizar el administrador" });
    }
  },
};

export default httpUsuario;
