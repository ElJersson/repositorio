import RetroAlimentacionRed from "../modules/retroAlimentacionRed.js"

const httpRetroAlimentacionRed = {
    getRetroAlimentacionRed: async (req, res) => {
        try {
            const retroAlimentacionDeRed = await RetroAlimentacionRed.find();
            res.json({ retroAlimentacionDeRed })
        } catch (error) {
            res.status(500).json({ mensaje: "error al obtener la retro alimentacion de la red" })
        }
    },

    getRetroAlimentacionRedCodigo: async (req, res) => {
        const { codigo } = req.params;
        try {
            const retroAlimentacionRed = await RetroAlimentacionRed.findOne({ codigo: codigo });
            if (retroAlimentacionRed) {
                res.json({ retroAlimentacionRed })
            } else {
                res.status(404).json({ mensaje: "no se encontro la retro alimentacion de red con ese codigo" })
            }
        } catch (error) {
            res.status(500).json({ mensaje: "error al obtener la retro alimentacion de red" })
        }
    },

    postRetroAlimentacionRed: async (req,res) => {
        const {codigo, nombre, estado } = req.body;
        try {
        const nuevoRetroAlimentacionRed = await RetroAlimentacionRed.create({
            codigo,
            nombre,
            estado
        });
        res.status(201).json(nuevoRetroAlimentacionRed)
        } catch (error) {
            res.status(500).json({ mensaje: "error al crear la retro alimentacion de red"})
        }
    },

    putRetroAlimentacionRed: async (req, res) => {
        const { id } = req.params;
        const { codigo, nombre, estado } = req.body;
        try {
            const RetroAlimentacionRedActualizada = await RetroAlimentacionRed.findByIdAndUpdate(
                id,
                {
                    codigo,
                    nombre,
                    estado
                },
                { new: true }
            );
            if (RetroAlimentacionRedActualizada) {
                res.json(RetroAlimentacionRedActualizada)
            } else {
                res.status(404).json({ mensaje: "retro alimentacion de red no encontrada" })
            }
        } catch (error) {
            res.status(500).json({ mensaje: "error al actualizar la retro alimentacion de red" })
        }
    },

    actualizarestado: async (req, res) => {
        const id = req.params.id;
        console.log(`estado actualizado ${id}`);
        const actualizado = {
            estado: req.body.estado
        };
        try {
            const RetroAlimentacionRedActualizada = await RetroAlimentacionRed.findByIdAndUpdate(id, actualizado);
            if (RetroAlimentacionRedActualizada) {
                res.status(200).json(RetroAlimentacionRedActualizada)
            } else {
                res.status(404).json({mensaje: 'retro alimentacion de red no encontrada'})
            }
        } catch (error) {
            res.status(500).json({mensaje: 'no se pudo actualizar el estado de la retro alimentacion de red'})
        }
    },

};

export default httpRetroAlimentacionRed