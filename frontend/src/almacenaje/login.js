import {defineStore} from 'pinia'
import axios from "axios"
export const useAdministradorStore =defineStore(
    "logi",()=>{
          
        // lista de administrativos
        const getAdministrador = async () => {
            try {
              let res = await axios.get("http://localhost:4500/administrador");
              console.log(res);
              return res.data.administradores; 
            } catch (error) {
              console.log(error);
              return error;
            }
          };
        
        // iniciar sesion con email y contraseña 

          const iniciarSesion = async (email, password) => {
            try {
              const response = await axios.post("http://localhost:4500/administrador/inicio-sesion", { email, password });
              return response.data; // Puedes ajustar lo que quieres devolver aquí
            } catch (error) {
              throw new Error(error.response?.data?.message || "Error en el inicio de sesión");
            }
          };


        return{
            getAdministrador,
            iniciarSesion
        }
    }
)