<template >


<div class="container" style="background-color: #f6f6f6; border-radius: 10px; top: 200px; position: absolute; overflow-y: auto; max-height: 500px;">
  <h1 style="text-align: center; margin-top: 10px; color: #209702;">Usuarios</h1> <!-- Agregamos el letrero aquí -->
  <div class="group" style="display: flex; justify-content: space-between; align-items: center;">
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#agregarUsuario"
        style="width: 220px; height: 50px; background-color: rgb(26, 98, 46); display: flex; align-items: center; justify-content: center;"
      >
        <i class="fa-solid fa-plus fa-xl" style="color: #ffffff;" ></i>
      </button>
  
      <div class="input-container">
        <input
  placeholder="Buscar..."
  type="search"
  class="input"
  v-model="searchTerm" 
/>

          <!-- Tu código SVG para el icono de búsqueda -->
      </div>
    </div><br>
    <div class="modal fade" id="agregarUsuario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="background-color: #ffffff; border-radius: 10px">
            <div class="modal-header">
                <h6>Nuevo usuario</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card-body ">
                  <div class="image-preview">
                    <img :src="imageUrl || './users.png'" class="preview-image">
        </div>
                   <!-- Input para cargar imagen -->
    <!-- Contenedor del botón personalizado -->
<div class="file-input-container">
  <label for="file-input" class="custom-file-input-label">
    <i class="fas fa-plus"></i> Agregar Imagen
  </label>
  <input
    id="file-input"
    type="file"
    class="form-control file-input"
    @change="handleImageUpload"
    accept="image/*"
  />
</div>
      
                    <div class="row">
                        <div class="col-md-6">
                            <!-- input nombre -->
                            <input v-model="nombre" type="text" class="form-control" :class="{'is-invalid': !nombre}" placeholder="Nombres" /><br>
                            <!-- input apellidos -->
                            <input v-model="apellidos" type="text" class="form-control" placeholder="Apellidos" :class="{'is-invalid': !apellidos}" /><br>
                            <!-- input identificacion -->
                            <input v-model="cc" type="number" class="form-control" placeholder="Numero de identificacion" :class="{'is-invalid': !cc}" /><br>
                            <!-- input direccion  -->
                            <input v-model="direccion" type="text" class="form-control" placeholder="Direccion" :class="{'is-invalid': !direccion}" /><br>
                           
                            <!-- input redes de conocimiento -->
                            <!-- <select :class="{'is-invalid': !rolSeleccionado}" class="form-select" id="red-conocimiento" v-model="redConocimientoSeleccionada">
                            <option v-for="red in redesConocimiento" :key="red.id" :value="red">{{ red.nombre }}</option>
                            </select>  -->
                            </div>
                            <div class="col-md-6">
                               <!-- input telefono -->
                            <input v-model="telefono" type="number" class="form-control" placeholder="Telefono" :class="{'is-invalid': !telefono}" /><br>
                           
                            <!-- input correo -->
                            <input v-model="email" type="text" class="form-control" placeholder="Correo electronico" :class="{'is-invalid': !email}" /><br>
                            <!-- contraseña -->
                            <input v-model="password" type="text" class="form-control" placeholder="Contraseña" :class="{'is-invalid': !password}" /><br>
                            <!-- perfil profecional  -->
                            <input v-model="perfilProfesional" type="text" class="form-control" placeholder="Perfil profesional" :class="{'is-invalid': !perfilProfesional}" /><br>
                            <!-- input curriculum  -->
                          
                   
                   
                   </div>
                   <label>  <h6>Curriculum</h6>
                            <input type="file" class="form-control" id="archivo"  @change="subirArchivo" /></label>
                   <label> Rol:
                    <!-- boton rol -->
                            <!-- input rolusuario -->
                            <select :class="{'is-invalid': !rol}" class="form-select" id="red-conocimiento" v-model="rol">
                            <option value="" disabled selected>Seleccione El Rol</option>
                            <option v-for="rolusuario in RolusuariosActivos" :key="rolusuario._id" :value="rolusuario._id">{{ rolusuario.denominacion }}</option>
                            </select><br></label>
                 
                </div>  <br>
                <div v-if="loading" class="loading-spinner" style="position: relative;">
      <!-- Agrega aquí tu indicador de carga, por ejemplo, un spinner -->
      Cargando</div>
                <!-- boton guardar -->
<button @click="guardar" type="button" class="btn" style="width: 100px;" :disabled="loading">
  {{ loading ? 'Cargando...' : 'Guardar' }}
</button> </div>
            </div>
        </div>
    </div>
</div>

     <!-- Editar usuario -->
<div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="background-color: #ffffff; border-radius: 10px">
            <div class="modal-header">
                <h4>Editar usuario</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card-body ">
                <div class="image-preview">
                    <img :src="imageUrl || 'users.png'" class="preview-image"></div>
                   <!-- Input para cargar imagen -->
          
<div class="file-input-container">
  <label for="file-input" class="custom-file-input-label">
    <i class="fas fa-plus"></i> Agregar Imagen
  </label>
  <input
    id="file-input"
    type="file"
    class="form-control file-input"
    @change="handleImageUpload"
    accept="image/*"
  />
</div>
      
                    <div class="row">
                        <div class="col-md-6">
                            <!-- input nombre -->
                            <input v-model="editNombre" type="text" class="form-control" :class="{'is-invalid': !editNombre}" placeholder="Nombres" /><br>
                            <!-- input apellidos -->
                            <input v-model="editApellidos" type="text" class="form-control" placeholder="Apellidos" :class="{'is-invalid': !editApellidos}" /><br>
                     
                            <h6>Telefono:</h6>
                            <!-- input telefono -->
                            <input v-model="editTelefono" type="text" class="form-control" placeholder="Telefono" :class="{'is-invalid': !editTelefono}" /><br>
                            <!-- input redes de conocimiento -->
                            <!-- <select :class="{'is-invalid': !rolSeleccionado}" class="form-select" id="red-conocimiento" v-model="redConocimientoSeleccionada">
                            <option v-for="red in redesConocimiento" :key="red.id" :value="red">{{ red.nombre }}</option>
                            </select>  -->
                            </div>
                            <div class="col-md-6">
          
                            <!-- perfil profecional  -->
                            <input v-model="editperfilProfesional" type="text" class="form-control" placeholder="Perfil profesional" :class="{'is-invalid': !editperfilProfesional}" /><br>
                           
                            <input class="form-control"  type="file"><br>
                       
                   
                    <!-- boton rol -->
                    <h6>Rol</h6>
                            <!-- input editar rolusuario -->
                            <select :class="{'is-invalid': !editRol}" class="form-select" id="red-conocimiento" v-model="editRol">
                            <option value="" disabled selected>Seleccione El Rol</option>
                            <option v-for="rolusuario in RolusuariosActivos" :key="rolusuario.id" :value="rolusuario._id">{{ rolusuario.denominacion }}</option>
                            </select><br>                     <!-- boton guardar -->
                     <button @click="actualizarUsuarioEditado(editUsuario._id)" type="button" class="btn" style="width: 100px;  ">
                        Editar
                    </button>
                   </div>
                 
                </div> </div>
            </div>
        </div>
    </div>
</div>
<table class="table table-striped table-success table-hover">
  <thead>
    <tr>
      <th>Nombres</th>
      <th>Apellidos</th>
      <th>Rol</th>
      <!-- <th>Red de conocimiento</th> -->
      <th>Estado</th>
      <th>Editar/Usuario</th>
      <th>Editar/Estado</th>
      <th>Curriculums</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="usuario in usuariosActivos" :key="usuario.id && usuario.id">
      <td>{{ usuario.nombre }}</td>
      <td>{{ usuario.apellidos }}</td>
      <td>{{ usuario.rol.denominacion }}</td>
      <!-- <td>{{ usuario.redconocimiento }}</td> -->
      <td>
        <span v-if="usuario.estado" style="color: green">Activo</span>
        <span v-else style="color: red">Inactivo</span>
      </td>
      <td>
        <!-- boton modal editar usuario -->
        <i
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          @click="editarUsuario(usuario)"
          class="fa-solid fa-pen fa-lg"
          style="color: #000000;"
        ></i>
      </td>
      <td>
        <label class="switch">
          <input
            @click="editEstados(usuario)"
            v-model="usuario.estado"
            :checked="usuario.estado"
            type="checkbox"
            class="checkbox"
          />
          <div class="slider"></div>
        </label>
      </td>
      <td><a :href="usuario.curriculum" target="_blank">Curriculum</a></td>
    </tr>
  </tbody>
</table>

    </div>
</template>
  
<script setup>
import { ref, onMounted , computed } from "vue";
import Swal from "sweetalert2";
import { useUsuarioStore } from "../almacenaje/usuario.js";
import { useRolUsuarioStore } from "../almacenaje/rolUsuario.js";
import { useAdministradorStore} from "../almacenaje/login.js";




const imageUrl = ref('');

const upload = (event) => {
  const file = event.target.files[0];
  if (file) {
    if (file.type !== 'application/pdf') {
      // Mostrar una alerta si el archivo no es un PDF
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, selecciona un archivo PDF válido como currículum.',
      });
      event.target.value = ''; // Restablecer el valor del input de archivo para eliminar el archivo no válido
    } else {
      // Aquí puedes realizar la carga del archivo utilizando una solicitud HTTP a tu servidor
      // Asegúrate de enviar el archivo al servidor para su almacenamiento con Multer
   }
  }
};

// Función para manejar la carga de la imagen
const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imageUrl.value = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      // Mostrar una alerta si el archivo no es una imagen
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, selecciona una imagen válida.',
      });
      // Restablecer el valor del input de archivo para eliminar el archivo no válido
      event.target.value = '';
   }
 }
};

let searchTerm = ref(""); // Agrega esta línea


//variable store login
const useAdministrador = useAdministradorStore();
//variable store usuario
const useUsuario = useUsuarioStore();
//variable store rolUsuario
const useRolUsuario = useRolUsuarioStore();

//variables modal agregar
let cc = ref("");
let nombre = ref("");
let apellidos = ref("");
let password = ref("");
let direccion = ref("");
let email = ref("");
let perfilProfesional = ref("");
let curriculum = ref(null);
let rol = ref("");
let telefono = ref('');
let estado = ref(true);

let usuarioSeleccionado = ref(null);

//variables modal editar
let editNombre = ref("");
let editApellidos = ref("");
let editDireccion = ref("");
let editperfilProfesional = ref("");
let editCurriculum = ref("");
let editTelefono = ref(0);
let editEstado = ref(true);
let editRol= ref("")

//constantes loding
const loading= ref(false)
const error= ref(null)
// aray con todos los usuario
let usuariosActivos = ref([]);
// aray con todos los Roles de Usuario
let RolusuariosActivos = ref([]);

const filteredUsuarios = computed(() => {
  return usuariosActivos.value.filter((usuario) => {
    // Realiza la búsqueda en nombre y apellidos
    const searchTermLowerCase = searchTerm.value.toLowerCase();
    const nombreLowerCase = usuario.nombre.toLowerCase();
    const apellidosLowerCase = usuario.apellidos.toLowerCase();

    return (
      nombreLowerCase.includes(searchTermLowerCase) ||
      apellidosLowerCase.includes(searchTermLowerCase)
    );
  });
});

//funcion subir arrchivo
function subirArchivo(event){
  curriculum.value= event.target.files[0]
  console.log(curriculum.value);
}

async function guardar() {

  // Realizar validaciones
  if (
    !cc.value.trim() ||
    !nombre.value.trim() ||
    !apellidos.value.trim() ||
    !password.value.trim() ||
    !direccion.value.trim() ||
    !email.value.trim() ||
    !perfilProfesional.value.trim() ||
    !rol.value.trim() ||
    !telefono.value.trim() ||   
    !estado.value.trim() 
  ) {
    // Mostrar una alerta temporal de error en caso de campos vacíos
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, completa todos los campos.",
    });
    return;
  }
// Validar la longitud del numero de identidad (maximo 10 caracteres)
if (cc.value.length > 10) {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Numero de identidad invalido.",
  });
  return;
}


// Validar la longitud de la contraseña (entre 8 caracterres)
if (password.value.length < 8) {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "La contraseña debe tener mas de 8 caracteres.",
  });
  return;
}

  // Validar el formato del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, ingresa un correo electrónico válido.",
    });
    return;
  }

  // Validar la longitud del número de teléfono (entre 7 y 10 caracteres)
  if (telefono.value.length < 7 || telefono.value.length > 10) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "El número de teléfono debe tener entre 7 y 10 dígitos.",
    });
    return;
  }

  let r = await useUsuario.addUsuario({
    cc: cc.value,
    nombre: nombre.value,
    apellidos: apellidos.value,
    password: password.value,
    direccion: direccion.value,
    email: email.value,
    perfilProfesional: perfilProfesional.value,
    curriculum: curriculum.value,
    rol: rol.value,
    telefono: telefono.value,
    estado: estado.value,

  });
  await lisUsuario();

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

};




let editUsuario = ref(null); // Agrega esta variable en la parte superior de tu código.

function editarUsuario(usuario) {
  console.log(usuario);
  editUsuario.value = usuario;
  editNombre.value = usuario.nombre;
  editApellidos.value = usuario.apellidos;
  editDireccion.value = usuario.direccion;
  editperfilProfesional.value = usuario.perfilProfesional;
  editCurriculum.value = usuario.curriculum;
  editTelefono.value = usuario.telefono;
  editEstado.value = usuario.estado;
  editRol.value = usuario.rol
}

// Función para listar usuarios
async function lisUsuario() {
  console.log(useAdministrador.token);
  let usuario = await useUsuario.getUsuario(useAdministrador.token);
  usuariosActivos.value = usuario.data.usuarios;
  console.log(usuariosActivos.value);
}

// listar los roles de usuarios
const lisRolUsuario = async()=>{
 console.log(useAdministrador.token);
 let rolusuari =await useRolUsuario.getRolUsuario(useAdministrador.token);
 RolusuariosActivos.value=rolusuari.data.rolUsuario
 console.log(RolusuariosActivos.value);
}




// Función para editar el conductor seleccionado
async function actualizarUsuarioEditado(id) {
  try {

    // Validar que ningún campo edit esté vacío
    if (
      !editNombre.value.trim() ||
      !editApellidos.value.trim() ||
      !editDireccion.value.trim() ||
      !editperfilProfesional.value.trim() ||
      !editTelefono.value.trim() ||
      !editRol.value.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa todos los campos.",
      });
      return;
    }


        // Validar la longitud del número de teléfono (entre 7 y 10 caracteres)
    if (editTelefono.value.length < 7 || editTelefono.value.length > 10) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El número de teléfono debe tener entre 7 y 10 dígitos.",
      });
      return;
    }


    await useUsuario.updateUsuario(id, {
      nombre: editNombre.value,
      apellidos: editApellidos.value,
      direccion: editDireccion.value,
      perfilProfesional: editperfilProfesional.value,
      curriculum: editCurriculum.value,
      telefono: editTelefono.value,
      rol: editRol.value,
      estado: editEstado.value,

    });
    // Cerrar el modal manualmente
    const editarUsuarioModal = document.getElementById("staticBackdrop");
    const modalUsuarioInstance = bootstrap.Modal.getInstance(editarUsuarioModal);
    modalUsuarioInstance.hide();

    // Actualizar la lista de buses en la tabla.
    await lisUsuario();

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

async function editEstados(usuariosActivos) {
  try {
    if (usuariosActivos.estado === true) {
      await useUsuario.putUsuarioEstado(usuariosActivos._id , false)
    } else {
      await useUsuario.putUsuarioEstado(usuariosActivos._id , true)
    }
    
  } catch (error) {
    console.error('error en editar estado',error);
  }
};


function limpiarInputs() {
  cc.value = "";
  nombre.value = "";
  apellidos.value = "";
  password.value = "";
  direccion.value = "";
  email.value = "";
  perfilProfesional.value = "";
  curriculum.value = "";
  rol.value = 0;
  telefono.value = 0;
  estado.value = true;


  usuarioSeleccionado.value = null;
}

onMounted(async () => {
  await lisUsuario();
  await lisRolUsuario();
}); 

</script>
  
<style>
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

.file-input {
  display: none;
}

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
    background-color: #ffffff;
    transform: translateX(-30px);
    border-radius: 20px;
    transition: .3s;
    box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
  }
  
  .checkbox:checked ~ .slider::before {
    transform: translateX(30px);
    box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
  }
  
  .checkbox:checked ~ .slider {
    background-color: #1d9b1d;
  }
  
  .checkbox:active ~ .slider::before {
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
      width: 250px; /* Ajusta el ancho según tu diseño */
      margin-left: 100px; /* Ajusta el margen izquierdo para el espacio deseado */
    }
  
    .input {
      border-color:#000000;
      height: 50px;
      padding: 0 1rem;
      padding-left: 2.5rem;
      border: 2px solid transparent;
      border-radius: 8px;
      outline: none;
      color: #0d0c22;
      transition: .3s ease;
      box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
    }

  
  .input:focus, input:hover {
   outline: none;
   border-color: rgba(0, 252, 0, 0.4);
   background-color: #fff;
   box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
   }
</style>