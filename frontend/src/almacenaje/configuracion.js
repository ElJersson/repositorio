import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";


export const useConfiguracionStore = defineStore("configuracion", () => {
  let cargando=ref(false)

  const agregarConfiguracion = async (info) => {
    try {
      cargando.value=true;
      let datos = await axios.post("http://localhost:4500/configuracion/",info);
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
    const ciudad= await axios.get("http://localhost:4500/configuracion")
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
        let res = await axios.put(`http://localhost:4500/configuracion/${id}`, info);
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