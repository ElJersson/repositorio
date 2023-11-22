import {defineStore} from 'pinia'
import axios from "axios"
import {URL} from "../routes/url.js"

export const useRetroAlimentacionRedStore = defineStore(
    "retroAlimentacionRed",()=> {
        const url=URL
        const getRetroAlimentacionRed = async () => {
            try {
                let res = await axios.get(`${url}/retroAlimentacionRed/`)
                console.log(res);
                return res.data.retroAlimentacionDeRed;
            } catch (error) {
                console.log(error);
                return error
            }
        };

        const addRetroAlimentacionRed = async (info) => {
            try {
                let res = await axios.post(`${url}/retroAlimentacionRed/`, info)
                return res
            } catch (error) {
                console.log(error);
                return error
            }
        };

        const updateRetroAlimentacionRed = async (id, info) => {
            try {
                let res = await axios.put(`${url}/retroAlimentacionRed/administrador/${id}`, info)
                return res;
            } catch (error) {
                console.log(error);
                return error
            }
        };

        const putRetroAlimentacionRedEstado = async (id, estado) => {
            try {
                let res = await axios.put(`${url}/retroAlimentacionRed/estado/${id}`, {estado : estado})
                return res
            } catch (error) {
                console.log(error);
                return error
            }
        };

        return {
            getRetroAlimentacionRed,
            addRetroAlimentacionRed,
            updateRetroAlimentacionRed,
          
            putRetroAlimentacionRedEstado
        }
    }
)