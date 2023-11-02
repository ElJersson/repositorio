import {defineStore} from 'pinia'
import axios from "axios"
export const useMaterialFormacionStore =defineStore(
    "MaterialFormaciones",()=>{

         // lista de material de formación
         const getMaterialFormacion= async () => {
            try {
               let res = await axios.get("https://repositorio.onrender.com/materialFormacion");
                console.log(res);
                return res.data.materialFormacion; 
             } catch (error) {
                console.log(error);
                return error;
             }
            };
      // agregar material de formación
      const addMaterialFormacion = async(info)=>{
          try {
              let res = await axios.post("https://repositorio.onrender.com/materialFormacion/",info)
              return res
          } catch (error) {
              console.log(error);
              return error
          }
      }
      // editar material de formación
      const updateMaterialFormacion = async (id, info) => {
        try {
          let res = await axios.put(`https://repositorio.onrender.com/materialFormacion/editMaterialFormacion/${id}`, info);
          return res;
        } catch (error) {
          console.log(error);
          return error;
        }
      };
      // editar estado Materia Formacion 
         const putMaterialEstado = async (id, estado) => {
          try {
            let res = await axios.put(`https://repositorio.onrender.com/materialFormacion/estado/${id}`, {estado:estado});
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