<template >
<div class="container" style="background-color: #f6f6f6; border-radius: 10px; top: 200px; position: absolute; overflow-y: auto; max-height: 500px;">  
    <h1 style="text-align: center; margin-top: 10px; color: #209702;">Material De Formación</h1> <!-- Agregamos el letrero aquí -->

  <br>
  <div class="group" style="display: flex; justify-content: space-between; align-items: center;">
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#agregarMarterialFormacion"
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
        id="agregarMarterialFormacion"
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
              <h2>Agregar Material De Formación</h2>
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
              <!-- input nombre material de formación -->
              Nombre:
                <input
                  v-model="nombre"
                  type="text"
                  class="form-control"
                  :class="{'is-invalid' : !nombre}"
                  placeholder="Nombre"
                /><br>
            
              <!-- input descripcion -->
              Descripción:
                <input
                  v-model="descripcion"
                  type="text"
                  class="form-control"
                 placeholder="Descripción"
                  :class="{'is-invalid': !descripcion}"
                /><br>
              
  
              <!-- input Tipo -->
              Tipo:
                <input
                  v-model="tipo"
                  type="text"
                  class="form-control"
                 placeholder="Tipo"
                  :class="{'is-invalid': !tipo}"
                /><br>
                <!-- input codigo -->
                Codigo:
                <input
                  v-model="codigo"
                  type="text"
                  class="form-control"
                 placeholder="Codigo"
                  :class="{'is-invalid': !codigo}"
                /><br>
              
              <!-- input Documento -->
              Documento:
              <input type="file" class="form-control" id="archivo"  />
               <br>

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
              <h2>Editar</h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                
              ></button>
            </div>
            <div class="modal-body">
             <!-- input editar nombre material de formación -->
              Nombre:
                <input
                  v-model="editNombre"
                  type="text"
                  class="form-control"
                  :class="{'is-invalid' : !editNombre}"
                  placeholder="Tipo De Ambiente"
                /><br>
            
              <!-- input editar descripcion -->
              Descripción:
                <input
                  v-model="editDescripcion"
                  type="text"
                  class="form-control"
                 placeholder="Numero De Ambiente"
                  :class="{'is-invalid': !editDescripcion}"
                /><br>
              
  
              <!-- input editar Tipo -->
              Tipo:
                <input
                  v-model="editTipo"
                  type="text"
                  class="form-control"
                 placeholder="Descripcion"
                  :class="{'is-invalid': !editTipo}"
                /><br>
                                <!-- input Editar codigo -->
                Codigo:
                <input
                  v-model="editCodigo"
                  type="text"
                  class="form-control"
                 placeholder="Codigo"
                  :class="{'is-invalid': !editCodigo}"
                /><br>
              
              <!-- input editar Documento -->
              Documento:
              <input type="file" class="form-control" id="archivo"  />
              <br>
          
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                @click="actualizarAmbienteEditado(editMaterial._id)"
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
    
    <div class="accordion" id="accordionExample" style="overflow-y: auto; max-height: 300px;">
      <div v-for="(material, index) in materialsFiltrados" :key="material.id && material.id" class="accordion-item">
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
          <th>codigo: {{ material.codigo }}</th><br>
          <th>Nombre: {{ material.nombre }}</th><br>
        </tr>
      </button>
      <div class="btn-group" role="group">
        <button @click="editarMaterialFormacion(material)" type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-edit" ></i> Editar</button>
<button
  @click="toggleEstado(material)"
  type="button"
  class="btn btn-danger btn-sm"
  :class="{ 'text-danger': !material.estado }"
>
  <i class="fi fi-rs-settings"></i>{{ material.estado ? 'Activo' : 'Inactivo' }}
</button>    </div>
    </h2>
    <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ show: activeAccordion === index }" :aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Tipo: {{ material.tipo }}</strong><br>
        <strong>Descripción: {{ material.descripcion }}</strong><br>
      </div>
    </div>
  </div>
</div>
  </div>
    
</template>
  
<script setup>
import { ref, onMounted , computed } from "vue";
import Swal from "sweetalert2";
import { useMaterialFormacionStore } from "../almacenaje/materialFormacion.js";




//variable store Ambiente
const useMaterialFormacion = useMaterialFormacionStore();

//variables modal agregar
let nombre = ref("");
let documento = ref("");
let tipo = ref("");
let descripcion = ref("");
let codigo = ref("");
let estado = ref(true);

let materialformacionSeleccionado = ref(null);

let filtro = ref('');

const materialsFiltrados = computed(() => {
  const filtroLowerCase = filtro.value.toLowerCase();
  return materialFormacionActivos.value.filter((ambiente) => {
    // Filtrar por nombre, tipo, descripción o cualquier otro campo que desees
    return (
      ambiente.nombre.toString().includes(filtroLowerCase) ||
      ambiente.tipo.toLowerCase().includes(filtroLowerCase) ||
      ambiente.descripcion.toLowerCase().includes(filtroLowerCase)
    );
  });
});

//variables modal editar
let editNombre = ref('');
let editdocumento = ref("");
let editTipo = ref("");
let editCodigo = ref("")
let editDescripcion = ref("");
let editEstado = ref(true);

// array con todos los ambientes
let materialFormacionActivos = ref([]);

// array con todos los Centros de Formación
let documentoActivos = ref([]);

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
    !nombre.value ||
    !tipo.value ||
    !descripcion.value ||
    !codigo.value ||
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

  let r = await useMaterialFormacion.addMaterialFormacion({
    nombre: nombre.value,
    documento: documento.value,
    tipo: tipo.value,
    codigo: codigo.value,
    descripcion: descripcion.value,
    estado: estado.value,

  });
  await lisMaterialFormacion();

  // Mostrar una alerta temporal de éxito
  Swal.fire({
    icon: "success",
    title: "Éxito",
    text: "Los datos se agregaron con éxito.",
  }).then((result) => {
    if (result.isConfirmed) {
      const agregarUsuarioModal = document.getElementById("agregarMarterialFormacion");
      const modalUsuarioInstance = bootstrap.Modal.getInstance(agregarUsuarioModal);
      modalUsuarioInstance.hide();
    }
  });

  // Limpiar los campos después de agregar los datos
  limpiarInputs();
}



let editMaterial = ref(null); // Agrega esta variable en la parte superior de tu código.

function editarMaterialFormacion(material) {
  editMaterial.value = material;
  editNombre.value = material.nombre;
  editdocumento.value = material.documento; 
  editTipo.value = material.tipo;
  editCodigo.value = material.codigo;
  editDescripcion.value = material.descripcion;
  editEstado.value = material.estado;
}

// listar los ambientes 
const lisMaterialFormacion = async()=>{
  console.log(useMaterialFormacion.token);
 materialFormacionActivos.value =await useMaterialFormacion.getMaterialFormacion(useMaterialFormacion.token);
 console.log(materialFormacionActivos.value);
}




// Función para editar el conductor seleccionado
async function actualizarAmbienteEditado(id) {
  try {
    await useMaterialFormacion.updateMaterialFormacion(id, {
      nombre: editNombre.value,
      tipo: editTipo.value,
      codigo: editCodigo.value,
      descripcion: editDescripcion.value,
      estado: editEstado.value,

    });
    // Cerrar el modal manualmente
    const editarAmbienteModal = document.getElementById("staticBackdrop");
    const modalUsuarioInstance = bootstrap.Modal.getInstance(editarAmbienteModal);
    modalUsuarioInstance.hide();

    // Actualizar la lista de buses en la tabla.
    await lisMaterialFormacion();

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
function toggleEstado(material) {
  // Cambia el estado al valor inverso
  material.estado = !material.estado;

  // Llama a una función para actualizar el estado en la base de datos
  editarEstado(material);
}

async function editarEstado(material) {
  try {
    await useMaterialFormacion.putMaterialEstado(material._id, material.estado);
    // Refresca la lista de ambientes después de la actualización
    await lisMaterialFormacion();
  } catch (error) {
    console.error('Error al editar el estado', error);
    // Puedes manejar errores aquí, como mostrar un mensaje de error.
  }
}




function limpiarInputs() {
  nombre.value = "";
  codigo.value = "";
  tipo.value = "";
  descripcion.value = "";
  estado.value = true;


  materialformacionSeleccionado.value = null;
}

onMounted(async () => {
  await lisMaterialFormacion();

}); 
</script>
  
<style>

</style>