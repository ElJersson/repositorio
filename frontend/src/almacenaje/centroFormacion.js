import {defineStore} from 'pinia'
import axios from "axios"
export const useCentroFormacionStore =defineStore(
    "centroFormaciones",()=>{

         // lista de centro de formación
         const getCentrosFormacion= async () => {
            try {
               let res = await axios.get("http://localhost:4500/centrosFormacion");
                console.log(res);
                return res.data.centrosFormacion; 
             } catch (error) {
                console.log(error);
                return error;
             }
            };
      // agregar centro de formación
      const addCentrosFormacion = async(info)=>{
          try {
              let res = await axios.post("http://localhost:4500/centrosFormacion/",info)
              return res
          } catch (error) {
              console.log(error);
              return error
          }
      }
      // editar centro de formación
      const updateCentrosFormacion = async (id, info) => {
        try {
          let res = await axios.put(`http://localhost:4500/centrosFormacion/editCentroFormacion/${id}`, info);
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