<template >
  <div class="container" style="background-color:  #209702; border-radius: 10px ;  box-shadow: 3px 2px 22px 1px rgb(11, 12, 11); top: 200px; left: 150px;position: absolute;
  /* Lowering the shadow */">

    <br>
    <div class="group" style="display: flex; justify-content: space-between; align-items: center;">
      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#agregarRedConocimiento"
        style="width: 220px; height: 60px;background-color: rgb(255, 255, 255);">
        <i class="fa-solid fa-plus fa-xl" style="color: #000000;"></i> agregar
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
            <h2>nueva red de conocimiento</h2>
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
            <h4>Editar red de conocimiento</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card-body ">

              <div class="row">
                <div class="col-md-12">
                  <!-- input red conocimiento -->
                  <h2>nombre de red</h2>
                  <input v-model="Editnombre" type="text" class="form-control" placeholder="red conocimiento"
                    :class="{ 'is-invalid': !Editnombre }" /><br>

                  <!-- input codigo -->
                  <h2>codigo de red</h2>
                  <input v-model="Editcodigo" type="text" class="form-control" placeholder="codigo"
                    :class="{ 'is-invalid': !Editcodigo }" /><br>



                </div>

                <!-- boton guardar -->
                <button @click="actualizarRedEditado(editRed._id)" type="button" class="btn2" style="width: 100px;  ">
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
import Swal from "sweetalert2/"
import { useRedConocimientoStore } from "../almacenaje/redConocimiento.js"


// Definir RedActivos como una referencia
const RedActivos = ref([]);

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
    icon: "sucess",
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

const lisRedConocimiento = async () => {
  redConocimientoActivas.value = await useRedConocimiento.getRedConocimiento()
  console.log(redConocimientoActivas.value);
}

// Función para editar el conductor seleccionado
async function actualizarRedEditado(id) {
  try {
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
  background-color: #fff;
  transform: translateX(-30px);
  border-radius: 20px;
  transition: .3s;
  box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
}

.checkbox:checked~.slider::before {
  transform: translateX(30px);
  box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
}

.checkbox:checked~.slider {
  background-color: #2196F3;
}

.checkbox:active~.slider::before {
  transform: translate(0);
}

.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 190px;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 250px;
  /* Ajusta el ancho según tu diseño */
  margin-left: 800px;
  /* Ajusta el margen izquierdo para el espacio deseado */
}

.input {
  height: 50px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: .3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgba(234, 76, 137, 0.4);
  background-color: #fff;
  box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}
</style>