 import Instructor from "../modules/Instructor.js"; 
// Asegúrate de importar el modelo correcto

const httpInstructor = {
  getInstructor: async (req, res) => {
    try {
      const instructores = await Instructor.find();
      res.json(instructores);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al obtener los instructores" });
    }
  },

  getInstructorIdentificacion: async (req, res) => {
    const { identificacion } = req.params;
    try {
      const instructor = await instructor.findOne({ identificacion: identificacion })
      if (instructor) {
        res.json({ instructor })
      } else {
        res.status(404).json({ mensaje: "no se encontro a un instructor con esa identificacion" })
      }
    } catch (error) {
      res.status(500).json({ mensaje: "error al obtener el instructor" })
    }

  },

  postInstructor: async (req, res) => {
    const { identificacion, nombreApellidos, programaFormacion, email, estado } = req.body;

    try {
      const nuevoInstructor = await Instructor.create({
        identificacion,
        nombreApellidos,
        programaFormacion,
        email,
        estado
      });

      res.status(201).json(nuevoInstructor);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al crear el instructor" });
    }
  },

  putInstructor: async (req, res) => {
    const { id } = req.params;
    const { identificacion, nombreApellidos, programaFormacion, email, estado } = req.body;

    try {
      const instructorActualizado = await Instructor.findByIdAndUpdate(
        id,
        {
          identificacion,
          nombreApellidos,
          programaFormacion,
          email,
          estado
        },
        { new: true }
      );

      if (instructorActualizado) {
        res.json(instructorActualizado);
      } else {
        res.status(404).json({ mensaje: "Instructor no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ mensaje: "Error al actualizar el instructor" });
    }
  },

  actualizarestado: async (req, res) => {
    const id = req.params.id;
    console.log(`estado actualizado ${id}`);

    const actualizado = {
      estado: req.body.estado,
    }
    try {
      const instructorActualizado = await instructorActualizado.findByIdAndUpdate(id, actualizado)

      if (instructorActualizado) {
        console.log((instructorActualizado));
        res.status(200).json(instructorActualizado)
      } else {
        res.status(404).json({ error: 'instructor no encontrado' })
      }


    } catch (error) {
      res.status(500).json({ error: 'no se pudo actualizar el instructor' })
    }

  },

};

export default httpInstructor;
