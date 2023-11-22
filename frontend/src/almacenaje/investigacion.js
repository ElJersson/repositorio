import { defineStore } from "pinia";
import axios from "axios";
import {URL} from "../routes/url.js"

export const useInvestigacionStore = defineStore("investigacion", () => {
  const getInvestigacion = async () => {      
    const url=URL
    try {
      let res = await axios.get(`${url}/investigacion/`);
      console.log(res);
      return res.data.investiga;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const addInvestigacion = async (info) => {
    try {
      let res = await axios.post(`${url}/investigacion/`,info);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const updateInvestigacion = async (id, info) => {
    try {
      let res = await axios.put(`${url}/investigacion/${id}`, info);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  };



  const putInvestigacionEstado = async (id,estado) => {
    try {
        let res = await axios.put(`${url}/investigacion/estado/${id}`, {estado : estado})
        return res
    } catch (error) {
        console.log(error);
        return error
    }
  };

  return {
    getInvestigacion,
    addInvestigacion,
    updateInvestigacion,
    putInvestigacionEstado
  }
});
