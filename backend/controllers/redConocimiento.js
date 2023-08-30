import RedConocimiento from "../modules/redConocimiento.js";

const hhtpRedConocimiento = {
    getRedesConocimiento: async (req, res) => {
        try {
            const redesConocimiento = await RedConocimiento.find();
            res.json(redesConocimiento);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener las redes de conocimiento" });
        }
    },


    getRedesConocimientoNombre: async (req, res) => {

        const { nombre } = req.params;
        try {

            const redesConocimiento = await redesConocimiento.findOne({ nombre: nombre })
            if (redesConocimiento) {
                res.json({ redesConocimiento })
            } else {
                res.status(404).json({ mensaje: "no se encontro a una red de conomiciento con ese nombre" })

            }
        } catch (error) {
            res.status(500).json({ mensaje: "error al obtener la red de conocimiento " })
        }


    },


    postRedesConocimiento: async (req, res) => {
        const { nombre, codigo, estado } = req.body;

        try {
            const nuevaRedConocimiento = await RedConocimiento.create({
                nombre,
                codigo,
                estado
            });

            res.status(201).json(nuevaRedConocimiento);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al crear la red de conocimiento" });
        }
    },

    putRedConocimiento: async (req, res) => {
        const { id } = req.params;
        const { nombre, codigo, estado } = req.body;

        try {
            const redConocimientoActualizada = await RedConocimiento.findByIdAndUpdate(
                id,
                {
                    nombre,
                    codigo,
                    estado
                },
                { new: true }
            );

            if (redConocimientoActualizada) {
                res.json(redConocimientoActualizada);
            } else {
                res.status(404).json({ mensaje: "Red de conocimiento no encontrada" });
            }
        } catch (error) {
            res.status(500).json({ mensaje: "Error al actualizar la red de conocimiento" });
        }
    },

    actualizarestado: async (req, res) => {
        const id = req.params;
        console.log(`estado actualizado ${id}`);

        const actualizado = {
            estado : req.body.estado,
        
        }
        try {
           
            const redConocimientoActualizada = await redConocimientoActualizada.findByIdAndUpdate(id, actualizado)
        
            if(redConocimientoActualizada) {
                console.log(redConocimientoActualizada);
                res.status(200).json(redConocimientoActualizada)
            } else {
                res.status(404).json({error: 'red de conomiento no encontrada'})
            }
        } catch (error) {
            res.status(500).json({error: 'no se pudo actualizar la red de conocimiento'})
        }
    }


};

export default hhtpRedConocimiento;
