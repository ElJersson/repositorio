import {defineStore} from 'pinia'
import axios from "axios"
import { ref } from 'vue';
import {URL} from "../routes/url.js"

export const useUsuarioStore =defineStore(
    "usuario",()=>{
const url=URL
      const getUsuario = async (token) => {
        try {
          // Crea un objeto de cabecera con el token
          let header = {headers:{"x-token":token}}
          // Realiza la solicitud al servidor con el token en las cabeceras
          const res = await axios.get(`${url}/usuario`,header);
          // Retorna los datos de usuarios
          return res
        } catch (error) {
          console.log("hay un error en el get");
          return error;
        }
      };

        // agregar usuario
        // const addUsuario = async(info)=>{
        //     try {
        //         let res = await axios.post(`${url}/usuario/crearUsuario`,info)
        //         return res
        //     } catch (error) {
        //         console.log(error);
        //         return error
        //     }
        // }

        const addUsuario = async (info,curriculum) => {
          try {
            const formData = new FormData();
            for (const key in info) {
              formData.append(key, info[key]);
            }
            formData.append("curriculum", curriculum);
            const datos = await axios.post(`${url}/usuario/crearUsuario`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            return datos;
          } catch (error) {
            throw error;
          }
       };

        // editar usuario
        const updateUsuario = async (id, cc, nombre, apellidos , password , direccion ,email,perfilProfesional,curriculum,rol, telefono) => {
          try {
              const formData = new FormData();
              formData.append("cc", cc);
              formData.append("nombre", nombre);
              formData.append("apellidos", apellidos);
              formData.append("password", password);
              formData.append("direccion", direccion);
              formData.append("email", email);
              formData.append("perfilProfesional", perfilProfesional);
              formData.append("curriculum", curriculum);
              formData.append("rol", rol);
              formData.append("telefono", telefono);
              let res = await axios.put(`${url}/usuario/editUsuario/${id}`, formData, {
                  headers: { "Content-Type": "multipart/form-data", },
              })
              Notify.create({
                  color: "positive",
                  message: "Edicion de usuario exitoso",
                  icon: "check",
                  position: "top",
                  timeout: 3000
              })
              return res
          } catch (error) {
              console.log("hay un error en edirUsers", error);
              Notify.create({
                  color: "negative",
                  message: error.response.data.errors[0].msg,
                  icon: "check",
                  position: "top",
                  timeout: 3000
              })
              return error
          }
      }
        // editar estado usuario 
        const putUsuarioEstado = async (id, estado) => {
          try {
            let res = await axios.put(`${url}/usuario/estado/${id}`, {estado:estado});
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
            const response = await axios.put(`${url}/usuario/subir-curriculum/${id}`, formData);
      
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