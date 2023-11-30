<template>
<div class="container" style="background-color: #f6f6f6; border-radius: 10px; top: 200px; position: absolute; overflow-y: auto; max-height: 500px;">        <h1 class="letra">Informacion personal</h1> <br>

        <h1 class="letra">Datos personales:</h1> <br>
        <a>Nombres: {{usuario.nombre}}</a> <br> 
        <a>Apellidos: {{usuario.apellidos}}</a> <br> 
        <a>Numero de identificacion: {{usuario.cc}}</a>
        
        <hr>
        <h1 class="letra">Contacto</h1> <br> 
        <a>Telefono: {{usuario.telefono}}</a> <br> 
        <a>Correo electronico: {{usuario.email}}</a> 
        <hr>
        
        <a>Perfil profesional: {{usuario.perfilProfesional}}</a> <br>
        <a>Hoja de vida:</a> <a :href="usuario.curriculum" target="_blank">Curriculum</a>
             

        <hr>
        <h1 class="letra">Configuracion de interfas</h1> <br>
    <a>Modificar el color de interfas de usuario</a>
    <input type="color" id="colorPicker" @change="handleColorChange"> <br>
   
    
  <hr>

    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'; 
import { useAdministradorStore } from "../almacenaje/login.js";

const useAdministrador = useAdministradorStore();

let usuario= useAdministrador.datosUsuario

const handleColorChange = () => {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = colorPicker.value;

    // Cambia el color de fondo del cont-menu y del header
    const contMenu = document.querySelector('.cont-menu');
    const header = document.querySelector('.header');
const btn = document.querySelector('.btn')

if(btn){
  btn.style.backgroundColor = selectedColor;
}

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