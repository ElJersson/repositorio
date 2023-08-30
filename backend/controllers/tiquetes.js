import tiquetes from "../modules/tiquetes.js";

const httpTiquetes = {
  // Obtener todos los tiquetes
  getTiquete: async (req, res) => {
    try {
      const tiquetesList = await tiquetes.find();
      res.json({ tiquetes: tiquetesList });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor" });
    }
  },

  // Agregar un nuevo tiquete a la base de datos
  postTiquete: async (req, res) => {
    const { cliente, total_pago, fecha_pago, administrador, bus, numero_asiento } = req.body;
    const nuevoTiquete = new tiquetes({ cliente, total_pago, fecha_pago, administrador, bus, numero_asiento });

    try {
      await nuevoTiquete.save();
      res.json({ tiquete: nuevoTiquete });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor" });
    }
  },

  // Actualizar información de un tiquete existente en la base de datos
  putTiquete: async (req, res) => {
    const { id } = req.params;
    const { monto, metodo_pago, fecha_pago, numero_asiento, estado, usuario, vendedor, bus } = req.body;

    try {
      // Buscar el tiquete por id
      const tiquete = await tiquetes.findById(id);

      if (!tiquete) {
        return res.status(404).json({ error: "Tiquete no encontrado" });
      }

      // Actualizar los campos del tiquete con los valores nuevos
      tiquete.monto = monto;
      tiquete.metodo_pago = metodo_pago;
      tiquete.fecha_pago = fecha_pago;
      tiquete.numero_asiento = numero_asiento;
      tiquete.estado = estado;
      tiquete.usuario = usuario;
      tiquete.vendedor = vendedor;
      tiquete.bus = bus;

      // Guardar los cambios en la base de datos
      await tiquete.save();

      res.json({ tiquete });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor" });
    }
  },

  // Eliminar un tiquete existente de la base de datos
  deleteTiquete: async (req, res) => {
    const { id } = req.params;

    try {
      // Buscar el tiquete por id
      const tiquete = await tiquetes.findById(id);

      if (!tiquete) {
        return res.status(404).json({ error: "Tiquete no encontrado" });
      }

      // Eliminar el tiquete de la base de datos
      await tiquete.remove();

      res.json({ mensaje: "Tiquete eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor" });
    }
  }
};

export default httpTiquetes;