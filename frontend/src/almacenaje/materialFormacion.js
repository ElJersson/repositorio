import {defineStore} from 'pinia'
import axios from "axios"
export const useMaterialFormacionStore =defineStore(
    "MaterialFormaciones",()=>{

         // lista de material de formación
         const getMaterialFormacion= async () => {
            try {
               let res = await axios.get("http://localhost:4500/materialFormacion");
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
      

      return{
          addMaterialFormacion,
          updateMaterialFormacion,
          getMaterialFormacion
      }
  }
)