<template >

<div class="container" style="background-color: #f6f6f6; border-radius: 10px; top: 200px; position: absolute; overflow-y: auto; max-height: 500px;">  
    <h1 style="text-align: center; margin-top: 10px; color: #209702;">Ambiente Formación</h1> <!-- Agregamos el letrero aquí -->

  <br>
  <div class="group" style="display: flex; justify-content: space-between; align-items: center;">
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#agregarAmbiente"
        style="width: 220px; height: 50px; background-color: rgb(35, 120, 51); display: flex; align-items: center; justify-content: center; color: #ffffff;"
      >
        <i class="fa-solid fa-plus fa-xl" style="color: #ffffff;"></i>
      </button>
  
      <div class="input-container" >
        <input v-model="filtro" placeholder="Buscar..." type="search" class="input">

          <!-- Tu código SVG para el icono de búsqueda -->
      </div>
    </div><br>
      <div
        class="modal fade"
        id="agregarAmbiente"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div
            class="modal-content"
            style="background-color:  #ffffff; border-radius: 10px"
          >
            <div class="modal-header">
              <h2>Agregar</h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <div class="card-body">
              <!-- input tipo del ambiente de formación -->
                <input
                  v-model="tipo"
                  type="text"
                  class="form-control"
                  :class="{'is-invalid' : !tipo}"
                  placeholder="Tipo De Ambiente"
                /><br>
            
              <!-- input numAmbiente -->
                <input
                  v-model="numAmbiente"
                  type="number"
                  class="form-control"
                 placeholder="Numero De Ambiente"
                  :class="{'is-invalid': !numAmbiente}"
                /><br>
              
  
   <!-- input Centro Formacion -->
<select :class="{'is-invalid': !centroFormaciones}" class="form-select" id="red-conocimiento" v-model="centroFormaciones">
<option value="" disabled selected>Seleccione Centro Formación</option>
<option v-for="centroformacion in centroFormacionActivos" :key="centroformacion.id" :value="centroformacion">{{ centroformacion.nombre }}</option>
</select><br>
              
  
              <!-- input Descripcion -->
                <input
                  v-model="descripcion"
                  type="text"
                  class="form-control"
                 placeholder="Descripcion"
                  :class="{'is-invalid': !descripcion}"
                /><br>
              
              <!-- input Documento -->
                <input
                  type="file"
                  class="form-control"
                 placeholder="Archivos"
                /><br>

              <!-- boton guardar -->
              <button
                @click="guardar()"
                type="button"
                class="centrar; btn btn-success"
                
              >
                Guardar
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- modal editar Ambiente de Formacion -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" style="background-color:  #fdfdfd; border-radius: 10px">
            <div class="modal-header">
              <h2>Editar Ambiente De formación</h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                
              ></button>
            </div>
            <div class="modal-body">
               <!-- input tipo del ambiente de formación -->
                <input
                  v-model="editTipo"
                  type="text"
                  class="form-control"
                  :class="{'is-invalid' : !editTipo}"
                  placeholder="Tipo De Ambiente"
                /><br>
            
              <!-- input numAmbiente -->
                <input
                  v-model="editNumAmbiente"
                  type="number"
                  class="form-control"
                 placeholder="Numero De Ambiente"
                  :class="{'is-invalid': !editNumAmbiente}"
                /><br>
              
  
   <!-- input Centro Formacion -->
<select :class="{'is-invalid': !editCentroFormacion}" class="form-select" id="red-conocimie" v-model="editCentroFormacion">
<option value="" disabled selected>Seleccione Centro Formación </option>
<option v-for="centroformacion in centroFormacionActivos" :key="centroformacion.id" :value="centroformacion">{{ centroformacion.nombre }}</option>
</select><br>
              
  
              <!-- input Descripcion -->
                <input
                  v-model="editDescripcion"
                  type="text"
                  class="form-control"
                 placeholder="Descripcion"
                  :class="{'is-invalid': !editDescripcion}"
                /><br>
              

          
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="centrar; btn btn-success"
                @click="actualizarAmbienteEditado(editAmbiente._id)"
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
    
    <div class="accordion" id="accordionExample" style="overflow-y: auto; max-height: 300px;">
      <div v-for="(ambiente, index) in ambienteformacionActivos" :key="ambiente.id && ambiente.id" class="accordion-item">
    <h2 class="accordion-header" :id="'heading' + index">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#collapse' + index"
        :aria-expanded="activeAccordion === index ? 'true' : 'false'"
        @click="toggleAccordion(index)"
      >
        <tr>
          <th>Ambiente: {{ ambiente.numAmbiente }}</th><br>
          <strong>Tipo: {{ ambiente.tipo }}</strong><br>

        </tr>
      </button>
      <div class="btn-group" role="group">
        <button @click="editarAmbiente(ambiente)" type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-edit" ></i> Editar</button>
        <button @click="eliminarAmbiente(ambiente.id)" type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i> Activo</button>
      </div>
    </h2>
    <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ show: activeAccordion === index }" :aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Tipo: {{ ambiente.tipo }}</strong><br>
        <strong>Centro de formación: {{ ambiente.centroFormacion.nombre }}</strong><br>
        <strong>Descripción: {{ ambiente.descripcion }}</strong><br>
      </div>
    </div>
  </div>
</div>
  </div>
    
</template>
  
<script setup>
import { ref, onMounted , computed } from "vue";
import Swal from "sweetalert2";
import { useAmbienteFormacionStore } from "../almacenaje/ambienteformacion.js";
import { useCentroFormacionStore } from "../almacenaje/centroFormacion.js";


//variable store Centro formacion
const useCentroFormacion = useCentroFormacionStore();

//variable store Ambiente
const useAmbienteFormacion = useAmbienteFormacionStore();

//variables modal agregar
let numAmbiente = ref('');
let centroFormaciones = ref('');
let tipo = ref("");
let descripcion = ref("");
let estado = ref(true);

let ambienteformacionSeleccionado = ref(null);

let filtro = ref('');

const ambientesFiltrados = computed(() => {
  const filtroLowerCase = filtro.value.toLowerCase();
  return ambienteformacionActivos.value.filter((ambiente) => {
    // Filtrar por numAmbiente, tipo, descripción o cualquier otro campo que desees
    return (
      ambiente.numAmbiente.toString().includes(filtroLowerCase) ||
      ambiente.tipo.toLowerCase().includes(filtroLowerCase) ||
      ambiente.descripcion.toLowerCase().includes(filtroLowerCase)
    );
  });
});

//variables modal editar
let editNumAmbiente = ref('');
let editCentroFormacion = ref('');
let editTipo = ref("");
let editDescripcion = ref("");
let editEstado = ref(true);

// array con todos los ambientes
let ambienteformacionActivos = ref([]);

// array con todos los Centros de Formación
let centroFormacionActivos = ref([]);

// Variable para rastrear el acordeón activo
let activeAccordion = null;

// Función para abrir/cerrar un acordeón de forma individual
function toggleAccordion(index) {
  if (activeAccordion === index) {
    // Si el mismo acordeón está abierto, ciérralo
    activeAccordion = null;
  } else {
    // Si se hace clic en otro acordeón, ábrelo y cierra el anterior
    activeAccordion = index;
  }
}

async function guardar() {
  // Realizar validaciones
  if (
    !numAmbiente.value ||
    !centroFormaciones.value ||
    !tipo.value ||
    !descripcion.value ||
    !estado.value 
  ) {
    // Mostrar una alerta temporal de error en caso de campos vacíos
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, completa todos los campos.",
    });
    return;
  }

  let r = await useAmbienteFormacion.addAmbienteFormacion({
    numAmbiente: numAmbiente.value,
    centroFormacion: centroFormaciones.value,
    tipo: tipo.value,
    descripcion: descripcion.value,
    estado: estado.value,

  });
  await lisAmbiente();

  // Mostrar una alerta temporal de éxito
  Swal.fire({
    icon: "success",
    title: "Éxito",
    text: "Los datos se agregaron con éxito.",
  }).then((result) => {
    if (result.isConfirmed) {
      const agregarUsuarioModal = document.getElementById("agregarAmbiente");
      const modalUsuarioInstance = bootstrap.Modal.getInstance(agregarUsuarioModal);
      modalUsuarioInstance.hide();
    }
  });

  // Limpiar los campos después de agregar los datos
  limpiarInputs();
}



let editAmbiente = ref(null); // Agrega esta variable en la parte superior de tu código.

function editarAmbiente(ambiente) {

  
  editAmbiente.value = ambiente;
  editNumAmbiente.value = ambiente.numAmbiente;
  editTipo.value = ambiente.tipo;
  editDescripcion.value = ambiente.descripcion;
  editEstado.value = ambiente.estado;  
  editCentroFormacion.value = ambiente.centroFormaciones;
}

// listar los ambientes 
const lisAmbiente = async()=>{
 ambienteformacionActivos.value =await useAmbienteFormacion.getAmbienteFormacion();
 console.log(ambienteformacionActivos.value);
}

// listar los Centro Formación 
const lisCentroformacion = async()=>{
 centroFormacionActivos.value =await useCentroFormacion.getCentrosFormacion();
 console.log(centroFormacionActivos.value);
}


// Función para editar el conductor seleccionado
async function actualizarAmbienteEditado(id) {
  try {
    await useAmbienteFormacion.updateAmbienteFormacion(id, {
      numAmbiente: editNumAmbiente.value,
      tipo: editTipo.value,
      descripcion: editDescripcion.value,
      estado: editEstado.value,
      centroFormaciones: editCentroFormacion.value,

    });
    // Cerrar el modal manualmente
    const editarAmbienteModal = document.getElementById("staticBackdrop");
    const modalUsuarioInstance = bootstrap.Modal.getInstance(editarAmbienteModal);
    modalUsuarioInstance.hide();

    // Actualizar la lista de buses en la tabla.
    await lisAmbiente();

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

async function editEstados(ambienteformacionActivos) {
  try {
    if (ambienteformacionActivos.estado === true) {
      await useAmbienteFormacion.putUsuarioEstado(ambienteformacionActivos._id , false)
    } else {
      await useAmbienteFormacion.putUsuarioEstado(ambienteformacionActivos._id , true)
    }
    
  } catch (error) {
    console.error('error en editar estado',error);
  }
}




function limpiarInputs() {
  numAmbiente.value = 0;
  centroFormaciones.value = "";
  tipo.value = "";
  descripcion.value = "";
  estado.value = true;


  ambienteformacionSeleccionado.value = null;
}

onMounted(async () => {
  await lisAmbiente();
  await lisCentroformacion();
}); 

</script>
  
<style>

</style>