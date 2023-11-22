import Usuario from "../modules/usuario.js";
import bcryptjs from "bcryptjs";
import { generarJWT } from "../middlewares/validar-jwt.js";
import { v2 as cloudinary } from "cloudinary";

const httpUsuario = {

  // Iniciar sesion 
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
    const usuarios = await Usuario.find().populate("rol");
    res.json({ usuarios });
  },

  //crear un nuevo Usuario con el archivo de curriculum
  postUsuario: async (req, res) => {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
      secure: true,
    });
    try {
      const {
        cc,
        nombre,
        apellidos,
        password,
        direccion,
        email,
        perfilProfesional,
        rol,
        telefono,
        estado,
      } = req.body;
      const { curriculum } = req.files;
      
      if (curriculum) {
        const extension = curriculum.name.split(".").pop();
        const { tempFilePath } = curriculum;
        const result = await cloudinary.uploader.upload(tempFilePath, {
          width: 250,
          crop: "limit",
          resource_type: "raw",
          allowedFormats: ["jpg", "png", "docx", "xlsx", "pptx", "pdf"],
          format: extension,
        });
        const buscar = await Usuario.findOne({ cc: cc });
        if (buscar) {
          return res
            .status(400)
            .json({
              msg: `Se encontro un Usuario registrado con ese cc ${cc}`,
            });
        } else {
          const nuevoUsuario = new Usuario({
            cc: cc,
            nombre: nombre,
            apellidos: apellidos,
            password: password,
            direccion: direccion,
            email: email,
            perfilProfesional: perfilProfesional,
            curriculum: result.url,
            rol: rol,
            telefono: telefono,
            estado: estado,
          });
          const salt = bcryptjs.genSaltSync();
           nuevoUsuario.password = bcryptjs.hashSync(req.body.password, salt);
          await nuevoUsuario.save()
          return res.status(201).json(nuevoUsuario);
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: "Error al crear el Usuario" });
    }
  },
  // Editar Usuario:
  putUsuario : async (req, res) => {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
      secure: true,
    });

    try {
        const { id } = req.params;
        const {
          cc,
          nombre,
          apellidos,
          password,
          direccion,
          email,
          perfilProfesional,
          rol, 
          telefono  
                } = req.body;


        const buscarCodigo = await Usuario.findOne({ cc: cc });
        if (buscarCodigo && buscarCodigo._id.toString() !== id) {
            return res
                .status(404)
                .json({ msg: "Ya se encuentra un Usuario registrado con ese codigo" });
        };

        let updatedData = {
                    nombre: nombre,
                    apellidos: apellidos,
                    cc: cc,
                    telefono: telefono,
                    email: email,
                    password: password,
                    perfilProfesional: perfilProfesional,
                    direccion: direccion,
                    rol: rol
        };

        if (req.files && req.files.curriculum) {
            const curriculum = req.files.curriculum;
            const extension = curriculum.name.split(".").pop();
            const { tempFilePath } = curriculum;
            const result = await cloudinary.uploader.upload(tempFilePath, {
                width: 250,
                crop: "limit",
                resource_type: "raw",
                allowedFormats: ["jpg", "png", "docx", "xlsx", "pptx", "pdf"],
                format: extension,
            });

            const buscar = await Usuario.findById(id);

            if (buscar.curriculum) {
                const nombreTemp = buscar.curriculum.split("/");
                const nombrecurriculum = nombreTemp[nombreTemp.length - 1];
                const [public_id] = nombrecurriculum.split(".");
                await cloudinary.uploader.destroy(public_id);
            };

            updatedData.curriculum = result.url;
        };

    
        const buscarUsuario = await Usuario.findByIdAndUpdate(
            { _id: id },
            { $set: updatedData },
            { new: true }
        );
        res.status(201).json(buscarUsuario);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
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

  // putUsuarioCurriculum: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const { curriculum } = req.files;
  //     if (!curriculum || !curriculum.tempFilePath) {
  //       return res.status(400).json({ error: "Archivo no proporcionado" });
  //     }

  //     const extension = curriculum.name.split('.').pop();
  //     const { tempFilePath } = curriculum;

  //     const result = await cloudinary.v2.uploader.upload(tempFilePath, {
  //       width: 250,
  //       crop: "limit",
  //       resource_type: "raw",
  //       format: extension,
  //     });

  //     let usuario = await Usuario.findById(id);
  //     if (!usuario) {
  //       return res.status(404).json({ error: "Usuario no encontrado" });
  //     }

  //     if (usuario.curriculum) {
  //       const nombreTemp = usuario.curriculum.split("/");
  //       const nombreCurriculum = nombreTemp[nombreTemp.length - 1];
  //       const [public_id] = nombreCurriculum.split(".");
  //       await cloudinary.v2.uploader.destroy(public_id);
  //     }
  //     usuario = await Usuario.findByIdAndUpdate(id, { curriculum: result.secure_url });
  //     res.json({ curriculum: result.secure_url });
  //   } catch (error) {
  //     console.error("Error en el controlador:", error);
  //     res.status(500).json({ error: error.message });
  //   }
  // },
};

export default httpUsuario;
