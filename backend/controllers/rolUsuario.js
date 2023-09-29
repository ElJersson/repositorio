
import RolUsuario from "../modules/rolUsuario.js"

const hhtpRolUsuario = {
//    listar rol del usuario de formación:
    getRolUsuario: async (req, res) => {
        try {
            const rolUsuario = await RolUsuario.find()
            res.json({ rolUsuario });
        } catch (error) {
            res.status(500).json({ mensaje: "error al obtener los ambientes de formacion" })
        }
    },
//    Agregar ambientes de formación:

    postRolUsuario: async (req, res) => {
        const { codigo, denominacion,estado } = req.body;
        try {
            // Crear un nuevo centro de formación y esperar la promesa
            const nuevoRolUsuaio = await RolUsuario.create({
                codigo,
                denominacion,
                estado
            });
    
            res.status(201).json(nuevoRolUsuaio);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al crear el Ambiente de formación" });
        }
    },

    putRolUsuario: async (req, res) => {
        const { id } = req.params;
        const { codigo, denominacion  } = req.body;

        try {
            const rolUsuarioActualizada = await RolUsuario.findByIdAndUpdate(
                id,
                { codigo, denominacion },
                { new: true }
            );
            if (rolUsuarioActualizada) {
                res.json({
                    mensaje: 'registro modificado correctamente',
                    RolUsuario: rolUsuarioActualizada,
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
            const RolUsuarioActualizada = await RolUsuario.findByIdAndUpdate(id, actualizado);

            if (RolUsuarioActualizada) {
                console.log(RolUsuarioActualizada);
                res.status(200).json(RolUsuarioActualizada)
            } else {
                res.status(404).json({ error: 'ambiente de formacion no encotrado' });

            }
        } catch (error) {
            res.status(500).json({ error: 'no se pudo actualizar el ambiente de formacion', error })
        }
    }
}



export default hhtpRolUsuario

