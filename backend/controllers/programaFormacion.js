import ProgramaFormacion from "../modules/programaFormacion.js";

const httpProgramaFormacion = {
    getProgramaFormacion: async (req, res) => {
        try {
            const programasFormacion = await ProgramaFormacion.find();
            res.json(programasFormacion);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener los programas de formación" });
        }
    },

    getProgramaFormacionCodigo: async (req, res) => {

        const { codigo } = req.params;
        try {
            const programaFormacion = await programaFormacion.findOne({ codigo: codigo })
            if (programaFormacion) {
                res.json({ programaFormacion })
            } else {
                res.status(404).json({ mensaje: " no se encontro el programa de formacion con ese codigo" })
            }


        } catch (error) {
            res.status(500).json({ mensaje: "error al obtener el programa de formacion" })
        }

    },

    postProgramaFormacion: async (req, res) => {
        const { codigo, nombre, redConocimiento, nivelFormacion, estado } = req.body;

        try {
            const nuevoProgramaFormacion = await ProgramaFormacion.create({
                codigo,
                nombre,
                redConocimiento,
                nivelFormacion,
                estado
            });

            res.status(201).json(nuevoProgramaFormacion);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al crear el programa de formación" });
        }
    },

    putProgramaFormacion: async (req, res) => {
        const { id } = req.params;
        const { codigo, nombre, redConocimiento, nivelFormacion, estado } = req.body;

        try {
            const programaFormacionActualizado = await ProgramaFormacion.findByIdAndUpdate(
                id,
                {
                    codigo,
                    nombre,
                    redConocimiento,
                    nivelFormacion,
                    estado
                },
                { new: true }
            );

            if (programaFormacionActualizado) {
                res.json(programaFormacionActualizado);
            } else {
                res.status(404).json({ mensaje: "Programa de formación no encontrado" });
            }
        } catch (error) {
            res.status(500).json({ mensaje: "Error al actualizar el programa de formación" });
        }
    },

    actualizarestado: async (req, res) => {
        const id = req.params.id;
        console.log(`estado actualizado ${id}`);

        const actualizado = {
            estado: req.body.estado
        }
        try {
            const programaFormacionActualizado = await programaFormacionActualizado.findByIdAndUpdate(id, actualizado)

            if (programaFormacionActualizado) {
                console.log(programaFormacionActualizado);
                res.status(200).json(programaFormacionActualizado)
            } else {
                res.status(404).json({ error: 'programa de formacion no encontrado' })
            }


        } catch (error) {
            res.status(500).json({ error: 'no se pudo acutalizar el programa de formacion' })
        }

    },

    actualizarestado: async (req, res) => {
        const id = req.params;
        console.log(`estado actualizado ${id}`);


        const actualizado = {
            estado: req.body.estado,
        }
        try {
            const programaFormacionActualizado = await programaFormacionActualizado.findByIdAndUpdate(id, actualizado)

            if (programaFormacionActualizado) {
                console.log(programaFormacionActualizado);
                res.status(200).json(programaFormacionActualizado)
            } else {
                res.status(404).json({ error: 'programa de formacion no encontrado' })
            }


        } catch (error) {
            res.status(500).json({error: 'no se pudo actualizar el programa de formacion '})
        }
},

};



export default httpProgramaFormacion;
