<template >

<div class="container" style="background-color: #f6f6f6; border-radius: 10px; top: 200px; position: absolute; overflow-y: auto; max-height: 500px;">
    <h1 style="text-align: center; margin-top: 10px; color: #209702;">Roles De Usuario</h1> <!-- Agregamos el letrero aquí -->

  <div class="group" style="display: flex; justify-content: space-between; align-items: center;">
    <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#agregarRolUsuario"
    style="width: 220px; height: 50px; background-color:rgb(35, 113, 52); display: flex; align-items: center; justify-content: center;"
  >
    <i class="fa-solid fa-plus fa-xl" style="color: #000000; "></i>
    
  </button>
  
  
      <div class="input-container">
        <input placeholder="Buscar..." type="search" class="input">
          <!-- Tu código SVG para el icono de búsqueda -->
      </div>
    </div><br>
      <div
        class="modal fade"
        id="agregarRolUsuario"
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
              <h2>Agregar rol de usuario</h2>
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
              <h5>Codigo:</h5>
              <!-- input codigo -->
                <input
                  v-model="codigo"
                  type="text"
                  class="form-control"
                  :class="{'is-invalid' : !codigo}"
                  placeholder="codigo"
                /><br>
            
              <!-- input agregar denominacion -->
               <h5>Denominación:</h5>
                <input
                  v-model="denominacion"
                  type="text"
                  class="form-control"
                 placeholder="Denominacion"
                  :class="{'is-invalid': !denominacion}"
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
  
      <!-- modal editar rol usuario -->
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
          <div class="modal-content" style="background-color:  #e0e0e0; border-radius: 10px">
            <div class="modal-header">
              <h2>Editar rol de usuario</h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                
              ></button>
            </div>
            <div class="modal-body">
             
  
              <!-- input editar el codigo  -->
          <h5>Codigo:</h5>
                <input
                  v-model="editCodigo"
                  type="text"
                  class="form-control"
                 placeholder="Codigo"
                />
              
  
              <!-- input editar denominacion -->
              <h5>Denominación:</h5>
                <input
                  v-model="editDenominacion"
                  type="text"
                  class="form-control"
                 placeholder="Denominación"
                />
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                @click="actualizarRolUsuarioEditado(editRolUsuario._id)"
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
    
          <table class="table table-striped table-success table-hover"  >
            <thead>
              <tr>
                <th>codigo</th>
                <th>Denominacion</th>
                <th>Estado</th>
                <th>Editar</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rolUsuario in rolUsuarioActivos" :key="rolUsuario.id && rolUsuario.id">
                <td>{{ rolUsuario.codigo }}</td>
                <td>{{ rolUsuario.denominacion }}</td>
                <td>
                  <span v-if="rolUsuario.estado" style="color: green">Activo</span>
                  <span v-else style="color: red">Inactivo</span>
                </td>
                <td>
      <!-- boton modal editar usuario -->
        <i
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          @click="editarRolUsuario(rolUsuario)"
          class="fa-solid fa-pen fa-lg"
          style="color: #000000;"
        ></i>
                </td><td>
        <label class="switch">
          <input
            @click="editEstados(rolUsuario)"
            v-model="rolUsuario.estado"
            :checked="rolUsuario.estado"
            type="checkbox"
            class="checkbox"
          />
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
import { useRolUsuarioStore } from "../almacenaje/rolUsuario.js";
import { useAdministradorStore} from "../almacenaje/login.js";


//variable store login
const useAdministrador = useAdministradorStore();
//variable store rol Usuario
const useRolUsuario = useRolUsuarioStore();

//variables modal agregar
let denominacion = ref("");
let codigo = ref("");

let rolUsuarioSelecionados = ref(null);

//variables modal editar
let editDenominacion = ref("");
let editCodigo = ref("");

let rolUsuarioActivos = ref([]);


async function guardar() {
   // Realizar validaciones
  if (!denominacion.value || !codigo.value) {
    // Mostrar una alerta temporal de error en caso de campos vacíos
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, completa todos los campos.",
    });
    return;
  }

  // Verificar si el código de rol de usuario ya existe en la base de datos
  const existeRolUsuario = rolUsuarioActivos.value.some((rolUsuario) => rolUsuario.codigo === codigo.value);
  if (existeRolUsuario) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "El código de rol de usuario ya existe. Por favor, utiliza un código único.",
    });
    return;
  }

  let r = await useRolUsuario.addRolUsuario({
    denominacion: denominacion.value,
    codigo: codigo.value,

  });
  await lisRolUsuario();

  // Mostrar una alerta temporal de éxito
  Swal.fire({
    icon: "success",
    title: "Éxito",
    text: "Los datos se agregaron con éxito.",
  }).then((result) => {
    if (result.isConfirmed) {
      const agregarUsuarioModal = document.getElementById("agregarRolUsuario");
      const modalUsuarioInstance = bootstrap.Modal.getInstance(agregarUsuarioModal);
      modalUsuarioInstance.hide();
    }
  });

  // Limpiar los campos después de agregar los datos
  limpiarInputs();
}



let editRolUsuario = ref(null); // Agrega esta variable en la parte superior de tu código.
//editar rol de usuario 
function editarRolUsuario(rolUsuario) {
  editRolUsuario.value = rolUsuario;
  editDenominacion.value = rolUsuario.denominacion;
  editCodigo.value = rolUsuario.codigo;
}

// listar los roles de usuarios
const lisRolUsuario = async()=>{
  console.log(useAdministrador.token);
 let rolusuari =await useRolUsuario.getRolUsuario(useAdministrador.token);
 rolUsuarioActivos.value=rolusuari.data.rolUsuario
 console.log(rolUsuarioActivos.value);
}

// Función para editar el rol del usuario seleccionado
async function actualizarRolUsuarioEditado(id) {
  try {
    //     if (!editDenominacion.value.trim() || !editCodigo.value.trim()) {
    //   // Mostrar un mensaje de error si alguno de los campos está vacío o contiene solo espacios en blanco
    //   Swal.fire({
    //     icon: "error",
    //     title: "Error",
    //     text: "Por favor, completa todos los campos de edición con datos válidos.",
    //   });
    //   return;
    // }
    await useRolUsuario.updateRolUsuario(id, {
      denominacion: editDenominacion.value,
      codigo: editCodigo.value,

    });
    // Cerrar el modal manualmente
    const editarUsuarioModal = document.getElementById("staticBackdrop");
    const modalUsuarioInstance = bootstrap.Modal.getInstance(editarUsuarioModal);
    modalUsuarioInstance.hide();

    // Actualizar la lista de buses en la tabla.
    await lisRolUsuario();

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


async function editEstados(rolUsuarioActivos) {
  try {
    if (rolUsuarioActivos.estado === true) {
      await useRolUsuario.putEstadoRolUsuario(rolUsuarioActivos._id , false)
    } else {
      await useRolUsuario.putEstadoRolUsuario(rolUsuarioActivos._id , true)
    }
    
  } catch (error) {
    console.error('error en editar estado',error);
  }
}



function limpiarInputs() {
  denominacion.value = "";
  codigo.value = "";

  rolUsuarioSelecionados.value = null;
}

onMounted(async () => {
  await lisRolUsuario();
}); 

</script>
  
  <style>
   
  
  
  
  
  
  
  </style>
  