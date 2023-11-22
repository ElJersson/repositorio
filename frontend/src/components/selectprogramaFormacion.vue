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
		<a>Desarrollo curricular</a>
	</div>
</div></router-link>
<div class="cardd">
	<figure>
		<img src="https://www.shutterstock.com/image-vector/teacher-speaking-students-group-notebooks-260nw-1450657124.jpg">
	</figure>
	<div class="contenido-cardd">
		<a>Instructores</a>
	</div>
</div>

<router-link to="/materiales_formacion"  @click="handleRouterLinkClick('/materiales_formacion')" ><div class="cardd">
	<figure>
		<img src="https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg">
	</figure>
	<div class="contenido-cardd">
		<a>Materiales de formacion</a>
	</div>
</div></router-link>
<div class="cardd">
	<figure>
		<img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2019/09/banner-siete-pasos-gestion-proyectos.jpg">
	</figure>
	<div class="contenido-cardd">
		<a>Proyectos</a>
	</div>
</div>
<div class="cardd">
	<figure>
		<img src="https://i0.wp.com/informacionytic.com/wp-content/uploads/2020/09/aula-virtual.jpg?fit=626%2C452&ssl=1">
	</figure>
	<div class="contenido-cardd">
		<a>Ambientes de formacion</a>
	</div>
</div>
<div class="cardd">
	<figure>
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFm0FgBUveAHMrjEY4CqJjLzH82gN9F2W1Ng&usqp=CAU">
	</figure>
	<div class="contenido-cardd">
		<a>Retroalimentacion de red</a>
	</div>
</div>
<router-link to="/investigacion"  @click="handleRouterLinkClick('/investigacion')" ><div class="cardd">
	<figure>
		<img src="data:image/png;base64,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">
	</figure>
	<div class="contenido-cardd">
		<a>Investigacion</a>
	</div>
</div></router-link>
<router-link to="/registro_calificado"  @click="handleRouterLinkClick('/registro_calificado')" ><div class="cardd">
	<figure>
		<img src="data:image/png;base64,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">
	</figure>
	<div class="contenido-cardd">
		<a>Registro calificado</a>
	</div>
</div></router-link>
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

@media (max-width: 768px) {
  .container-cardd {
    flex-direction: column;
  }

  .cardd {
    width: 100%;
	}
}
</style>