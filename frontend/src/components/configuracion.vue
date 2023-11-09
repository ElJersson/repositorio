<template>
<div class="container" style="background-color: #f6f6f6; border-radius: 10px; top: 200px; position: absolute; overflow-y: auto; max-height: 500px;">        <h1 style="color: #008a35;">Informacion personal</h1> <br>

        <h1 style="color: #008a35;">Datos personales:</h1> <br>
        <a>Nombres:</a> <br> 
        <a>Apellidos:</a> <br> 
        <a>Numero de identificacion:</a>
        <hr>
        <h1 style="color: #008a35;">Contacto</h1> <br> 
        <a>Telefono:</a> <br> 
        <a>Correo electronico:</a> 
        <hr>
        <h1 style="color: #008a35;">Educacion</h1> <br> 
        <a>Perfil profecional</a> <br>
        <a>Hoja de vida</a>
        <hr>
        <h1 style="color: #008a35;">Configuracion de interfas</h1> <br>
    <a>Modificar el color de interfas de usuario</a>
    <input type="color" id="colorPicker" @change="handleColorChange">

    </div>
</template>
<script setup>


const handleColorChange = () => {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = colorPicker.value;

    // Cambia el color de fondo del cont-menu y del header
    const contMenu = document.querySelector('.cont-menu');
    const header = document.querySelector('.header');

    if (contMenu) {
      contMenu.style.backgroundColor = selectedColor;
    }

    if (header) {
      header.style.backgroundColor = selectedColor;
    }
  };
</script>
<style scoped>

</style>