import {defineStore} from 'pinia'
import axios from "axios"
import {URL} from "../routes/url.js"
export const useCiudadStore =defineStore(
    "ciudadess",()=>{
const url=URL
         // lista de ciudades 
         const getCiudad= async () => {
            try {
               let res = await axios.get(`${url}/ciudad`);
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
              let res = await axios.post(`${url}/ciudad/`,info)
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