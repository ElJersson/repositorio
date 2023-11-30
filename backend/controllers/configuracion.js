import configuracion from "../modules/configuracion.js";


   const httpconfiguracion = {
             postConfiguracion : async (req, res) => {
  try {
    const nuevaConfiguracion = new Configuracion(req.body);
    const configuracionCreada = await nuevaConfiguracion.save();
    res.status(201).json(configuracionCreada);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear la config." });
  }
},

 getConfiguracion : async (req, res) => {
  try {
    const buscar = await configuracion.find();
    res.json({ buscar });
  } catch (error) {
    res.status(500).json({ msg: "No se pudo traer la configuracion." });
  }
} ,

 putConfiguracion : async (req, res) => {
 
  const id = req.params.id;



  const actualizado = {
    colorletra: req.body.colorletra,
    colormenu: req.body.colormenu
  }
  try {
    const coloractualizado = await configuracion.findByIdAndUpdate(
      id,
      actualizado
    )
    if (coloractualizado) {
      res.status(200).json(coloractualizado);
    } else {
      res.status(404).json({ error: "Configuracion no encontrada." });
    }
  } catch (error) {
    res.status(500).json({ error: "No se pudo actualizar la configuracion." });
  }
}};

export default httpconfiguracion;