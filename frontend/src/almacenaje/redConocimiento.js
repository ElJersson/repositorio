import {defineStore} from 'pinia'
import axios from "axios"
import {URL} from "../routes/url.js"
export const useRedConocimientoStore =defineStore(
    "RedConocimiento", () => {
const url=URL
        // listar redes conocimiento
        const getRedConocimiento = async (token) => {
         try {
          // Crea un objeto de cabecera con el token
          let header = {headers:{"x-token":token}}
          // Realiza la solicitud al servidor con el token en las cabeceras
            let res = await axios.get(`${url}/redConocimiento/`,header)
            console.log(res);
            return res
         } catch (error) {
            console.log(error);
            return error
         }
        };
        // agregar red de Conocimietno
        const addRedConocimiento = async (info) => {
            try {
                let res = await axios.post(`${url}/redConocimiento/`, info)
                return res
            } catch (error) {
                console.log(error);
                return error
            }

        };
// editar red de conocimiento
        const updateRedConocimiento = async (id,info) => {
            try {
                let res = await axios.put(`${url}/RedConocimiento/editRedConocimiento/${id}`,info)
                return res
            } catch(error) {
                console.log(error);
                return error
            }
        };
        // editar estado red de conocimiento
        const putRedConocimiento = async (id,estado) => {
            try {
                let res = await axios.put(`${url}/RedConocimiento/estado/${id}`, {estado:estado})
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