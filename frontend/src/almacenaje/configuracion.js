import { defineStore } from "pinia";
import axios from "axios";
import {URL} from "../routes/url.js"
import { ref } from "vue";


export const useConfiguracionStore = defineStore("configuracion", () => {
  let cargando=ref(false)
  const url=URL
  const agregarConfiguracion = async (info) => {
    try {

      cargando.value=true;
      let datos = await axios.post(`${url}/configuracion/`,info);
      return datos.data;
    } catch (error) {
      cargando.value=true;
      throw error;
    }finally{
      cargando.value=false;
    }
  };

  const  traerConfiguracion = async()=> {
    try {
    cargando.value=true
    const ciudad= await axios.get(`${url}/configuracion`)
    ciudad.data.buscar.reverse()
     return ciudad.data.buscar
    }catch (error) {
      cargando.value=true
      console.log("error");
      return error.response.data
    }finally{
      cargando.value=false
    }
    }

    // editar ambiente de formación
    const editarConfiguracion = async (id, info) => {
      try {
        let res = await axios.put(`${url}/configuracion/${id}`, info);
        return res;
      } catch (error) {
        console.log(error);
        return error;
      }
    };
  


  return {
agregarConfiguracion,
traerConfiguracion,
editarConfiguracion

  };
  
});