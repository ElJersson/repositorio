<template >
<div class="container" style="background-color: #f6f6f6; border-radius: 10px; top: 200px; position: absolute; overflow-y: auto; max-height: 500px;">  
  <h1 style="text-align: center; margin-top: 10px; color: #209702;">Redes De Conocimiento</h1> <!-- Agregamos el letrero aquí -->

    <div class="group" style="display: flex; justify-content: space-between; align-items: center;">
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#agregarRedConocimiento"
        style="width: 220px; height: 50px; background-color: rgb(26, 98, 46); display: flex; align-items: center; justify-content: center;"
      >
        <i class="fa-solid fa-plus fa-xl" style="color: #ffffff;" ></i>
      </button>

      <div class="input-container">
        <input placeholder="Buscar..." type="search" class="input">
        <!-- Tu código SVG para el icono de búsqueda -->
      </div>
    </div><br>

    <div class="modal fade" id="agregarRedConocimiento" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content" style="background-color:  #ffffff; border-radius: 10px">
          <div class="modal-header">
            <h2>Nueva Red De Conocimiento</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card-body">

              <!-- input nombre -->
              <input v-model="nombre" type="text" class="form-control" placeholder="nombre"
                :class="{ 'is-invalid': !Editnombre }" /><br>

              <!-- input codigo -->
              <input v-model="codigo" type="text" class="form-control" placeholder="codigo"
                :class="{ 'is-invalid': !Editcodigo }" /><br>
              <!-- boton guardar -->
              <button @click="guardar()" type="button" class="centrar; btn btn-success">
                Guardar
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal editar red conocimiento -->
    <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content" style="background-color: #ffffff; border-radius: 10px">
          <div class="modal-header">
            <h2>Editar Red De Conocimiento</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card-body ">

              <div class="row">
                <div class="col-md-12">
                  <!-- input red conocimiento -->
                  <h5>Nombre De Red:</h5>
                  <input v-model="Editnombre" type="text" class="form-control" placeholder="red conocimiento"
                    :class="{ 'is-invalid': !Editnombre }" /><br>

                  <!-- input codigo -->
                  <h5>codigo De Red:</h5>
                  <input v-model="Editcodigo" type="text" class="form-control" placeholder="codigo"
                    :class="{ 'is-invalid': !Editcodigo }" /><br>



                </div>

                <!-- boton guardar -->
                <button @click="actualizarRedEditado(editRed._id)" type="button" class="centrar; btn btn-success" style="width: 100px;  ">
                  Editar
                </button>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- tabla de red de conocimiento -->

    <table class="table table-striped table-success table-hover">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Codigo</th>
          <th>Estado</th>
          <th>Editar</th>
          <th>...</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="RedConocimiento in redConocimientoActivas" :key="RedConocimiento.id && RedConocimiento.id">
          <td>{{ RedConocimiento.nombre }}</td>
          <td>{{ RedConocimiento.codigo }}</td>
          <td>
            <span v-if="RedConocimiento.estado" style="color: #209702;">Activo</span>
            <span v-else style="color: red;">Inactivo</span>
          </td>
          <td>
            <i data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="editarRedConocimiento(RedConocimiento)"
              class="fa-solid fa-pen fa-lg" style="color: #000000;"></i>
          </td>
          <td>
            <label class="switch">
              <input @click="editEstados(RedConocimiento)" v-model="RedConocimiento.estado"
                :checked="RedConocimiento.estado" type="checkbox" class="checkbox">
              <div class="slider"></div>
            </label>
          </td>
        </tr>
      </tbody>


    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";
import { useRedConocimientoStore } from "../almacenaje/redConocimiento.js"
import { useAdministradorStore} from "../almacenaje/login.js";


// Definir RedActivos como una referencia
const RedActivos = ref([]);

//variable store login
const useAdministrador = useAdministradorStore();
//variable store usuario
const useRedConocimiento = useRedConocimientoStore()

//variables modal agregar
let nombre = ref("");
let codigo = ref("");
let estado = ref(true);

let redConocimientoSeleccionada = ref(null)

//variables modal editar
let Editnombre = ref("")
let Editcodigo = ref("")
let editEstado = ref(true)

let redConocimientoActivas = ref([])

async function guardar() {
  // Realizar validaciones
  if (
    !nombre.value ||
    !codigo.value

  ) {
    // Mostrar una alerta temporal de error en caso de campos vacíos
    Swal.fire({
      icon: "error",
      tittle: "error",
      text: "por favor, completa todos los campos."
    })
    return;
  }


  let r = await useRedConocimiento.addRedConocimiento({
    nombre: nombre.value,
    codigo: codigo.value,
    estado : estado.value

  });
  await lisRedConocimiento();
  // Mostrar una alerta temporal de éxito
  Swal.fire({
    icon: "success",
    tittle: "exito",
    text: "los datos se agregaron con exito",
  }).then((result) => {
    if (result.isConfirmed) {
      const agregarRedConocimientoModal = document.getElementById("agregarRedConocimiento")
      const modalRedconocmientoInstance = bootstrap.Modal.getInstance(agregarRedConocimientoModal)
      modalRedconocmientoInstance.hide()
    }
  })
  // Limpiar los campos después de agregar los datos
  limpiarInputs()
}
// funcion para editar datos
let editRed = ref(null)

function editarRedConocimiento(redConocimiento) {

  editRed.value = redConocimiento;
  Editnombre.value = redConocimiento.nombre;
  Editcodigo.value = redConocimiento.codigo;
  editEstado.value = redConocimiento.estado
}



// Función para listar red de conocimiento
async function lisRedConocimiento() {
  console.log(useAdministrador.token);
  let redConocimient = await useRedConocimiento.getRedConocimiento(useAdministrador.token);
  redConocimientoActivas.value = redConocimient.data.redesConocimientos;
  console.log(redConocimientoActivas.value);
}

// Función para editar el conductor seleccionado
async function actualizarRedEditado(id) {
  try {
    // Validar si los campos están vacíos o contienen solo espacios en blanco
    if (!Editnombre.value.trim() || !Editcodigo.value.trim()) {
      // Mostrar un mensaje de error si algún campo está vacío o contiene solo espacios en blanco
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa todos los campos de edición con datos válidos.",
      });
      return;
    }
    await useRedConocimiento.updateRedConocimiento(id, {
      nombre: Editnombre.value,
      codigo: Editcodigo.value,
      estado : editEstado.value

    });
    // Cerrar el modal manualmente
    const editarRedConocimientoModal = document.getElementById("staticBackdrop");
    const modalRedconocmientoInstance = bootstrap.Modal.getInstance(editarRedConocimientoModal)
    modalRedconocmientoInstance.hide()
    // Actualizar la lista de buses en la tabla.
    await lisRedConocimiento()
    // Mostrar un mensaje de éxito.
    Swal.fire({
      icon: "success",
      tittle: "exito",
      text: "los datos se editaron con exito",

    })

  } catch (error) {
    console.error(error)
    // Mostrar un mensaje de error en caso de fallo.
    alert(
      "hubo un error al actualizar la red de conocimiento. por favor, intentalo nuevamente"
    )
  }
}

async function editEstados(redConocimientoActivas) {
  try {
    if (redConocimientoActivas.estado === true) {
      await useRedConocimiento.putRedConocimiento(redConocimientoActivas._id, false)
    } else {
      await useRedConocimiento.putRedConocimiento(redConocimientoActivas._id, true)
    }
  } catch (error) {
    console.error('error en editar estado', error)
  }
}

function limpiarInputs() {
  nombre.value = "",
    codigo.value = "",
    estado.value = true

  redConocimientoSeleccionada.value = null
}

onMounted(async () => {
  await lisRedConocimiento()

})
</script>

<style>

</style>