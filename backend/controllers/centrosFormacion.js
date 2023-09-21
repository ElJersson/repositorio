import CentroFormacion from "../modules/centrosFormacion.js";

const httpCentroFormacion = {
    //listar los CentroFormacion 
    getCentroFormacion: async (req, res) => {
        const centrosFormacion = await CentroFormacion.find()
        .populate("ciudad")
        res.json({ centrosFormacion });
      },
      
   //crear un CentroFormacion
   postCentroFormacion: async (req, res) => {
    const { nombre, codigo, direccion} = req.body;
    try {
        const nuevoCentroFormacion = {nombre, codigo, direccion};

        CentroFormacion.create(nuevoCentroFormacion)

        res.status(201).json(nuevoCentroFormacion);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear el Usuario" });
    }
},
       // editar usuario 
       putCentroFormacion: async (req, res) => {
        const { id } = req.params; // Se obtiene el parámetro 'id' desde la URL
        const {nombre, codigo, direccion } = req.body;
    
        try {
          // Buscar el usuario por id
          const centroFormacion = await CentroFormacion.findById(id);
    
          if (!centroFormacion) {
            return res.status(404).json({ error: "centroFormacion no encontrado" });
          }
    
        // Actualizar los campos del centroFormacion con los valores nuevos
        centroFormacion.codigo = codigo;
        centroFormacion.nombre = nombre;
        centroFormacion.direccion = direccion;

          // Guardar los cambios en la base de datos
          await centroFormacion.save();
    
          res.json({ CentroFormacion });
        } catch (error) {
          res.status(500).json({ error: "Error en el servidor" });
        }
      }
};


export default httpCentroFormacion;