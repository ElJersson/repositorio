import MaterialFormacion from "../modules/materialFormacion.js";
import { v2 as cloudinary } from "cloudinary";

const httpMaterialFormacion = {
    //listar los MaterialFormacion 
    getMaterialFormacion: async (req, res) => {
        const materialFormacion = await MaterialFormacion.find()
        res.json({ materialFormacion });
      },
      
   //crear un MaterialFormacion con el documento 
   postMaterialFormacion: async (req, res) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        secure: true,
      });
    try {
        const { 
             nombre,
             descripcion, 
             tipo, 
             codigo,
             estado
            } = req.body;
      const {documento} = req.files;

      if (documento) {
        const extension = documento.name.split(".").pop();
        const { tempFilePath } = documento;
        const result = await cloudinary.uploader.upload(tempFilePath, {
          width: 250,
          crop: "limit",
          resource_type: "raw",
          allowedFormats: ["jpg", "png", "docx", "xlsx", "pptx", "pdf"],
          format: extension,
        });
        const buscar = await MaterialFormacion.findOne({ codigo: codigo });
        if (buscar) {
          return res
            .status(400)
            .json({
              msg: `Se encontro un material de formacion registrado con ese codigo ${codigo}`,
            });
        } else {
        // Crear un nuevo centro de formación y esperar la promesa
        const nuevoMaterialFormacion = new MaterialFormacion({
            nombre: nombre,
            descripcion: descripcion,
            tipo: tipo,
            codigo:codigo,
            documento: result.url,
            estado: estado,

        }); 
        res.status(201).json(nuevoMaterialFormacion);
        }
      }
    }catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: "Error al crear el Material de Formacion" });
      }
},
       // editar usuario 
       putMaterialFormacion: async (req, res) => {
        const { id } = req.params;
        const { nombre, descripcion, tipo, codigo,documento } = req.body;
    
        try {
            // Buscar el centro de formación por id
            const materialFormacion = await MaterialFormacion.findById(id);
    
            if (!materialFormacion) {
                return res.status(404).json({ error: "Centro de formación no encontrado" });
            }
    
            // Actualizar los campos del centro de formación con los valores nuevos
            materialFormacion.nombre = nombre;            
            materialFormacion.descripcion = descripcion;            
            materialFormacion.tipo = tipo;
            materialFormacion.documento = documento;            
            materialFormacion.codigo = codigo;
    
            // Guardar los cambios en la base de datos y esperar la promesa
            const materialFormacionActualizado = await materialFormacion.save();
    
            // Responder con el centro de formación actualizado
            res.json({ materialFormacion: materialFormacionActualizado });
        } catch (error) {
            // Manejar errores de validación y otros errores
            res.status(500).json({ error: "Error en el servidor a la hora de editar el centro de fromación" });
        }
    },
    actualizarestado: async (req, res) => {
        const id = req.params.id;
        console.log(`estado actualizado ${id}`);

        const actualizado = {
            estado: req.body.estado,
        };

        try {
            const MaterialFormacionActualizada = await MaterialFormacion.findByIdAndUpdate(id, actualizado);

            if (MaterialFormacionActualizada) {
                console.log(MaterialFormacionActualizada);
                res.status(200).json(MaterialFormacionActualizada)
            } else {
                res.status(404).json({ error: 'Material de formacion no encotrado' });

            }
        } catch (error) {
            res.status(500).json({ error: 'no se pudo actualizar el Material de formacion', error })
        }
    }
};


export default httpMaterialFormacion;