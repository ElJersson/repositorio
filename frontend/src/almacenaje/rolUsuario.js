import {defineStore} from 'pinia'
import axios from "axios"
export const useRolUsuarioStore =defineStore(
    "Rol_Usuario",()=>{

         // lista de centro de formación
         const getRolUsuario= async () => {
            try {
               let res = await axios.get("http://localhost:4500/rolUsuario");
                console.log(res);
                return res.data.rolUsuario; 
             } catch (error) {
                console.log(error);
                return error;
             }
            };
      // agregar centro de formación
      const addRolUsuario = async(info)=>{
          try {
              let res = await axios.post("http://localhost:4500/rolUsuario/",info)
              return res
          } catch (error) {
              console.log(error);
              return error
          }
      }
      // editar centro de formación
      const updateRolUsuario = async (id, info) => {
        try {
          let res = await axios.put(`http://localhost:4500/rolUsuario/editRolUsuario/${id}`, info);
          return res;
        } catch (error) {
          console.log(error);
          return error;
        }
      };
        // editar estado Rol de usuario 
        const putEstadoRolUsuario = async (id, estado) => {
            try {
              let res = await axios.put(`http://localhost:4500/rolUsuario/estado/${id}`, {estado:estado});
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