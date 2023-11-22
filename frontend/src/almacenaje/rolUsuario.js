import {defineStore} from 'pinia'
import axios from "axios"
import {URL} from "../routes/url.js"
export const useRolUsuarioStore =defineStore(
    "Rol_Usuario",()=>{
const url=URL
         // lista de centro de formación
         const getRolUsuario= async (token) => {
            try {
               // Crea un objeto de cabecera con el token
              let header = {headers:{"x-token":token}}
               let res = await axios.get(`${url}/rolUsuario`,header);
                console.log(res);
                return res; 
             } catch (error) {
                console.log(error);
                return error;
             }
            };
      // agregar centro de formación
      const addRolUsuario = async(info)=>{
          try {
              let res = await axios.post(`${url}/rolUsuario/`,info)
              return res
          } catch (error) {
              console.log(error);
              return error
          }
      }
      // editar centro de formación
      const updateRolUsuario = async (id, info) => {
        try {
          let res = await axios.put(`${url}/rolUsuario/editRolUsuario/${id}`, info);
          return res;
        } catch (error) {
          console.log(error);
          return error;
        }
      };
        // editar estado Rol de usuario 
        const putEstadoRolUsuario = async (id, estado) => {
            try {
              let res = await axios.put(`${url}/rolUsuario/estado/${id}`, {estado:estado});
              return res;
            } catch (error) {
              console.log(error);
              return error;
            }
          }; 
      

      return{
          addRolUsuario,
          updateRolUsuario,
          getRolUsuario,
          putEstadoRolUsuario
       }
    }
)