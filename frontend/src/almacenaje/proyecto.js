import {defineStore} from 'pinia'
import axios from "axios"
import {URL} from "../routes/url.js"

export const useProyectoStore = defineStore(
    "Proyecto",()=> {
        const url=URL
        const getProyecto = async () => {
            try {
                let res = await axios.get(`${url}/proyecto/`);
                console.log(res);
                return res.data.Proyec;
            } catch (error) {
                console.log(error);
                return error
            }
        };

        const addProyecto = async (info) => {
            try {
                let res = await axios.post(`${url}/proyecto/`, info)
                return res
            } catch (error) {
                console.log(error);
                return error
            }
        }

        const updateProyecto = async (id, info) => {
            try {
                let res = await axios.put(`${url}/proyecto/administrador/${id}`,info)
                return res
            } catch (error) {
                console.log(error);
                return error
            }
        };

        const putProyectoEstado = async (id,estado) => {
            try {
                let res = await axios.put(`${url}/proyecto/estado/${id}`, {estado:estado } )
                return res
            } catch (error) {
                console.log(error);
                return error
            }
        };

        return{
            getProyecto,
            addProyecto,
            updateProyecto,
            putProyectoEstado
        }
    }
)