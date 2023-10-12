import {defineStore} from 'pinia'
import axios from "axios"
export const useRedConocimientoStore =defineStore(
    "RedConocimiento", () => {

        // listar redes conocimiento
        const getRedConocimiento = async () => {
         try {
            let res = await axios.get("http://localhost:4500/redConocimiento")
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
                let res = await axios.post("http://localhost:4500/redConocimiento/", info)
                return res
            } catch (error) {
                console.log(error);
                return error
            }

        };
// editar red de conocimiento
        const updateRedConocimiento = async (id,info) => {
            try {
                let res = await axios.put(`http://localhost:4500/RedConocimiento/editRedConocimiento/${id}`,info)
                return res
            } catch(error) {
                console.log(error);
                return error
            }
        };
        // editar estado red de conocimiento
        const putRedConocimiento = async (id,estado) => {
            try {
                let res = await axios.put(`http://localhost:4500/RedConocimiento/estado/${id}`, {estado:estado})
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