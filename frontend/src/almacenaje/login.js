import {defineStore} from 'pinia'
import axios from "axios"
import { ref } from "vue"

export const useAdministradorStore =defineStore(
    "logi",()=>{
            let token = ref("")
            console.log(token);
        // iniciar sesion con email y contraseña 
          const iniciarSesion = async (email, password) => {
            try {
              const response = await axios.post("https://repositorio.onrender.com/usuario/inicio-sesion/", { email, password });
              token.value=response.data.token
              return response 

            } catch (error) {
              throw new Error(error.response?.data?.message || "Error en el inicio de sesión");
            }
          };

        return{
            iniciarSesion,
            token
    }
   }
)