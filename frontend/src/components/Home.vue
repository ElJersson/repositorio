<template>
  <div>
    <header class="header">
		<div class="container">
		<div class="btn-menu">
			<label for="btn-menu" ><i class="fa-solid fa-bars fa-xl" style="color: #ffffff;"></i></label>
		</div>
			<div class="logo">
			</div>
			<nav class="menu">
				<a href="#" style="color: #ffffff;">Inicio</a>
        <i class="fa-solid fa-right-from-bracket fa-lg" style="color: rgb(255, 255, 255);"></i>
			</nav>
		</div>
	</header>
	<div class="container-main">
   <img style=" margin-top: 200px;width: 300px; height: 300px; /* Ajusta el valor según tus necesidades */" src="./logosena.png" alt="">
      <div v-if="isLoading" class="loading-indicator">
      <i class="fa-solid fa-spinner fa-spin fa-3x" style="color: #000;"></i>
      <p>Cargando...</p>
    </div>
   <router-view></router-view>
  </div>
<!--	--------------->
<input type="checkbox" id="btn-menu">
<div class="container-menu">
	<div class="cont-menu">
		<nav>
			<div class="image-preview">
                    <img src="./logosena.png"  class="preview-image" style="background-color: #ffffff;">
        </div>
			<router-link  to="/redesconocimiento" @click="handleRouterLinkClick('/redesconocimiento')" >Redes de conocimiento</router-link>
			<router-link  to="/usuario" @click="handleRouterLinkClick('/usuario')">usuarios</router-link>
			<router-link  to="/rolUsuario" @click="closeMenu">Roles de usuario</router-link>
			<router-link  to="/ambienteformacion" @click="closeMenu" >Ambientes de formacion</router-link>
			<router-link   to="/centroFormacion" @click="closeMenu">Centros de formacion</router-link>			
			<router-link  to="/programas_formacion" @click="closeMenu">Progrmas de formacion</router-link>
			<router-link to="/instructores" @click="closeMenu">Instructores</router-link>
			<router-link to="/materialFormacion" @click="closeMenu">Materiales de formacion</router-link>
			<router-link to="/configuracion" @click="closeMenu">Configuracion</router-link>

			<a>Materiales de formacion</a>
			<a>Desarrollo curricular</a>
			<a>Materiales de formacion</a>
			<a>Proyectos</a>
			<a>Retroalimentacion de red</a>
			<a>Investigacion</a>
			<a>Registro calificado</a>
			
      <a >Configuracion</a>
		</nav>
		<label  style="position: fixed;" for="btn-menu"><i class="fa-solid fa-xmark fa-xl" style="color: #f6f9fd;"></i></label>
	</div>
</div>
</div>

</template>

<script setup>
import { onBeforeRouteUpdate } from 'vue-router';
import { ref, onMounted } from 'vue'; 

let isLoading = ref(true); 

  const closeMenu = () => {document.getElementById('btn-menu').checked = false; };
const handleRouterLinkClick = (to) => {
  isLoading.value = true; 
  closeMenu(); 
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
  background-color: rgba(255, 255, 255, 0.8); /* Fondo semitransparente */
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
	/*Estilos para el encabezado*/
	.header{
		width: 100%;
		height: 100px;
		position: fixed;
		top: 0;left: 0;
    background-color: rgb(26, 98, 46);
  
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
	/*Fin de Estilos para el encabezado*/

	/*Menù lateral*/
	#btn-menu{
		display: none;
	}
	.container-menu{
		position: absolute;

		width: 100%;
		height: 100vh;
		top: 0;left: 0;
		transition: all 500ms ease;
		opacity: 0;
		visibility: hidden;
	}
	#btn-menu:checked ~ .container-menu{
		opacity: 1;
		visibility: visible;
	}
	.cont-menu {
  width: 100%;
  max-width: 250px;
  background: rgb(26, 98, 46);
  max-height: 100vh; /* Establece una altura máxima */
  overflow-y: auto; /* Agrega una barra de desplazamiento vertical cuando sea necesario */
  position: relative;
  transition: all 500ms ease;
  transform: translateX(-100%);
}

	#btn-menu:checked ~ .container-menu .cont-menu{
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
		border-left: 5px solid #000000;
		background: #ffffff;
		color: #000000;
    
	}
	.cont-menu label{
		position: absolute;
		right: 5px;
		top: 10px;
		color: #fff;
		cursor: pointer;
		font-size: 18px;
	}
	/*Fin de Menù lateral*/

</style>