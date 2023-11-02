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



import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {path:"/" , component:login},
    {path:"/home", component:Home, children:[
       {path:"/redesconocimiento" , component:redesconocimiento},
       {path:"/usuario" , component:usuario},
       {path:"/rolUsuario" , component:rolUsuario},
       {path:"/ambienteformacion" , component:ambienteformacion},
       {path:"/centroFormacion" , component:centroFormacion},
       {path:"/programas_formacion" , component:programas_formacion},
       {path:"/instructores" , component:instructores},
       {path:"/materialFormacion" , component:materialFormacion},
       {path:"/configuracion" , component:configuracion},
       {path:"/selectprogramaFormacion" , component:selectprogramaFormacion},
       {path:"/registro_calificado" , component:registro_calificado},
       {path:"/desarrollocurricular" , component:desarrollocurricular},
       {path:"/nivelFormacion" , component:nivelFormacion},

      ]
    }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
