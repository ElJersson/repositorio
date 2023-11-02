import NivelFormacion from "../modules/nivelFormacion.js";

const httpNivelFormacion = {
    getNivelDeFormacion: async (req, res) => {
        try {
            const nivelDeFormacion = await NivelFormacion.find();
            res.json({ nivelDeFormacion });
        } catch (error) {
            res.status(500).json({ mensaje: "error al obtener niveles de formación" });
        }
    },

    getNivelFormacionCodigo: async (req, res) => {
        const { codigo } = req.params;
        try {
            const nivelFormacion = await NivelFormacion.findOne({ codigo: codigo });
            if (nivelFormacion) {
                res.json({ nivelFormacion });
            } else {
                res.status(404).json({ mensaje: "no se encontró el nivel de formación con ese código" });
            }
        } catch (error) {
            res.status(500).json({ mensaje: "error al obtener el nivel de formación" });
        }
    },

    postNivelFormacion: async (req, res) => {
        const { codigo, denominacion, estado } = req.body;
        try {
            const nuevoNivelFormacion = await NivelFormacion.create({
                codigo,
                denominacion,
                estado
            });
            res.status(201).json(nuevoNivelFormacion);
        } catch (error) {
            res.status(500).json({ mensaje: "error al crear el nivel de formación" });
        }
    },

    putNivelFormacion: async (req, res) => {
        const { id } = req.params;
        const { codigo, denominacion, estado } = req.body;
        try {
            const nivelFormacionActualizado = await NivelFormacion.findByIdAndUpdate(
                id,
                {
                    codigo,
                    denominacion,
                    estado
                },
                { new: true }
            );
            if (nivelFormacionActualizado) {
                res.json(nivelFormacionActualizado);
            } else {
                res.status(404).json({ mensaje: "nivel de formación no encontrado" });
            }
        } catch (error) {
            res.status(500).json({ mensaje: "error al actualizar el nivel de formación" });
        }
    },

    actualizarestado: async (req, res) => {
        const id = req.params.id;
    console.log(`estado actualizado ${id}`);
        const actualizado = {
            estado: req.body.estado
        };
        try {
            const nivelFormacionActualizado = await NivelFormacion.findByIdAndUpdate(id, actualizado);
            if (nivelFormacionActualizado) {
                res.status(200).json(nivelFormacionActualizado);
            } else {
                res.status(404).json({ mensaje: 'nivel de formación no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ mensaje: 'no se pudo actualizar el estado del nivel de formación' });
        }
    },
};

export default httpNivelFormacion;
