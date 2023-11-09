import {defineStore} from 'pinia'
import axios from "axios"
import { ref } from 'vue';

export const useUsuarioStore =defineStore(
    "usuario",()=>{

      const getUsuario = async (token) => {
        try {
          // Crea un objeto de cabecera con el token
          let header = {headers:{"x-token":token}}
          // Realiza la solicitud al servidor con el token en las cabeceras
          const res = await axios.get('https://repositorio.onrender.com/usuario',header);
          // Retorna los datos de usuarios
          return res
        } catch (error) {
          console.log("hay un error en el get");
          return error;
        }
      };

        // agregar usuario
        const addUsuario = async(info)=>{
            try {
                let res = await axios.post("https://repositorio.onrender.com/usuario/crearUsuario",info)
                return res
            } catch (error) {
                console.log(error);
                return error
            }
        }
        // editar usuario
        const updateUsuario = async (id, info) => {
          try {
            let res = await axios.put(`https://repositorio.onrender.com/usuario/editUsuario/${id}`, info);
            return res;
          } catch (error) {
            console.log(error);
            return error;
          }
        };
        // editar estado usuario 
        const putUsuarioEstado = async (id, estado) => {
          try {
            let res = await axios.put(`https://repositorio.onrender.com/usuario/estado/${id}`, {estado:estado});
            return res;
          } catch (error) {
            console.log(error);
            return error;
          }
        }; 
        const subirCurriculum = async (id, archivo) => {
          try {
            const formData = new FormData();
            formData.append('archivo', archivo);
      
            // Hacer la solicitud al backend para subir el archivo a Cloudinary
            const response = await axios.put(`https://repositorio.onrender.com/usuario/subir-curriculum/${id}`, formData);
      
            return response.data;
          } catch (error) {
            console.error(error);
            return error;
          }
        };

        
        return{
            addUsuario,
            updateUsuario,
            getUsuario,
            putUsuarioEstado,
            subirCurriculum
          }
        }
)