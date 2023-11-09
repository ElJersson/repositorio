import {defineStore} from 'pinia'
import axios from "axios"
export const useCentroFormacionStore =defineStore(
    "centroFormaciones",()=>{

         // lista de centro de formación
         const getCentrosFormacion= async (token) => {
            try {
              // Crea un objeto de cabecera con el token
              let header = {headers:{"x-token":token}}
               let res = await axios.get("https://repositorio.onrender.com/centrosFormacion",header);
                console.log(res);
                return res
             } catch (error) {
                console.log(error);
                return error;
             }
            };
      // agregar centro de formación
      const addCentrosFormacion = async(info)=>{
          try {
              let res = await axios.post("https://repositorio.onrender.com/centrosFormacion/",info)
              return res
          } catch (error) {
              console.log(error);
              return error
          }
      }
      // editar centro de formación
      const updateCentrosFormacion = async (id, info) => {
        try {
          let res = await axios.put(`https://repositorio.onrender.com/centrosFormacion/editCentroFormacion/${id}`, info);
          return res;
        } catch (error) {
          console.log(error);
          return error;
        }
      };
      

      return{
          addCentrosFormacion,
          updateCentrosFormacion,
          getCentrosFormacion
       }
   }
)