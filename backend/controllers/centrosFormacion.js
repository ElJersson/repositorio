import CentroFormacion from "../modules/centrosFormacion.js";

const httpCentroFormacion = {
    //listar los CentroFormacion 
    getCentroFormacion: async (req, res) => {
        const centrosFormacion = await CentroFormacion.find()
        .populate("idCiudad")
        res.json({ centrosFormacion });
      },
      
   //crear un CentroFormacion
   postCentroFormacion: async (req, res) => {
    const { nombre, codigo, direccion, idCiudad } = req.body;
    try {
        // Crear un nuevo centro de formación y esperar la promesa
        const nuevoCentroFormacion = await CentroFormacion.create({
            nombre,
            codigo,
            direccion,
            idCiudad,
        });

        res.status(201).json(nuevoCentroFormacion);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear el centro de formación" });
    }
},
       // editar usuario 
       putCentroFormacion: async (req, res) => {
        const { id } = req.params;
        const { nombre, codigo, direccion, idCiudad } = req.body;
    
        try {
            // Buscar el centro de formación por id
            const centroFormacion = await CentroFormacion.findById(id);
    
            if (!centroFormacion) {
                return res.status(404).json({ error: "Centro de formación no encontrado" });
            }
    
            // Actualizar los campos del centro de formación con los valores nuevos
            centroFormacion.codigo = codigo;
            centroFormacion.nombre = nombre;
            centroFormacion.direccion = direccion;
            centroFormacion.idCiudad = idCiudad;
    
            // Guardar los cambios en la base de datos y esperar la promesa
            const centroFormacionActualizado = await centroFormacion.save();
    
            // Responder con el centro de formación actualizado
            res.json({ centroFormacion: centroFormacionActualizado });
        } catch (error) {
            // Manejar errores de validación y otros errores
            res.status(500).json({ error: "Error en el servidor a la hora de editar el centro de fromación" });
        }
    }
};


export default httpCentroFormacion;