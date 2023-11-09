import { defineStore } from "pinia";
import axios from "axios";
import {useRouter} from "vue-router"
import { ref } from "vue";

export const useAdministradorStore = defineStore("logi", () => {
  let loading = ref(false)
  let token = ref("");
  let rol = ref("")
  let router = useRouter()

  console.log(token);
  // iniciar sesion con email y contraseña
  const iniciarSesion = async (email, password) => {
    try {
      const response = await axios.post("https://repositorio.onrender.com/usuario/inicio-sesion/",{ email, password });
      token.value = response.data.token;
      rol.value= "Gestor"
      return response;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Error en el inicio de sesión"
      );
    } 
  };
  const logout= ()=>{
    token.value=""
    rol.value=""
    router.push("/")
}

  return {
    iniciarSesion,
    token,
    logout,
    rol
  };
},
{
    persist:true
});
