<template >

<div class="container" style="background-color:  #f6f6f6; border-radius: 10px ;  box-shadow: 3px 2px 22px 1px rgb(11, 12, 11); top: 200px;position: absolute;
    /* Lowering the shadow */">
  
  <br>
  <div class="group" style="display: flex; justify-content: space-between; align-items: center;">
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#agregarUsuario"
        style="width: 220px; height: 60px;background-color: rgb(255, 255, 255);"
      >
        <i class="fa-solid fa-plus fa-xl" style="color: #000000;"></i>
      </button>
  
      <div class="input-container">
        <input placeholder="Buscar..." type="search" class="input">
          <!-- Tu código SVG para el icono de búsqueda -->
      </div>
    </div><br>
    <div class="modal fade" id="agregarUsuario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="background-color: #ffffff; border-radius: 10px">
            <div class="modal-header">
                <h4>Agregar Centro de Formación</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card-body ">
                  <div class="image-preview">
        </div>
      
                    <div class="row">
                        <div class="col-md-6">
                             Nombre
                            <!-- input nombre -->
                            <input v-model="nombre" type="text" class="form-control" :class="{'is-invalid': !nombre}" placeholder="Nombres" /><br>
                            Codigo
                            <!-- input codigo -->
                            <input v-model="codigo" type="text" class="form-control" placeholder="Codigo" :class="{'is-invalid': !codigo}" /><br>
                  
                            <!-- input redes de conocimiento -->
                            <!-- <select :class="{'is-invalid': !rolSeleccionado}" class="form-select" id="red-conocimiento" v-model="redConocimientoSeleccionada">
                            <option v-for="red in redesConocimiento" :key="red.id" :value="red">{{ red.nombre }}</option>
                            </select>  -->
                            </div>
                            <div class="col-md-6">
                            Ciudad
                            <!-- input ciudad -->
                            <select :class="{'is-invalid': !idCiudad}" class="form-select" id="red-conocimiento" v-model="idCiudad">
                            <option value="" disabled selected>Seleccione la ciudad</option>
                            <option v-for="ciudad in ciudadActivos" :key="ciudad.id" :value="ciudad">{{ ciudad.nombre }}</option>
                            </select><br>
                            Dirección
                            <!-- input Direccion -->
                            <input v-model="direccion" type="text" class="form-control" placeholder="Direccion" :class="{'is-invalid': !direccion}" /><br>

                     <!-- boton guardar -->
                     <button @click="guardar()" type="button" class="btn2" style="width: 100px;  ">
                        Guardar
                    </button>
                   </div>
                 
                </div> </div>
            </div>
        </div>
    </div>
</div>

     <!-- Modal Editar Centro de formación -->
<div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="background-color: #ffffff; border-radius: 10px">
            <div class="modal-header">
                <h4>Editar Centro de formación</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card-body ">
                  <div class="image-preview">
        </div>
      
                    <div class="row">
                        <div class="col-md-6">
                           <!-- input nombre -->
                            <input v-model="editNombre" type="text" class="form-control" :class="{'is-invalid': !nombre}" placeholder="Nombres" /><br>
                            <!-- input codigo -->
                            <input v-model="editCodigo" type="text" class="form-control" placeholder="Codigo" :class="{'is-invalid': !codigo}" /><br>
                  
                            </div>
                            <div class="col-md-6">
                            <!-- input ciudad -->
                            <select :class="{'is-invalid': !idCiudad}" class="form-select" id="red-conocimiento" v-model="editCiudad">
                            <option value="" disabled selected>Seleccione la ciudad</option>
                            <option v-for="ciudad in ciudadActivos" :key="ciudad.id" :value="ciudad">{{ ciudad.nombre }}</option>
                            </select><br>
                            <!-- input Direccion -->
                            <input v-model="editDireccion" type="text" class="form-control" placeholder="Direccion" :class="{'is-invalid': !direccion}" /><br>

                     <!-- boton guardar -->
                     <button @click="actualizarCentroFormacionEditado(editCentroFormacion._id)" type="button" class="btn2" style="width: 100px;  ">
                        Editar
                    </button>
                   </div>
                 
                </div> </div>
            </div>
        </div>
    </div>
</div>
          <table class="table table-striped table-success table-hover"  >
            <thead>
              <tr>
                <th>codigo</th>
                <th>Denominacion</th>
                <th>Ciudad</th>
                <th>Dirección</th>
                <th>Editar/Centro De Formacion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="centroFormacion in centroFormacionActivos" :key="centroFormacion.id && centroFormacion.id">
                <td>{{ centroFormacion.codigo }}</td>
                <td>{{ centroFormacion.nombre }}</td>
                <td>{{ centroFormacion.idCiudad.nombre }}</td>
                <td>{{ centroFormacion.direccion }}</td>
                <!-- <td>{{ centroFormacion.redconocimiento }}</td> -->

                <td>
                  <!-- boton  modal editar centroFormacion -->
                
                  <i  data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"   @click="editarCentrosFormacion(centroFormacion)" class="fa-solid fa-pen fa-lg" style="color: #000000;"></i>
                 
                </td>
              </tr>
            </tbody>
          </table>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";
import { useCiudadStore } from "../almacenaje/ciudad.js";
import { useCentroFormacionStore } from "../almacenaje/centroFormacion.js";



//variable store ciudad 
const  useCiudad = useCiudadStore();
//variable store centro Formacion
const useCentroFormacion = useCentroFormacionStore();

//variables modal agregar
let nombre = ref("");
let codigo = ref("");
let direccion = ref("");
let idCiudad = ref("");

let centroFormacionSelecionados = ref(null);

//variables modal editar
let editNombre = ref("");
let editCodigo = ref("");
let editDireccion = ref("");
let editCiudad = ref("");

let centroFormacionActivos = ref([]);
let ciudadActivos = ref([]);


async function guardar() {
  // Realizar validaciones
  if (
    !nombre.value ||
    !codigo.value ||
    !direccion.value ||
    !idCiudad.value 
  ) {
    // Mostrar una alerta temporal de error en caso de campos vacíos
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, completa todos los campos.",
    });
    return;
  }

  let r = await useCentroFormacion.addCentrosFormacion({
    nombre: nombre.value,
    codigo: codigo.value,
    direccion: direccion.value,
    idCiudad: idCiudad.value,

  });
  await lisCentroFormacion();

  // Mostrar una alerta temporal de éxito
  Swal.fire({
    icon: "success",
    title: "Éxito",
    text: "Los datos se agregaron con éxito.",
  }).then((result) => {
    if (result.isConfirmed) {
      const agregarUsuarioModal = document.getElementById("agregarUsuario");
      const modalUsuarioInstance = bootstrap.Modal.getInstance(agregarUsuarioModal);
      modalUsuarioInstance.hide();
    }
  });

  // Limpiar los campos después de agregar los datos
  limpiarInputs();
}



let editCentroFormacion = ref(null); // Agrega esta variable en la parte superior de tu código.

function editarCentrosFormacion(centroFormacion) {
  editCentroFormacion.value = centroFormacion;
  editNombre.value = centroFormacion.nombre;
  editCodigo.value = centroFormacion.codigo;
  editDireccion.value = centroFormacion.direccion;
  editCiudad.value = centroFormacion.idCiudad;
}

const lisCentroFormacion = async()=>{
 centroFormacionActivos.value =await useCentroFormacion.getCentrosFormacion();
 console.log(centroFormacionActivos.value);
}


const lisCiudad = async()=>{
 ciudadActivos.value =await useCiudad.getCiudad();
 console.log(ciudadActivos.value);
}




// Función para editar el conductor seleccionado
async function actualizarCentroFormacionEditado(id) {
  try {
    await useCentroFormacion.updateCentrosFormacion(id, {
      nombre: editNombre.value,
      codigo: editCodigo.value,
      direccion: editDireccion.value,
      idCiudad: editCiudad.value,

    });
    // Cerrar el modal manualmente
    const editarUsuarioModal = document.getElementById("staticBackdrop");
    const modalUsuarioInstance = bootstrap.Modal.getInstance(editarUsuarioModal);
    modalUsuarioInstance.hide();

    // Actualizar la lista de buses en la tabla.
    await lisCentroFormacion();

    // Mostrar un mensaje de éxito.
    Swal.fire({
      icon: "success",
      title: "Éxito",
      text: "Los datos se editaron con éxito.",
    });
  } catch (error) {
    console.error(error);
    // Mostrar un mensaje de error en caso de fallo.
    alert(
      "Hubo un error al actualizar el Usuario. Por favor, inténtalo nuevamente."
    );
  }
}




function limpiarInputs() {
  nombre.value = "";
  codigo.value = "";
  direccion.value = "";
  idCiudad.value = "";


  centroFormacionSelecionados.value = null;
}

onMounted(async () => {
  await lisCentroFormacion();
  await lisCiudad();
}); 

</script>
  
<style>
/* Estilos para el contenedor del botón personalizado */
.file-input-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 50px;
  background-color: rgb(26, 98, 46);
  color: white;
  cursor: pointer;
  padding: 10px 20px;
}

/* Estilos para ocultar el input de archivos */
.file-input {
  display: none;
}

/* Estilos para el ícono de "más" */
.custom-file-input-label i {
  margin-right: 5px;
}

   .preview-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #ccc;
}

.image-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
    



</style>