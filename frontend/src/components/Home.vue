<template>
  <div>
    <header class="header">
		<div class="container">
		<div class="btn-menu">
			<label for="btn-menu" ><i class="fa-solid fa-bars fa-xl" style="color: #000000;"></i></label>
		</div>
			<div class="logo">
			</div>
			<nav class="menu">
				<a href="#">Inicio</a>
				<a href="#">Nosotros</a>
				<a href="#">Contacto</a>
        <i class="fa-solid fa-right-from-bracket fa-lg" style="color: #050505;"></i>
			</nav>
		</div>
	</header>
	<div class="capa">
   <img style=" margin-top: 200px;width: 300px; height: 300px; /* Ajusta el valor según tus necesidades */" src="./senna.jpg" alt="">
   <router-view></router-view>
  </div>
<!--	--------------->
<input type="checkbox" id="btn-menu">
<div class="container-menu">
	<div class="cont-menu">
		<nav>
		<router-link to="/redesconocimiento" @click="closeMenu">Redes de conocimiento</router-link>
			<router-link to="/instructor" @click="closeMenu">Instructores</router-link>
			<a >Centros de formacion</a>
			<a>Ambientes de formacion</a>
			<a >Materiales de formacion</a>
			<a >Uusarios</a>
      <a >Configuracion</a>
		</nav>
		<label for="btn-menu">✖️</label>
	</div>
</div>
</div>

</template>

<script setup>
  const closeMenu = () => {
    document.getElementById('btn-menu').checked = false;
  };
</script>

<style >
.btn2{
  width: 350px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 10px  10px 10px rgba(13, 14, 16, 0.741);

}
.btn2:hover{
background-color: #3ebd1e;
color: #fff;
transition: 0.5s all;
transform: scale(1.1);

}
.btn2:active{
  transform: scale(1.1);
  /* Scaling button to 0.98 to its original size */
}


.btn {
  text-decoration: none;
  border: none;
  padding: 13px 21px;
  font-size: 15px;
  background-color: rgb(68, 204, 63);
  color: #080707f3;
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
    background-color: #26b502;
  
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
		background: rgb(157, 155, 155);
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
	.cont-menu{
		width: 100%;
		max-width: 250px;
		background: #3ebd1e;
		height: 100vh;
		position: relative;
		transition: all 500ms ease;
		transform: translateX(-100%);
	}
	#btn-menu:checked ~ .container-menu .cont-menu{
		transform: translateX(0%);
	}
	.cont-menu nav{
		transform: translateY(15%);
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