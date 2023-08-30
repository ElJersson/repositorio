import Administrador from "../modules/usuario.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";


function generartoken(id) {
    return jwt.sign({ id: id }, process.env.CLAVE);
}


const httpUsuario = {
    iniciarSesion: async (req, res) => {
        const { email, password } = req.body;
    
        try {
          const usuario = await Usuario.findOne({ email });
          
          if (!usuario) {
            return res.status(401).json({ message: "Correo incorrectos" });
          }
         let id = usuario._id
         console.log(id);

         const compContraseña = bcryptjs.compareSync(password, usuario.password);
         console.log('compContraseña:', compContraseña);
          if (!compContraseña) {
            return res.status(401).json({ message: "contraseña incorrectos" });
          }
          let token= generartoken(id)
          return res.json({ message: "Inicio de sesión exitoso",
                            token: token 
                          });
          
        } catch (error) {
          console.error("Error de inicio de sesión:", error);
          return res.status(500).json({ message: "Ocurrió un error durante el inicio de sesión" });
        }
      },
    
    getUsuario: async (req, res) => {
        try {
            const Usuarios = await Usuario.find();
            res.json(Usuarios);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener los Usuarios" });
        }
    },

    //   mirar para crear un adiminstrador por nombre y apellido

    postUsuario: async (req, res) => {
        const { cc, nombre, apellidos, password,direccion,email,perfilProfecional,curriculum,rol,telefono, estado  } = req.body;
        try {
            const nuevoUsuario = {cc,nombre,apellidos,password,direccion,email,perfilProfecional,curriculum,rol,telefono,estado};
            const salt=bcryptjs.genSaltSync()
            nuevoUsuario.password =  bcryptjs.hashSync(req.body.password,salt)

            Usuario.create(nuevoUsuario)

            res.status(201).json(nuevoUsuario);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al crear el Usuario" });
        }
    },

    putUsuario: async (req, res) => {
        const { id } = req.params;
        const { nombre, apellidos,direccion,perfilProfecional,curriculum,telefono,estado } = req.body;

        try {
            const usuarioActualizado = await Usuario.findByIdAndUpdate(
                id,
                {nombre,apellidos,direccion,perfilProfecional,curriculum,telefono,estado },
                { new: true }
            );

            if (usuarioActualizado) {
                res.json(usuarioActualizado);
            } else {
                res.status(404).json({ mensaje: "usuario no encontrado" });
            }
        } catch (error) {
            res.status(500).json({ mensaje: "Error al actualizar el usuario" });
        }
    },
    actualizarestado: async (req, res) => {
        const id = req.params.id;
        console.log(`estado actualizado ${id}`);

        const actualizado = {
            estado: req.body.estado,
        };

        try {

            const administradorActualizado = await Usuario.findByIdAndUpdate(id, actualizado);

            if (administradorActualizado) {
                console.log(administradorActualizado);
                res.status(200).json(administradorActualizado)
            } else {
                res.status(400).json({error: 'administrador no encontrado'})
            }

        } catch (error) {
            res.status(500).json({error: 'no se pudo actualizar el administrador'})
        }
  }

};

export default httpUsuario;
