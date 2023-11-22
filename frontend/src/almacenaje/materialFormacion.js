import {defineStore} from 'pinia'
import axios from "axios"
import {URL} from "../routes/url.js"
export const useMaterialFormacionStore =defineStore(
    "MaterialFormaciones",()=>{
const url=URL
         // lista de material de formación
         const getMaterialFormacion= async (token) => {
            try {
          let header = {headers:{"x-token":token}}
               let res = await axios.get(`${url}/materialFormacion/`,header);
                console.log(res);
                return res
             } catch (error) {
                console.log(error);
                return error;
             }
            };
      // agregar material de formación
      const addMaterialFormacion = async (info,documento) => {
        try {
          const formData = new FormData();
          for (const key in info) {
            formData.append(key, info[key]);
          }
          formData.append("documento", documento);
          const datos = await axios.post(`${url}/materialFormacion/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return datos;
        } catch (error) {
          throw error;
        }
     };

      // editar material de formación
      const updateMaterialFormacion = async (id, info) => {
        try {
          let res = await axios.put(`${url}/materialFormacion/editMaterialFormacion/${id}`, info);
          return res;
        } catch (error) {
          console.log(error);
          return error;
        }
      };
      // editar estado Materia Formacion 
         const putMaterialEstado = async (id, estado) => {
          try {
            let res = await axios.put(`${url}/materialFormacion/estado/${id}`, {estado:estado});
            return res;
          } catch (error) {
            console.log(error);
            return error;
          }
        };
      return{
          addMaterialFormacion,
          updateMaterialFormacion,
          getMaterialFormacion,
          putMaterialEstado
      }
  }
)