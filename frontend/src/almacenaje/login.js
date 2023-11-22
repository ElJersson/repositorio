import { defineStore } from "pinia";
import axios from "axios";
import {useRouter} from "vue-router"
import { ref } from "vue";
import {URL} from "../routes/url.js"

export const useAdministradorStore = defineStore("logi", () => {
  let loading = ref(false)
  const url=URL
  let token = ref("");
  let rolUsuario = ref("")
  let datosUsuario=ref("")
  let router = useRouter()


  console.log(token);
  // iniciar sesion con email y contraseña
  const iniciarSesion = async (email, password) => {
    try {
      const response = await axios.post(`${url}/usuario/inicio-sesion/`,{ email, password });      
      rolUsuario.value = response.data.usuario.rol    
      datosUsuario.value = response.data.usuario     
      token.value = response.data.token;
      return response;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Error en el inicio de sesión"
      );
    } 
  };
  const logout= ()=>{
    token.value=""
    rolUsuario.value=""
    router.push("/")
}

  return {
    datosUsuario,
    iniciarSesion,
    token,
    logout,
    rolUsuario
  };
},
{
    persist:true
});
