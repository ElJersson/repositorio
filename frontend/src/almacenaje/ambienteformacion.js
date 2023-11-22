import {defineStore} from 'pinia'
import axios from "axios"
import {URL} from "../routes/url.js"

export const useAmbienteFormacionStore =defineStore(
    "ambiFormacion",()=>{
const url=URL
         // lista de ambiente de formación
         const getAmbienteFormacion= async (token) => {
            try {
          // Crea un objeto de cabecera con el token
          let header = {headers:{"x-token":token}}
          // Realiza la solicitud al servidor con el token en las cabeceras
               let res = await axios.get(`${url}/ambienteFormacion`,header);
                console.log(res);
                return res
             } catch (error) {
                console.log(error);
                return error;
             }
            };
      // agregar ambiente de formación
      const addAmbienteFormacion = async (info,documento) => {
        try {
          const formData = new FormData();
          for (const key in info) {
            formData.append(key, info[key]);
          }
          formData.append("documento", documento);
          const datos = await axios.post(`${url}/ambienteFormacion/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return datos;
        } catch (error) {
          throw error;
        }
     };     
      // editar ambiente de formación
      const updateAmbienteFormacion = async (id, info) => {
        try {
          let res = await axios.put(`${url}/ambienteFormacion/AmbienteFormacion/${id}`, info);
          return res;
        } catch (error) {
          console.log(error);
          return error;
        }
      };
         // editar estado ambiente 
         const putAmbienteEstado = async (id, estado) => {
          try {
            let res = await axios.put(`${url}/ambienteFormacion/estado/${id}`, {estado:estado});
            return res;
          } catch (error) {
            console.log(error);
            return error;
          }
        };     
      

      return{
          addAmbienteFormacion,
          updateAmbienteFormacion,
          getAmbienteFormacion,
          putAmbienteEstado
     }
  }
)