import Ciudad from "../modules/ciudad.js";

const httpCiudad = {
  // Obtener todos las ciudades
  getCiudad: async (req, res) => {
    const ciudades = await Ciudad.find();
    res.json({ ciudades });
  },

     //crear una ciudad
     postCiudad: async (req, res) => {
      const { nombre, codigoDaneCiudad, region,departamento,codigoDaneDepartamento} = req.body;
      try {
          const nuevaCiudad = { nombre, codigoDaneCiudad, region,departamento,codigoDaneDepartamento};
  
          Ciudad.create(nuevaCiudad)
  
          res.status(201).json(nuevaCiudad);
      } catch (error) {
          res.status(500).json({ mensaje: "Error al crear la ciudad" });
      }
  },
};


export default httpCiudad;