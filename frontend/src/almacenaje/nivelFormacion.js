import { defineStore } from "pinia";
import axios from "axios";
export const useNivelFormacionStore  = defineStore(
    "nivelFormacion", () => {
        // listar datos
        const getNivelFormacion = async (token) => {
            try {
          // Crea un objeto de cabecera con el token
          let header = {headers:{"x-token":token}}
          // Realiza la solicitud al servidor con el token en las cabeceras
                let res = await axios.get("https://repositorio.onrender.com/nivelFormacion/",header)
                console.log(res);
                return res
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