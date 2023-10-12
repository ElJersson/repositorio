const holdersHttp = {
    cargarArchivo: async (req, res) => {
        const { id } = req.params;
        try {
            let nombre
            await subirArchivo(req.files, undefined)
                .then(value => nombre = value)
                .catch((err) => console.log(err));

            //persona a la cual pertenece la foto
            let holder = await Holder.findById(id);
            //si el Holder ya tiene foto la borramos
            if (holder.photo) {
                const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
                const pathImage = path.join(__dirname, '../uploads/', holder.photo);

                if (fs.existsSync(pathImage)) {
                    fs.unlinkSync(pathImage)
                }

            }

            holder = await Holder.findByIdAndUpdate(id, { photo: nombre })
            //responder
            res.json({ nombre });
        } catch (error) {
            res.status(400).json({ error, 'general': 'Controlador' })
        }

    },
    mostrarImagen: async (req, res) => {
        const { id } = req.params

        try {
            let holder = await Holder.findById(id)
            if (holder.photo) {
                const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
                const pathImage = path.join(__dirname, '../uploads/', holder.photo);
                if (fs.existsSync(pathImage)) {
                    return res.sendFile(pathImage)
                }
            }
            res.status(400).json({ msg: 'Falta Imagen' })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    cargarArchivoCloud: async (req, res) => {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_KEY,
            api_secret: process.env.CLOUDINARY_SECRET,
            secure: true
        });

        const { id } = req.params;
        try {
            //subir archivo
            const { tempFilePath } = req.files.archivo
            cloudinary.uploader.upload(tempFilePath,
                { width: 250, crop: "limit" },
                async function (error, result) {
                    if (result) {
                        let holder = await Holder.findById(id);
                        if (holder.photo) {
                            const nombreTemp = holder.photo.split('/')
                            const nombreArchivo = nombreTemp[nombreTemp.length - 1] // hgbkoyinhx9ahaqmpcwl jpg
                            const [public_id] = nombreArchivo.split('.')
                            cloudinary.uploader.destroy(public_id)
                        }
                        holder = await Holder.findByIdAndUpdate(id, { photo: result.url })
                        //responder
                        res.json({ url: result.url });
                    } else {
                        res.json(error)
                    }

                })
        } catch (error) {
            res.status(400).json({ error, 'general': 'Controlador' })
        }
    },
    mostrarImagenCloud: async (req, res) => {
        const { id } = req.params

        try {
            let holder = await Holder.findById(id)
            if (holder.photo) {
                return res.json({ url: holder.photo })
            }
            res.status(400).json({ msg: 'Falta Imagen' })
        } catch (error) {
            res.status(400).json({ error })
     }
},


}

export default holdersHttp
