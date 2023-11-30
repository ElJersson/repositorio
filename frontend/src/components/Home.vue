<template>
  <div>
    <header class="header" >
		<div class="container" >
		<div class="btn-menu">
			<label for="btn-menu" >
        <i class="fa-solid fa-bars fa-xl color" ></i></label>
		</div>
			<div class="logo">
			</div>
			<nav class="menu">
        			<router-link  to="/home" @click="handleRouterLinkClick('/home')" ><p class="color">Inicio</p>
</router-link>

		
       <i data-bs-toggle="modal" data-bs-target="#exampleModal"  class="fa-solid fa-right-from-bracket fa-lg fixed-icon color"   ></i>

			</nav>
		</div>



	</header>
	<div class="container-main"  @click="closeMenuOnClickOutside">
   <img style=" margin-top: 200px;width: 300px; height: 300px; /* Ajusta el valor según tus necesidades */" src="./logosena.png" alt="">
      <div v-if="isLoading" class="loading-indicator">
      <i class="fa-solid fa-spinner fa-spin fa-3x" style="color: #ffffff;"></i>
      <p style="color: rgb(255, 255, 255);">Cargando...</p>
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
			<router-link v-if="showLink('redesconocimiento')" to="/redesconocimiento" @click="handleRouterLinkClick('/redesconocimiento')"><i class="fa-brands fa-connectdevelop color" ></i><p class="link-text color" > Redes de conocimiento</p></router-link>
			<router-link v-if="showLink('usuario')" to="/usuario" @click="handleRouterLinkClick('/usuario')" class="color"><i class="fa-solid fa-user color" ></i> <p class="link-text color">Usuarios</p></router-link>
			<router-link v-if="showLink('rolUsuario')" to="/rolUsuario" @click="closeMenu" class="color"><i class="fa-solid fa-user-gear color" ></i> <p class="link-text color">Roles de usuario</p></router-link>
			<router-link v-if="showLink('ambienteformacion')" to="/ambienteformacion" @click="handleRouterLinkClick('/ambienteformacion')" class="color" ><i class="fa-solid fa-hand-holding-heart color"></i> <p class="link-text color">Ambientes formacion</p></router-link>
			<router-link v-if="showLink('centroFormacion')" to="/centroFormacion" @click="closeMenu" class="color"><i class="fa-solid fa-arrows-to-eye color" ></i> <p class="link-text color">Centros de formacion</p></router-link>			
			<router-link v-if="showLink('programas_formacion')" to="/programas_formacion" @click="closeMenu" class="color"><i class="fa-solid fa-list-check color" ></i><p class="link-text color">Programas de formacion</p></router-link>
			<router-link v-if="showLink('instructores')" to="/instructores" @click="handleRouterLinkClick('/instructores')" class="color"><i class="fa-solid fa-user-tie color" ></i> <p class="link-text color">Instructores</p></router-link>
      <router-link v-if="showLink('materialFormacion')" to="/materialFormacion" @click="handleRouterLinkClick('/materialFormacion')" class="color"><i class="fa-solid fa-book color" ></i> <p class="link-text color">Materiales de formación</p></router-link>
      <router-link v-if="showLink('desarrollocurricular')" to="/desarrollocurricular" @click="handleRouterLinkClick('/desarrollocurricular')" class="color"><i class="fa-solid fa-window-restore color" ></i> <p class="link-text color">Desarrollo Curricular</p></router-link>
      <router-link v-if="showLink('nivelFormacion')" to="/nivelFormacion" @click="handleRouterLinkClick('/nivelFormacion')" class="color"><i class="fa-solid fa-turn-up color" ></i><p class="link-text color">Nivel De Formación</p> </router-link>
      <router-link v-if="showLink('registro_calificado')" to="/registro_calificado" @click="closeMenu" class="color"><i class="fa-regular fa-registered color" ></i> <p class="link-text color">Registro Calificado</p></router-link>			
      <router-link v-if="showLink('selectprogramaFormacion')" to="/selectprogramaFormacion" @click="closeMenu" class="color"><i class="fa-regular fa-object-group color" ></i><p class="link-text color">Seleccionar Programa Formación</p> </router-link>			
      <router-link v-if="showLink('proyectos')" to="/proyectos" @click="closeMenu" class="color"><i class="fa-regular fa-object-group color" ></i> <p class="link-text color">Proyectos</p></router-link>			
      <router-link v-if="showLink('retroAlimentacionRed')" to="/retroAlimentacionRed" @click="closeMenu" class="color"><i class="fa-regular fa-object-group color" ></i> <p class="link-text color">Retroalimentación De Red</p></router-link>			
      <router-link v-if="showLink('investigacion')" to="/investigacion" @click="closeMenu" class="color"><i class="fa-regular fa-object-group color" ></i> <p class="link-text color">Investigación</p></router-link>			
      <router-link v-if="showLink('configuracion')" to="/configuracion" @click="handleRouterLinkClick('/configuracion')" class="color"><i class="fa-solid fa-gears color" ></i> <p class="link-text color">Configuracion</p></router-link>
      <a class="color" data-bs-toggle="modal" data-bs-target="#exampleModall" style="color: #f6f9fd;" ><i class="fa-regular fa-pen-to-square color"></i><p class="link-text color">Personalizar</p></a>
		</nav>
		<label  style="position: fixed;" for="btn-menu"><i class="fa-solid fa-xmark fa-xl" style="color: #f6f9fd;"></i></label>
	</div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModall" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="background-color: rgb(235, 235, 235);">
      <div class="modal-header">
        <h1 class="modal-title letra" id="exampleModalLabel">Personalizar colores</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
<br>
        
<h3 class="label " style="font-size: 25px;">Elije un color para la letra:</h3>
<input v-model="colorletra" class="form-control" type="color" :style="{ backgroundColor: letra }"> 
 
<br>
  <h3 class="label" style="font-size: 25px;">Elije un color para el menú:</h3>
  <input v-model="colormenu" class="form-control" type="color" :style="{ backgroundColor: menu }">
 
  <br>

<hr>
      
      </div>
      <div class="modal-footer">
        <button  class="btn btn-dark" style="font-size: 12px;" data-bs-dismiss="modal">Salir</button>
        <button @click="editarcolor()" style="font-size: 12px;" class="btn btn-dark" >ACTUALIZAR COLOR</button>
      
      </div>
    </div>
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
import { useConfiguracionStore } from "../almacenaje/configuracion.js";
import Swal from "sweetalert2";
const useconfiguracion = useConfiguracionStore();
let colorletra = ref("");
let colormenu = ref("");
let colores = ref([]);
let menu = ref("");
let letra = ref("");
const liscolores = async()=>{

 colores.value =await useconfiguracion.traerConfiguracion(useconfiguracion.token);
 console.log(colores.value)
 menu.value=colores.value[0].colormenu
letra.value=colores.value[0].colorletra
}

onMounted(async () => {
  await liscolores();
}); 

 async function editarcolor(id) {
  try {
   
    await useconfiguracion.editarConfiguracion(colores.value[0]._id, {
     colorletra: colorletra.value,
      colormenu: colormenu.value,
    });
    await liscolores(); 

    // Mostrar un mensaje de éxito.
    Swal.fire({
      icon: "success",
      title: "Éxito",
      text: "color editado con exito",
    });
  } catch (error) {
    console.error(error);
    // Mostrar un mensaje de error en caso de fallo.
    alert(
      "Hubo un error al actualizar el color."
    );
  }
} 

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
/* input agregar imagen  */
 .file-input-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 50px;
  background-color: v-bind(menu);
  color: white;
  cursor: pointer;
  padding: 10px 20px;
}

.file-input {
  display: none;
}

.custom-file-input-label i {
  margin-right: 5px;
}
/* --- */

/* boton activo inactivo */
 .checkbox {
    display: none;
  }
  
  .slider {
    width: 60px;
    height: 30px;
    background-color: lightgray;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    border: 4px solid transparent;
    transition: .3s;
    box-shadow: 0 0 10px 0 rgb(0, 0, 0, 0.25) inset;
    cursor: pointer;
  }
  
  .slider::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    transform: translateX(-30px);
    border-radius: 20px;
    transition: .3s;
    box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
  }
  
  .checkbox:checked ~ .slider::before {
    transform: translateX(30px);
    box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
  }
  
  .checkbox:checked ~ .slider {
    background-color: v-bind(menu);
  }
  
  .checkbox:active ~ .slider::before {
    transform: translate(0);
  }
  /* ------ */

.link-text {
        display: inline;
        margin-left: 5px; /* You can adjust the margin as needed */
    }
.color{
  color:v-bind(letra);
}
.letra{
  color: v-bind(menu);
}
.menu{
  background-color: v-bind(menu);
}
.loading-indicator {
  position: fixed; /* Fija la posición en la ventana del navegador */
  z-index: 9999; /* Asegura que esté en la capa superior */
  top: 0; /* Lo coloca en la parte superior de la ventana */
  left: 0;
  width: 100%; /* Ocupa todo el ancho */
  height: 100%; /* Ocupa todo el alto */
  background-color: rgba(0, 0, 0, 0.618); /* Fondo semitransparente */
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
  background-color: v-bind(menu);
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
  background-color: v-bind(menu);
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
  background:v-bind(menu);
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