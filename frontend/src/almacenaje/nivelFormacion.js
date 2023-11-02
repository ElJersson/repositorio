import { defineStore } from "pinia";
import axios from "axios";
export const useNivelFormacionStore  = defineStore(
    "nivelFormacion", () => {
        // listar datos
        const getNivelFormacion = async () => {
            try {
                let res = await axios.get("https://repositorio.onrender.com/nivelFormacion/")
                console.log(res);
                return res.data.nivelDeFormacion;
            } catch (error) {
                console.log(error);
                return error
            }
        };
        // agregar nivel de formacion
        const postNivelFormacion= async (info) => {
            try {
                let res = await axios.post("https://repositorio.onrender.com/nivelFormacion/", info)
                return res
            } catch (error) {
                return error
            }
        };
        // editar nivel de formacion
        const putNivelFormacion = async (id, info) => {
            try {
                let res = await axios.put(`https://repositorio.onrender.com/nivelFormacion/administrador/${id}`,info)
                return res;
            } catch (error) {
                console.log(error);
                return error
            }
        }

        const putNivelFormacionEstado = async (id, estado) => {
            try {
                let res = await axios.put(`https://repositorio.onrender.com/nivelFormacion/estado/${id}`, { estado: estado })
                return res;
            } catch (error) {
                console.log(error);
                return error
            }
        }
        return {
            getNivelFormacion,
            postNivelFormacion,
            putNivelFormacion,
            putNivelFormacionEstado
        }

    })