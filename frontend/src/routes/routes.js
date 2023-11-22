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
import proyectos from "../components/proyectos.vue";
import investigacion from "../components/investigacion.vue";
import retroAlimentacionRed from "../components/retroAlimentacionRed.vue";

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
      const role = useLogin.rolUsuario
      console.log(role);
      if (!to.meta.rol.includes(role)){
          useLogin.logout()
          return next({name:"login"})
      }
      next()
  }else{
      next({name:"login"})
  }
}

const Administrador ="65441996cbf7c5850ca19c1d"
const Gestor ="651720c5626d21f8942681f6"
const Instructor  ="651f2996b5a857f19437298c"
const Invitados ="651720d2626d21f8942681f8"

const routes = [
          { path: "/", component: login, name: "login" },
          { path: "/home", component: Home, meta: {rol: [`${Administrador}`, `${Instructor}`, `${Invitados}`,`${Gestor}`]}, beforeEnter: auth,  children: [
          { path: "/redesconocimiento", component: redesconocimiento, meta: {rol: [`${Administrador}`]}, beforeEnter: auth  },
          { path: "/usuario", component: usuario, meta: {rol: [`${Administrador}`] }, beforeEnter: auth },
          { path: "/rolUsuario", component: rolUsuario, meta: {rol: [`${Administrador}`] }, beforeEnter: auth },
          { path: "/ambienteformacion", component: ambienteformacion, meta: {rol: [`${Administrador}`, `${Instructor}`, `${Invitados}`,`${Gestor}`]}, beforeEnter: auth },
          { path: "/centroFormacion", component: centroFormacion, meta: {rol: [`${Administrador}`] }, beforeEnter: auth },
          { path: "/programas_formacion", component: programas_formacion, meta: {rol: [`${Instructor}`, `${Invitados}`,`${Gestor}`]}, beforeEnter: auth },
          { path: "/instructores", component: instructores, meta: {rol: [`${Instructor}`, `${Invitados}`,`${Gestor}`]}, beforeEnter: auth },
          { path: "/materialFormacion", component: materialFormacion, meta: {rol: [`${Administrador}`,`${Instructor}`, `${Invitados}`,`${Gestor}`]}, beforeEnter: auth },
          { path: "/configuracion", component: configuracion, meta: {rol: [`${Administrador}`, `${Instructor}`, `${Invitados}`,`${Gestor}`]}, beforeEnter: auth },
          { path: "/selectprogramaFormacion", component: selectprogramaFormacion, meta: {rol: [ `${Gestor}`]}, beforeEnter: auth },
          { path: "/registro_calificado", component: registro_calificado, meta: {rol: [`${Instructor}`, `${Invitados}`,`${Gestor}`]}, beforeEnter: auth },
          { path: "/desarrollocurricular", component: desarrollocurricular, meta: {rol: [`${Instructor}`, `${Invitados}`,`${Gestor}`]}, beforeEnter: auth },
          { path: "/nivelFormacion", component: nivelFormacion, meta: {rol: [`${Administrador}`]}, beforeEnter: auth },
          { path: "/proyectos", component: proyectos, meta: {rol: [`${Administrador}`]}, beforeEnter: auth },
          { path: "/investigacion", component: investigacion, meta: {rol: [`${Administrador}`]}, beforeEnter: auth },
          { path: "/retroAlimentacionRed", component: retroAlimentacionRed, meta: {rol: [`${Administrador}`]}, beforeEnter: auth },

        ]  },
];


export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
