import Home from "../components/Home.vue";
import login from "../components/login.vue";
import usuario from "../components/usuario.vue";
import rolesusuario from "../components/rolesusuario.vue";
import nivelformacion from "../components/ambienteformacion.vue";
import redesconocimiento from "../components/redesconocimiento.vue";
import centroFormacion from "../components/centroFormacion.vue";
import programas_formacion from "../components/programas_formacion.vue";
import instructores from "../components/instructores.vue";
import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {path:"/" , component:login},
    {path:"/home", component:Home, children:[
       {path:"/redesconocimiento" , component:redesconocimiento},
       {path:"/usuario" , component:usuario},
       {path:"/rolesusuario" , component:rolesusuario},
       {path:"/nivelformacion" , component:nivelformacion},
       {path:"/centroFormacion" , component:centroFormacion},
       {path:"/programas_formacion" , component:programas_formacion},
       {path:"/instructores" , component:instructores},
      ]
    }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
