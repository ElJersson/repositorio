import DesarolloCurricular from "../modules/desarolloCurricular.js";

const httpDesarolloCurricular = {
  // Obtener todos los tiquetes
  getDesarolloCurricular: async (req, res) => {
    try {
      const desarolloCurricularList = await DesarolloCurricular.find();
      res.json({ DesarolloCurricular: desarolloCurricularList });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor" });
    }
  },
};

export default httpDesarolloCurricular;