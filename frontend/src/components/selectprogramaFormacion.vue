<template>
 
<div class="containerr-cardd">	
    <div v-if="isLoading" class="loading-indicator">
      <i class="fa-solid fa-spinner fa-spin fa-3x" style="color: #000;"></i>
      <p>Cargando...</p>
    </div>
<router-link to="/desarrollocurricular"  @click="handleRouterLinkClick('/desarrollocurricular')" ><div class="cardd">
	<figure>
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058">
	</figure>
	<div class="contenido-cardd">
		<h3>Desarrollo curricular</h3>
	</div>
</div></router-link>
<div class="cardd">
	<figure>
		<img src="https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg">
	</figure>
	<div class="contenido-cardd">
		<h3>Instructores</h3>
		
	</div>
</div>

<div class="cardd">
	<figure>
		<img src="https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg">
	</figure>
	<div class="contenido-cardd">
		<h3>Materiales de formacion</h3>
	</div>
</div>
<div class="cardd">
	<figure>
		<img src="https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg">
	</figure>
	<div class="contenido-cardd">
		<h3>Proyectos</h3>
	</div>
</div>
<div class="cardd">
	<figure>
		<img src="https://i0.wp.com/informacionytic.com/wp-content/uploads/2020/09/aula-virtual.jpg?fit=626%2C452&ssl=1">
	</figure>
	<div class="contenido-cardd">
		<h3>Ambientes de formacion</h3>
	</div>
</div>
<div class="cardd">
	<figure>
		<img src="https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg">
	</figure>
	<div class="contenido-cardd">
		<h3>Retroalimentacion de red</h3>
	</div>
</div>
<div class="cardd">
	<figure>
		<img src="https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg">
	</figure>
	<div class="contenido-cardd">
		<h3>Investigacion</h3>
	</div>
</div>
<div class="cardd">
	<figure>
		<img src="https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg">
	</figure>
	<div class="contenido-cardd">
		<h3>Registro calificado</h3>
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
  <style>
.containerr-cardd {
    width: 100%;
    max-width: 1100px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Crea tres columnas de igual ancho */
    gap: 20px; /* Espacio entre las tarjetas */
    margin-top: -300px;
}
.title-cards{
	width: 100%;
	max-width: 1080px;
	margin: auto;
	padding: 20px;
	margin-top: 20px;
	text-align: center;
	color: #7a7a7a;
}
.cardd{
	width: 100%;
	margin: 20px;
	border-radius: 6px;
	overflow: hidden;
	background:#fff;
	box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
	transition: all 400ms ease-out;
	cursor: default;
}
.cardd:hover{
	box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
	transform: translateY(-3%);
}
.cardd img{
	width: 100%;
	height: 210px;
}
.cardd .contenido-cardd{
	padding: 15px;
	text-align: center;
}
.cardd .contenido-cardd h3{
	margin-bottom: 15px;
	color: #7a7a7a;
}
.cardd .contenido-cardd p{
	line-height: 1.8;
	color: #6a6a6a;
	font-size: 14px;
	margin-bottom: 5px;
}
.cardd .contenido-cardd a{
	display: inline-block;
	padding: 10px;
	margin-top: 10px;
	text-decoration: none;
	color: #2fb4cc;
	border: 1px solid #2fb4cc;
	border-radius: 4px;
	transition: all 400ms ease;
	margin-bottom: 5px;
}
.cardd .contenido-cardd a:hover{
	background: #2fb4cc;
	color: #fff;
}
@media only screen and (min-width:320px) and (max-width:768px){
	.containerr-cardd{
		flex-wrap: wrap;
	}
	.cardd{
		margin: 15px;
	}
}
</style>