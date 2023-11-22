import Proyecto from "../modules/proyecto.js"

const httpProyecto = {
    getProyecto: async (req, res) => {
        try {
            const Proyec = await Proyecto.find()
            res.json({ Proyec })
        } catch (error) {
            res.status(500).json({ mensaje: "error al obtener los proyectos" })
        }
    },

    getProyectoCodigo: async (req, res) => {
        const { codigo } = req.params;
        try {
            const Proyec = await Proyecto.findOne({ codigo: codigo });
            if (Proyec) {
                res.json({ Proyec });
            } else {
                res.status(404).json({ mensaje: "no se encontro ese proyecto con el codigo proporcionado" })

            }
        } catch (error) {
            res.status(500).json({ mensaje: "error al obtener ese proyecto" })
        }
    },

    postProyecto: async (req, res) => {
        const { codigo, nombre, descripcion, estado } = req.body;
        try {
            const nuevoProyecto = await Proyecto.create({
                codigo, nombre, descripcion, estado
            });
            res.status(201).json(nuevoProyecto);
        } catch (error) {
            res.status(500).json({ mensaje: "error al crear el proyecto" })
        }
    },

    putProyecto: async (req, res) => {
        const { id } = req.params;
        const { codigo, nombre, descripcion, estado } = req.body;
        try {
            const ProyectoActualizado = await Proyecto.findByIdAndUpdate(
                id,
                {
                    codigo, nombre, descripcion, estado
                },
                { new: true }
            );
            if (ProyectoActualizado) {
                res.json(ProyectoActualizado);
            } else {
                res.status(404).json({ mensaje: "proyecto no encontrado" })
            }
        } catch (error) {
            res.status(500).json({ mensaje: "error al actualizar el proyecto" })
        }
    },

    acutalizarestado: async (req, res) => {
        const id = req.params.id;
        console.log(`estado actualizado ${id}`);
        const actualizado = {
            estado: req.body.estado
        }
        try {
            const ProyectoActualizado = await Proyecto.findByIdAndUpdate(id, actualizado);
            if (ProyectoActualizado) {
                res.status(200).json(ProyectoActualizado)
            } else {
                res.status(404).json({ mensaje: 'proyecto no encontrado' })
            }
        } catch (error) {
            res.status(500).json({ mensaje: 'no se pudo actualizar el estado del proyecto' })
        }
    },
}

export default httpProyecto