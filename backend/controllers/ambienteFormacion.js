
import AmbienteFormacion from "../modules/ambientesFormacion.js"

const hhtpAmbienteFormacion = {

    getAmbienteFormacion: async (req, res) => {
        try {
            const ambienteFormacion = await AmbienteFormacion.find()
            res.json({ ambienteFormacion });
        } catch (error) {
            res.status(500).json({ mensaje: "error al obtener los ambientes de formacion" })
        }
    },

    getAmbienteFormacionNumAmbiente: async (req, res) => {
        const { numAmbiente } = req.params;
        try {
            const ambienteFormacion = await AmbienteFormacion.findOne({ numAmbiente: numAmbiente });
            if (ambienteFormacion) {
                res.json({ ambienteFormacion });
            } else {
                res.status(404).json({ mensaje: "no se encontro el ambiente con ese numero proporcionado" });

            }
        } catch (error) {
            res.status(500).json({ mensaje: "error al obtener el ambiente de formacion" })
        }
    },

    postAmbienteFormacion: async (req, res) => {
        const { numAmbiente, centroFormacion, ciudad, departamento } = req.body;
        if (!numAmbiente || !centroFormacion || !ciudad || !departamento) {
            return res.status(400).json({ mensaje: "todos los campos son requeridos" })
        }
        try {

            const newAmbienteFormacion = await AmbienteFormacion.create({ numAmbiente, centroFormacion, ciudad, departamento })
            res.status(201).json({
                mensaje: "¡se inserto 1 registro",
                AmbienteFormacion: newAmbienteFormacion
            })
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ mensaje: "error al insertarel ambinete de formacion" })

        }
    },

    putAmbienteFormacion: async (req, res) => {
        const { id } = req.params;
        const { numAmbiente, centroFormacion, ciudad, departamento } = req.body;

        try {
            const AmbienteFormacionActualizada = await AmbienteFormacion.findByIdAndUpdate(
                id,
                { numAmbiente, centroFormacion, ciudad, departamento },
                { new: true }
            );
            if (AmbienteFormacionActualizada) {
                res.json({
                    mensaje: 'registro modificado correctamente',
                    AmbienteFormacion: AmbienteFormacionActualizada,
                });
            } else {
                res.status(404).json({ mensaje: 'no se encontro el ambiente de formacion con el esa ID' })
            }

        } catch (error) {
            console.error('error al actualizar el ambiente de formacion', error);
            res.status.json({ mensaje: 'error al actualizar el ambiente de formacion', error })
        }

    },

    actualizarestado: async (req, res) => {
        const id = req.params.id;
        console.log(`estado actualizado ${id}`);

        const actualizado = {
            estado: req.body.estado,
        };

        try {
            const AmbienteFormacionActualizada = await AmbienteFormacion.findByIdAndUpdate(id, actualizado);

            if (AmbienteFormacionActualizada) {
                console.log(AmbienteFormacionActualizada);
                res.status(200).json(AmbienteFormacionActualizada)
            } else {
                res.status(404).json({ error: 'ambiente de formacion no encotrado' });

            }
        } catch (error) {
            res.status(500).json({ error: 'no se pudo actualizar el ambiente de formacion', error })
        }
    }
}



export default hhtpAmbienteFormacion





