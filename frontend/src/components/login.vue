<template>
 <div class="d-md-flex half">
    <img class="bg" src="./Sena-.jpg" style="width: 100%; max-width: 900px;">
    <div class="contents">

      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-12">
            <div class="form-block mx-auto">
              <div class="text-center mb-5">
                <div class="logo-title-container">
             <img src="./logosena.png" style="width: 20%;"> <h3>INICIAR SESION </h3>
              <!-- <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p> -->
              </div></div>
              <form action="#" method="post">
                <div class="form-group first">
                  <label for="username">Usuario</label>
                  <input type="text" class="form-control" placeholder="Tu-email@gmail.com" id="username" v-model="email">
                </div>
                <div class="form-group last mb-3">
    <label for="password">Contraseña</label>
    <div class="password-input-container">
      <input
        :type="showPassword ? 'text' : 'password'"
        class="form-control"
        placeholder="Tu contraseña"
        id="password"
        v-model="password"
      />
      <button
        class="toggle-password"
        @click="togglePasswordVisibility"
        type="button"
      >
      <i :class="showPassword ? 'far fa-eye-slash' : 'far fa-eye'" style="color: black;"></i>
      </button>
    </div>
  </div>
  <div class="form-group">
  <label  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn-link" style="width: 200px; height: 30px; border-radius: 10px; background-color: rgb(255, 255, 255);" @click="openModal">Recuperar contraseña</label>

</div>    
                <div class="d-sm-flex mb-5 align-items-center">
                  <label class="control control--checkbox mb-3 mb-sm-0"><span class="caption">Recordar mi</span>
                    <input type="checkbox" checked="checked"/>
                    <div class="control__indicator"></div>
                  </label>
                  <span class="ml-auto"><a href="#" class="forgot-pass">Contraseña</a></span> 
                </div>
                <div v-if="loading" class="loading-spinner" style="position: relative;">

    </div>
                <button type="button" style="background-color: rgb(46, 158, 63);"  class="btn" @click="login" :disabled="loading">INGRESAR</button>

              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel" style="color: rgb(35, 137, 42);">Restablecer contraseña</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h2>Ingresa el correo electronico: </h2>
        <input   class="form-control"  placeholder="Correo electronico">
      </div>
      <div class="modal-footer">
        
        <button type="button" class="btn btn-primary">Enviar</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script setup>
 import { ref, onMounted } from "vue";
import axios from "axios";
import Swal from 'sweetalert2';
import { useAdministradorStore } from "../almacenaje/login.js";
import { router } from "../routes/routes.js"; // Asegúrate de importar el enrutador correctamente


const useAdministrador = useAdministradorStore();
const email = ref("");
const password = ref("");
const loading = ref(false);
const error = ref(null);
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const login = async () => {
  loading.value = true;
  error.value = null;

  try {
    await useAdministrador.iniciarSesion(email.value, password.value);
    router.push("/home");
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor ingresa un correo y contraseña válidos.',
    });
    error.value = err.message || "Error en el inicio de sesión";
  } finally {
    loading.value = false;
  }
};

 
</script>




  
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Acme');
body {
  font-family: "Roboto", sans-serif;
  background-color: #fff; }
  .loading-spinner {
  /* Estilo y posicionamiento del spinner */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px; /* Ajusta la altura según tus necesidades */
}
/* Estilo para alinear el logo y el título */
.logo-title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px; /* Ajusta el margen según sea necesario */
}


.password-input-container {
  position: relative;
}

.toggle-password {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff; /* Cambia el color según tus preferencias */
  font-size: 14px;
  padding: 0;
  outline: none;
}

/* Estilos para ocultar/ver la contraseña */
.password-input-container input[type="password"] {
  padding-right: 35px; /* Espacio para el botón */
}

.password-input-container input[type="password"][type="text"] {
  padding-right: 0;
}
.loading-spinner:after {
  /* Estilo del spinner */
  content: "";
  border: 4px solid rgba(255, 255, 255, 0.3); /* Colores y tamaño del spinner */
  border-top: 4px solid #56a961;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite; /* Animación de giro */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


p {
  color: #b3b3b3;
  font-weight: 300; }

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: "Roboto", sans-serif; }

a {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease; }
  a:hover {
    text-decoration: none !important; }

.content {
  padding: 7rem 0; }

h2 {
  font-size: 20px; }

.half, .half .container > .row {
  height: 100vh;
  min-height: 700px; }

.half .contents {
  background: #f6f7fc; }

.half .bg {
  width: 25%; }
  @media (max-width: 787.98px) {
    .half .bg {
      width: 100%;
      height: 200px; } }

.half .contents {
  width: 75%; }
  @media (max-width: 767.98px) {
  .half .bg {
    display: none;  // Hide the image on mobile devices
  }

  .half .contents {
    width: 100%;
  }

  .form-block {
    max-width: none;  // Adjust the max-width for the form block on mobile
  }
}


.half .contents .form-control, .half .bg .form-control {
  border: none;
  border-radius: 4px;
  height: 54px;
  background: #efefef; }
  .half .contents .form-control:active, .half .contents .form-control:focus, .half .bg .form-control:active, .half .bg .form-control:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none; }

.half .bg {
  background-size: cover;
  background-position: center; }

.half a {
  color: #888;
  text-decoration: underline; }

.half .btn {
  height: 54px;
  padding-left: 30px;
  padding-right: 30px; }

.half .forgot-pass {
  position: relative;
  top: 2px;
  font-size: 14px; }

.form-block {
  background: #fff;
  padding: 40px;
  max-width: 400px;
  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2); }
  @media (max-width: 767.98px) {
    .form-block {
      padding: 25px; } }

.control {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 14px; }
  .control .caption {
    position: relative;
    top: .2rem;
    color: #888; }

.control input {
  position: absolute;
  z-index: -1;
  opacity: 0; }

.control__indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background: #e6e6e6;
  border-radius: 4px; }

.control--radio .control__indicator {
  border-radius: 50%; }

.control:hover input ~ .control__indicator,
.control input:focus ~ .control__indicator {
  background: #ccc; }

.control input:checked ~ .control__indicator {
  background: #31ec27; }

.control:hover input:not([disabled]):checked ~ .control__indicator,
.control input:checked:focus ~ .control__indicator {
  background: #4afa32; }

.control input:disabled ~ .control__indicator {
  background: #e6e6e6;
  opacity: 0.9;
  pointer-events: none; }

.control__indicator:after {
  font-family: 'icomoon';
  content: '\e5ca';
  position: absolute;
  display: none;
  font-size: 16px;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease; }

.control input:checked ~ .control__indicator:after {
  display: block;
  color: #fff; }

.control--checkbox .control__indicator:after {
  top: 50%;
  left: 50%;
  margin-top: -1px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); }

.control--checkbox input:disabled ~ .control__indicator:after {
  border-color: #7b7b7b; }

.control--checkbox input:disabled:checked ~ .control__indicator {
  background-color: #7e0cf5;
  opacity: .2;}
</style>