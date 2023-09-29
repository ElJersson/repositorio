import {defineStore} from 'pinia'
import axios from "axios"
export const useUsuarioStore =defineStore(
    "usuario",()=>{

         // lista de usuario
        const getUsuario= async () => {
              try {
                 let res = await axios.get("https://repositorio.onrender.com/usuario");
                  console.log(res);
                  return res.data.usuarios; 
               } catch (error) {
                  console.log(error);
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
        // eliminart usuario 
        const deleteUsuario= async (id, info) => {
          try {
            let res = await axios.delete(`https://repositorio.onrender.com/usuario/${id}`, info);
            return res;
          } catch (error) {
            console.log(error);
            return error;
          }
        };
        return{
            addUsuario,
            updateUsuario,
            getUsuario,
            putUsuarioEstado,
            deleteUsuario
          }
        }
)