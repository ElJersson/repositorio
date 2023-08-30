import Home from "../components/Home.vue";
import login from "../components/login.vue";
import instructor from "../components/instructor.vue";
import redesconocimiento from "../components/redesconocimiento.vue";
import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {path:"/" , component:login},
    {path:"/home", component:Home, children:[
       {path:"/redesconocimiento" , component:redesconocimiento},
       {path:"/instructor" , component:instructor}
    ]
    }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
