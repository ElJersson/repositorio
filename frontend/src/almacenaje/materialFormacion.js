import {defineStore} from 'pinia'
import axios from "axios"
export const useMaterialFormacionStore =defineStore(
    "MaterialFormaciones",()=>{

         // lista de material de formación
         const getMaterialFormacion= async (token) => {
            try {
          // Crea un objeto de cabecera con el token
          let header = {headers:{"x-token":token}}
          // Realiza la solicitud al servidor con el token en las cabeceras
               let res = await axios.get("http://localhost:4500/materialFormacion",header);
                console.log(res);
                return res
             } catch (error) {
                console.log(error);
                return error;
             }
            };
      // agregar material de formación
      const addMaterialFormacion = async(info)=>{
          try {
              let res = await axios.post("http://localhost:4500/materialFormacion/",info)
              return res
          } catch (error) {
              console.log(error);
              return error
          }
      }
      // editar material de formación
      const updateMaterialFormacion = async (id, info) => {
        try {
          let res = await axios.put(`http://localhost:4500/materialFormacion/editMaterialFormacion/${id}`, info);
          return res;
        } catch (error) {
          console.log(error);
          return error;
        }
      };
      // editar estado Materia Formacion 
         const putMaterialEstado = async (id, estado) => {
          try {
            let res = await axios.put(`http://localhost:4500/materialFormacion/estado/${id}`, {estado:estado});
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