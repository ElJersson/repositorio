import Administrador from "../modules/administrador.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";


function generartoken(id) {
    return jwt.sign({ id: id }, process.env.CLAVE);
}


const httpAdministrador = {
    iniciarSesion: async (req, res) => {
        const { email, password } = req.body;
    
        try {
          const admin = await Administrador.findOne({ email });
          
          if (!admin) {
            return res.status(401).json({ message: "Correo incorrectos" });
          }
         let id = admin._id
         console.log(id);

         const compContraseña = bcryptjs.compareSync(password, admin.password);
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
    
    getAdministrador: async (req, res) => {
        try {
            const administradores = await Administrador.find();
            res.json(administradores);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener los administradores" });
        }
    },

    //   mirar para crear un adiminstrador por nombre y apellido

    postAdministrador: async (req, res) => {
        const { cc, nombre, apellidos, password,direccion,email, telefono, estado  } = req.body;

        try {
           
            const nuevoAdministrador = {
                cc,
                nombre,
                apellidos,
                password,
                direccion,
                email,
                telefono,
                estado
            };
           
            const salt=bcryptjs.genSaltSync()
            nuevoAdministrador.password =  bcryptjs.hashSync(req.body.password,salt)

           Administrador.create(nuevoAdministrador)

            res.status(201).json(nuevoAdministrador);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al crear el administrador" });
        }
    },

    putAdministrador: async (req, res) => {
        const { id } = req.params;
        const { nombreApellidos, ciudad_destino, fecha_hora_origen, estado } = req.body;

        try {
            const administradorActualizado = await Administrador.findByIdAndUpdate(
                id,
                {
                    nombreApellidos,
                    ciudad_destino,
                    fecha_hora_origen,
                    estado
                },
                { new: true }
            );

            if (administradorActualizado) {
                res.json(administradorActualizado);
            } else {
                res.status(404).json({ mensaje: "Administrador no encontrado" });
            }
        } catch (error) {
            res.status(500).json({ mensaje: "Error al actualizar el administrador" });
        }
    },
    actualizarestado: async (req, res) => {
        const id = req.params.id;
        console.log(`estado actualizado ${id}`);

        const actualizado = {
            estado: req.body.estado,
        };

        try {

            const administradorActualizado = await Administrador.findByIdAndUpdate(id, actualizado);

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

export default httpAdministrador;
