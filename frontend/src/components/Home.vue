<template>
  <div>
    <header class="header" >
		<div class="container" >
		<div class="btn-menu">
			<label for="btn-menu" >
        <i class="fa-solid fa-bars fa-xl" style="color: #ffffff;"></i></label>
		</div>
			<div class="logo">
			</div>
			<nav class="menu">
        			<router-link  to="/home" @click="handleRouterLinkClick('/home')" ><a  style="color: #ffffff;">Inicio</a>
</router-link>

		
       <i data-bs-toggle="modal" data-bs-target="#exampleModal"  class="fa-solid fa-right-from-bracket fa-lg fixed-icon" style="color: rgb(255, 255, 255);"  ></i>

			</nav>
		</div>



	</header>
	<div class="container-main"  @click="closeMenuOnClickOutside">
   <img style=" margin-top: 200px;width: 300px; height: 300px; /* Ajusta el valor según tus necesidades */" src="./logosena.png" alt="">
      <div v-if="isLoading" class="loading-indicator">
      <i class="fa-solid fa-spinner fa-spin fa-3x" style="color: #000;"></i>
      <p>Cargando...</p>
    </div>

    <h1 v-if="showWelcomeMessage">¡BIENVENIDO!</h1>

   <router-view></router-view>
  </div>
<!--	--------------->
<input type="checkbox" id="btn-menu">
<div class="container-menu" id="menu">
	<div class="cont-menu">
		<nav>
			<div class="image-preview">
                    <img src="./logosena.png"  class="preview-image" style="background-color: #ffffff; width: 70px; height: 70px;">
        </div>
			<router-link v-if="showLink('redesconocimiento')" to="/redesconocimiento" @click="handleRouterLinkClick('/redesconocimiento')" ><i class="fa-brands fa-connectdevelop" style="color: #ffffff;"></i> Redes de conocimiento</router-link>
			<router-link v-if="showLink('usuario')" to="/usuario" @click="handleRouterLinkClick('/usuario')"><i class="fa-solid fa-user" style="color: #ffffff;"></i> usuarios</router-link>
			<router-link v-if="showLink('rolUsuario')" to="/rolUsuario" @click="closeMenu"><i class="fa-solid fa-user-gear" style="color: #ffffff;"></i> Roles de usuario</router-link>
			<router-link v-if="showLink('ambienteformacion')" to="/ambienteformacion" @click="handleRouterLinkClick('/ambienteformacion')" ><i class="fa-solid fa-hand-holding-heart" style="color: #ffffff;"></i> Ambientes de formacion</router-link>
			<router-link v-if="showLink('centroFormacion')" to="/centroFormacion" @click="closeMenu"><i class="fa-solid fa-arrows-to-eye" style="color: #ffffff;"></i> Centros de formacion</router-link>			
			<router-link v-if="showLink('programas_formacion')" to="/programas_formacion" @click="closeMenu"><i class="fa-solid fa-list-check" style="color: #ffffff;"></i> Programas de formacion</router-link>
			<router-link v-if="showLink('instructores')" to="/instructores" @click="handleRouterLinkClick('/instructores')"><i class="fa-solid fa-user-tie" style="color: #fafcff;"></i> Instructores</router-link>
      <router-link v-if="showLink('materialFormacion')" to="/materialFormacion" @click="handleRouterLinkClick('/materialFormacion')"><i class="fa-solid fa-book" style="color: #ffffff;"></i> Materiales de formación</router-link>
      <router-link v-if="showLink('desarrollocurricular')" to="/desarrollocurricular" @click="handleRouterLinkClick('/desarrollocurricular')"><i class="fa-solid fa-window-restore" style="color: #ffffff;"></i> Desarrollo Curricular</router-link>
      <router-link v-if="showLink('nivelFormacion')" to="/nivelFormacion" @click="handleRouterLinkClick('/nivelFormacion')"><i class="fa-solid fa-turn-up" style="color: #ffffff;"></i> Nivel De Formación</router-link>
      <router-link v-if="showLink('registro_calificado')" to="/registro_calificado" @click="closeMenu"><i class="fa-regular fa-registered" style="color: #ffffff;"></i> Registro Calificado</router-link>			
      <router-link v-if="showLink('selectprogramaFormacion')" to="/selectprogramaFormacion" @click="closeMenu"><i class="fa-regular fa-object-group" style="color: #ffffff;"></i> Seleccionar Programa Formación</router-link>			
      <router-link v-if="showLink('proyectos')" to="/proyectos" @click="closeMenu"><i class="fa-regular fa-object-group" style="color: #ffffff;"></i> Proyectos</router-link>			
      <router-link v-if="showLink('retroAlimentacionRed')" to="/retroAlimentacionRed" @click="closeMenu"><i class="fa-regular fa-object-group" style="color: #ffffff;"></i> Retro alimentación De Red</router-link>			
      <router-link v-if="showLink('investigacion')" to="/investigacion" @click="closeMenu"><i class="fa-regular fa-object-group" style="color: #ffffff;"></i> Investigación</router-link>			
      <router-link v-if="showLink('configuracion')" to="/configuracion" @click="handleRouterLinkClick('/configuracion')"><i class="fa-solid fa-gears" style="color: #ffffff;"></i> Configuracion</router-link>
		</nav>
		<label  style="position: fixed;" for="btn-menu"><i class="fa-solid fa-xmark fa-xl" style="color: #f6f9fd;"></i></label>
	</div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Seguro quieres salir </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button data-bs-dismiss="modal" type="button" class="btn btn-primary" @click="useAdministrador.logout" >Aceptar</button>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script setup>
import { onBeforeRouteUpdate } from 'vue-router';
import { ref, onMounted } from 'vue'; 
import { useAdministradorStore } from "../almacenaje/login.js";

const useAdministrador = useAdministradorStore();



const showLink = (routeName) => {
  const role = useAdministrador.rolUsuario;

const Administrador ="65441996cbf7c5850ca19c1d"
const Gestor ="651720c5626d21f8942681f6"
const Instructor  ="651f2996b5a857f19437298c"
const Invitados ="651720d2626d21f8942681f8"

  switch (routeName) {
    case 'home':
      return true; // Mostrar siempre el enlace a "home"

  case 'redesconocimiento':
      return role === `${Administrador}`; // Mostrar solo si el rol es "Administrador"
  case 'usuario':
      return role === `${Administrador}`; // Mostrar solo si el rol es "Administrador"
  case 'rolUsuario':
      return role === `${Administrador}`; // Mostrar solo si el rol es "Administrador"
  case 'ambienteformacion':
      return role === `${Administrador}`; // Mostrar solo si el rol es "Administrador"
  case 'centroFormacion':
      return role === `${Administrador}`; // Mostrar solo si el rol es "Administrador"
  case 'programas_formacion':
      return role === `${Administrador}`|| role === `${Gestor}`|| role === `${Invitados}`|| role === `${Instructor}`; // Mostrar solo si el rol es "Administrador"
  case 'instructores':
      return ; // Mostrar solo si el rol es "Administrador"
  case 'materialFormacion':
      return role === `${Administrador}`; // Mostrar solo si el rol es "Administrador"
  case 'configuracion':
      return role === `${Administrador}`|| role === `${Gestor}`|| role === `${Invitados}`|| role === `${Instructor}`; // Mostrar solo si el rol es "Administrador"
  case 'selectprogramaFormacion':
      return role === `${Administrador}`|| role === `${Gestor}`|| role === `${Invitados}`|| role === `${Instructor}`; // Mostrar solo si el rol es "Administrador"
  case 'registro_calificado':
      return  ; // Mostrar solo si el rol es "Administrador"
  case 'desarrollocurricular':
      return  ; // Mostrar solo si el rol es "Administrador"
  case 'nivelFormacion':
      return role === `${Administrador}`; // Mostrar solo si el rol es "Administrador"
  case 'proyectos':
      return role === `${Administrador}`; // Mostrar solo si el rol es "Administrador"
  case 'retroAlimentacionRed':
      return role === `${Administrador}`; // Mostrar solo si el rol es "Administrador"
  case 'investigacion':
      return role === `${Administrador}`; // Mostrar solo si el rol es "Administrador"


    default:
      return true; // Mostrar por defecto si no hay lógica específica para el enlace
  }
};


let isLoading = ref(true); 
let showWelcomeMessage = ref(true);

const closeMenuOnClickOutside = () => {
  const menu = document.getElementById('menu'); // Obtén el elemento container-menu por su ID

  if (menu && !menu.contains(event.target)) {
    // Cierra el menú si se hace clic fuera de él
    closeMenu();
  }
};


  const closeMenu = () => {document.getElementById('btn-menu').checked = false; };
const handleRouterLinkClick = (to) => {
  isLoading.value = true; 
  closeMenu(); 
  showWelcomeMessage.value = false; // Oculta el letrero
};

onBeforeRouteUpdate((to, from, next) => {
  setTimeout(() => {
    isLoading.value = false; 
    next(); 
  }, 1000); 
});

onMounted(() => {
  isLoading.value = false;
});



</script>

<style >

.loading-indicator {
  position: fixed; /* Fija la posición en la ventana del navegador */
  z-index: 9999; /* Asegura que esté en la capa superior */
  top: 0; /* Lo coloca en la parte superior de la ventana */
  left: 0;
  width: 100%; /* Ocupa todo el ancho */
  height: 100%; /* Ocupa todo el alto */
  background-color: rgba(255, 255, 255, 0.29); /* Fondo semitransparente */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loading-indicator i {
  font-size: 3em;
  color: #000;
}

.loading-indicator p {
  font-size: 1.5em;
  color: #000;
  margin-top: 10px;
}

.container-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px; /* Espacio interior opcional */
}

@media (max-width: 768px) {
  .container-main {
    padding: 10px; /* Espacio interior reducido en dispositivos móviles */
  }
}


.btn {
  text-decoration: none;
  border: none;
  padding: 13px 21px;
  font-size: 15px;
  background-color:  rgb(25, 103, 42);
  color: #fffffff3;
  border-radius: 10px;
  box-shadow: 10px  10px 10px rgba(13, 14, 16, 0.741);
  cursor: pointer;
  outline: none;
  transition: 0.5s all;

}
.btn:hover {
  color: #241b1b;
  background-color: rgb(23, 105, 24);
}
.btn:active {
  transform: scale(1.1);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgb(11, 12, 11);
  /* Lowering the shadow */
}
*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Montserrat Alternates', sans-serif;
	}
	
  .capa {
   margin-top: 20px; 
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  z-index: -1;
}
	.header {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(26, 98, 46);
  z-index: 100; /* Asegura que esté en la capa superior */
}

	.container{
		width: 90%;
		max-width: 1200px;
		margin: auto;
		
	}
	.container .btn-menu, .logo{
		float: left;
		line-height:100px;
	}
	.container .btn-menu label{
		color: #fff;
		font-size: 25px;
		cursor: pointer;
	}
	.logo h1{
		color: #fff;
		font-weight: 400;
		font-size: 22px;
		margin-left: 10px;
	}
	.container .menu{
		float: right;
		line-height: 100px;
		z-index: 1000;
	}
	.container .menu a{
		display: inline-block;
		padding: 15px;
		line-height: normal;
		text-decoration: none;
		color: #090808;
		transition: all 0.3s ease;
		border-bottom: 2px solid transparent;
		font-size: 15px;
		margin-right: 5px;
	}
	.container .menu a:hover{
		border-bottom: 2px solid #c7c7c7;
		padding-bottom: 5px;
	}

	#btn-menu{
		display: none;
	}
.container-menu {
  position: absolute;
  z-index: 1000;
  width: 100%;
  top: 0;
  left: 0;
  transition: all 500ms ease;
  opacity: 0;
  visibility: hidden;
}

#btn-menu:checked ~ .container-menu {
  opacity: 1;
  visibility: visible;
}

.cont-menu {
  position: fixed;
  width: 100%;
  max-width: 300px;
  background: rgb(26, 98, 46);
  left: 0;
  top: 0;
  transition: all 500ms ease;
  transform: translateX(-100%);
  height: 100%; /* Añade esta propiedad para ocupar toda la altura */
  overflow-y: auto; /* Agrega una barra de desplazamiento vertical si es necesario */
}

#btn-menu:checked ~ .container-menu .cont-menu {
  transform: translateX(0%);
}
	.cont-menu nav{
		padding: 10px; /* Ajusta el valor según tus necesidades */
	}
	.cont-menu nav a{
		display: block;
		text-decoration: none;
		padding: 20px;
		color: #fffcfc;
		border-left: 5px solid transparent;
		transition: all 400ms ease;
		
	}
	.cont-menu nav a:hover{
		border-left: 5px solid #ffffff;
		background: #000000;
		color: #f9f9f9;
    
	}
	.cont-menu label{
		position: absolute;
		right: 5px;
		top: 10px;
		color: #fff;
		cursor: pointer;
		font-size: 18px;
		
	}

</style>