import {defineStore} from 'pinia'
import axios from "axios"
export const useAmbienteFormacionStore =defineStore(
    "ambiFormacion",()=>{

         // lista de ambiente de formación
         const getAmbienteFormacion= async () => {
            try {
               let res = await axios.get("http://localhost:4500/ambienteFormacion");
                console.log(res);
                return res.data.ambienteFormacion; 
             } catch (error) {
                console.log(error);
                return error;
             }
            };
      // agregar ambiente de formación
      const addAmbienteFormacion = async(info)=>{
          try {
              let res = await axios.post("http://localhost:4500/ambienteFormacion/",info)
              return res
          } catch (error) {
              console.log(error);
              return error
          }
      }
      // editar ambiente de formación
      const updateAmbienteFormacion = async (id, info) => {
        try {
          let res = await axios.put(`http://localhost:4500/ambienteFormacion/AmbienteFormacion/${id}`, info);
          return res;
        } catch (error) {
          console.log(error);
          return error;
        }
      };
      

      return{
          addAmbienteFormacion,
          updateAmbienteFormacion,
          getAmbienteFormacion
        }
    }
)