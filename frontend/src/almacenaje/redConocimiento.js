import {defineStore} from 'pinia'
import axios from "axios"
export const useRedConocimientoStore =defineStore(
    "RedConocimiento", () => {

        // listar redes conocimiento
        const getRedConocimiento = async () => {
         try {
            let res = await axios.get("https://repositorio.onrender.com/redConocimiento")
            console.log(res);
            return res.data.redesConocimientos;
         } catch (error) {
            console.log(error);
            return error
         }
        };
        // agregar red de Conocimietno
        const addRedConocimiento = async (info) => {
            try {
                let res = await axios.post("https://repositorio.onrender.com/redConocimiento/", info)
                return res
            } catch (error) {
                console.log(error);
                return error
            }

        };
// editar red de conocimiento
        const updateRedConocimiento = async (id,info) => {
            try {
                let res = await axios.put(`https://repositorio.onrender.com/RedConocimiento/editRedConocimiento/${id}`,info)
                return res
            } catch(error) {
                console.log(error);
                return error
            }
        };
        // editar estado red de conocimiento
        const putRedConocimiento = async (id,estado) => {
            try {
                let res = await axios.put(`https://repositorio.onrender.com/RedConocimiento/estado/${id}`, {estado:estado})
                return res
            } catch (error) {
                console.log(error);
                return error
            }
        };

        return{
            getRedConocimiento,
            addRedConocimiento,
            updateRedConocimiento,
            putRedConocimiento
        }
    }
)  