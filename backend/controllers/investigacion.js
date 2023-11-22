
import Investigacion from "../modules/investigacion.js";

const httpInvestigacion = {
  // Obtener todos los Investigacion
  getInvestigacion: async (req, res) => {
    try {
      const investiga = await Investigacion.find();
      res.json({ investiga })
    } catch (error) {
      res.status(500).json({ mensaje: "error al obtener la investigacion" })
    }
  },

  getInvestigacionCodigo: async (req, res) => {
    const { codigo } = req.params;
    try {
      const investiga = await Investigacion.findOne({ codigo: codigo })
      if (investiga) {
        res.json({ investiga })
      } else {
        res.status(404).json({ mensaje: "no se encontro esa investigacion con ese codigo" })
      }
    } catch (error) {
      res.status(500).json({ mensaje: "error al obtener la investigacion" })
    }
  },

  postInvestigacion: async (req, res) => {
    const { nombre, codigo, descripcion, fecha, documento,  estado } = req.body
    try {
      const nuevaInvestigacion = await Investigacion.create({
        nombre,
        codigo,
        descripcion,
        fecha,
        documento,
        
        estado
      });
      res.status(201).json(nuevaInvestigacion)
    } catch (error) {
      res.status(500).json({ mensaje: "error al crear la investigacion" })
    }
  },

  putInvestigacion: async (req, res) => {
    const { id } = req.params;
    const { nombre, codigo, descripcion, fecha, documento, programaFormacion, estado } = req.body
    try {
      const investigacionActualizada = await Investigacion.findByIdAndUpdate(
        id,
        {
          nombre,
          codigo,
          descripcion,
          fecha,
          documento,
          programaFormacion,
          estado
        },
        { new: true }
      );
      if (investigacionActualizada) {
        res.json(investigacionActualizada);
      } else {
        res.status(404).json({ mensaje: "investigacion no encontrada" })
      }
    } catch (error) {
      res.status(500).json({ mensaje: "error al actualizar la investigacion" })
    }
  },

  actualizarestado: async (req, res) => {
    const id = req.params.id;
    console.log(`estado actualizado ${id}`);
    const actualizado = {
      estado: req.body.estado
    }
    try {
      const investigacionActualizada = await Investigacion.findByIdAndUpdate(id, actualizado)
      if (investigacionActualizada) {
        res.status(200).json(investigacionActualizada)
      } else {
        res.status(404).json({ mensaje: 'investigacion no encontrada' })
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'no se pudo actualizar el estado de la investigacion' })
    }
  },
};

export default httpInvestigacion;