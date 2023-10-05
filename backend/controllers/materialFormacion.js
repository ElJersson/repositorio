import MaterialFormacion from "../modules/materialFormacion.js";

const httpMaterialFormacion = {
    //listar los MaterialFormacion 
    getMaterialFormacion: async (req, res) => {
        const materialFormacion = await MaterialFormacion.find()
        res.json({ materialFormacion });
      },
      
   //crear un MaterialFormacion
   postMaterialFormacion: async (req, res) => {
    const { nombre, descripcion, tipo, codigo,documento } = req.body;
    try {
        // Crear un nuevo centro de formación y esperar la promesa
        const nuevoMaterialFormacion = await MaterialFormacion.create({
            nombre,
            descripcion,
            tipo,
            codigo,
            documento
        });

        res.status(201).json(nuevoMaterialFormacion);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear el centro de formación" });
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
    }
};


export default httpMaterialFormacion;