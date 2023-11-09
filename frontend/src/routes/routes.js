import Home from "../components/Home.vue";
import login from "../components/login.vue";
import usuario from "../components/usuario.vue";
import ambienteformacion from "../components/ambienteformacion.vue";
import redesconocimiento from "../components/redesconocimiento.vue";
import centroFormacion from "../components/centroFormacion.vue";
import programas_formacion from "../components/programas_formacion.vue";
import instructores from "../components/instructores.vue";
import materialFormacion from "../components/materialFormacion.vue";
import rolUsuario from "../components/rolUsuario.vue";
import configuracion from "../components/configuracion.vue";
import selectprogramaFormacion from "../components/selectprogramaFormacion.vue";
import registro_calificado from "../components/registro_calificado.vue";
import desarrollocurricular from "../components/desarrollocurricular.vue";
import nivelFormacion from "../components/nivelFormacion.vue";
import { useAdministradorStore } from "../almacenaje/login.js";
import { createRouter, createWebHashHistory } from "vue-router";

const checkAuth = ()=>{
  const useLogin = useAdministradorStore()
  const token = useLogin.token
  console.log(token);

  if(!token) return false
  return true
}

const auth = (to, from, next)=>{
  if(checkAuth()){
      const useLogin = useAdministradorStore()
      const role = useLogin.rol

      if (!to.meta.rol.includes(role)){
          useLogin.logout()
          return next({name:"login"})
      }
      next()
  }else{
      next({name:"login"})
  }
}
const routes = [
          { path: "/", component: login, name: "login" },
          { path: "/home", component: Home, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth,  children: [
          { path: "/redesconocimiento", component: redesconocimiento, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth  },
          { path: "/usuario", component: usuario, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth  },
          { path: "/rolUsuario", component: rolUsuario, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth },
          { path: "/ambienteformacion", component: ambienteformacion, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth },
          { path: "/centroFormacion", component: centroFormacion, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth },
          { path: "/programas_formacion", component: programas_formacion, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth },
          { path: "/instructores", component: instructores, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth },
          { path: "/materialFormacion", component: materialFormacion, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth },
          { path: "/configuracion", component: configuracion, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth },
          { path: "/selectprogramaFormacion", component: selectprogramaFormacion, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth },
          { path: "/registro_calificado", component: registro_calificado, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth },
          { path: "/desarrollocurricular", component: desarrollocurricular, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth },
          { path: "/nivelFormacion", component: nivelFormacion, meta: {rol: ["Gestor", "Invitados", "Instructor"] }, beforeEnter: auth },
        ]  },
];


export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
