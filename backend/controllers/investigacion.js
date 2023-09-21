import Investigacion from "../modules/investigacion.js";

const httpInvestigacion = {
  // Obtener todos los Investigacion
  getInvestigacion: async (req, res) => {
    try {
      const investigacionList = await Investigacion.find();
      res.json({ Investigacion: investigacionList });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor" });
    }
  },
};

export default httpInvestigacion;