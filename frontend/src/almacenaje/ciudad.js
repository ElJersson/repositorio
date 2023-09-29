import {defineStore} from 'pinia'
import axios from "axios"
export const useCiudadStore =defineStore(
    "ciudadess",()=>{

         // lista de ciudades 
         const getCiudad= async () => {
            try {
               let res = await axios.get("http://localhost:4500/ciudad");
                console.log(res);
                return res.data.ciudades; 
             } catch (error) {
                console.log(error);
                return error;
             }
            };
      // agregar ciudades 
      const addCiudad = async(info)=>{
          try {
              let res = await axios.post("http://localhost:4500/ciudad/",info)
              return res
          } catch (error) {
              console.log(error);
              return error
          }
      }

      

      return{
          addCiudad,
          getCiudad
        }
    }
)