<template >
<div class="container" style="background-color: #f6f6f6; border-radius: 10px; top: 200px; position: absolute; overflow-y: auto; max-height: 500px;">
     <h1 style="text-align: center; margin-top: 10px;">Instructores</h1> <!-- Agregamos el letrero aquí -->

 <br>
 <div class="group" style="display: flex; justify-content: space-between; align-items: center;">
     <button
       type="button"
       class="btn"
       data-bs-toggle="modal"
       data-bs-target="#agregarUsuario"
       style="width: 220px; height: 50px; display: flex; align-items: center; justify-content: center;"
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
                   <img :src="imageUrl || 'users.png'" class="preview-image">
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
                           <input type="file" class="form-control" id="archivo"  /></label>
                  <label> Rol:
                   <!-- boton rol -->
                           <!-- input rolusuario -->
                           <select :class="{'is-invalid': !rol}" class="form-select" id="red-conocimiento" v-model="rol">
                           <option value="" disabled selected>Seleccione El Rol</option>
                           <option v-for="rolusuario in RolusuariosActivos" :key="rolusuario.id" :value="rolusuario">{{ rolusuario.denominacion }}</option>
                           </select><br></label>
                
               </div>  <br><!-- boton guardar -->
                  <button @click="guardar()" type="button" class="btn" style="width: 100px;  ">
                       Guardar
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
                           <!-- input rolusuario -->
                           <select :class="{'is-invalid': !editRol}" class="form-select" id="red-conocimiento" v-model="editRol">
                           <option value="" disabled selected>Seleccione El Rol</option>
                           <option v-for="rolusuario in RolusuariosActivos" :key="rolusuario.id" :value="rolusuario">{{ rolusuario.denominacion }}</option>
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
     <th>Editar</th>
     <th>Editar/Estado</th>
   </tr>
 </thead>
 <tbody>
  <tr v-for="usuario in filteredUsuarios" :key="usuario.id && usuario.id">
  <!-- Verificar si el rol del usuario contiene la palabra "Instructor" -->
  <template v-if="usuario.rol.denominacion.toLowerCase().includes('instructor')">
    <td>
      <!-- Agregar un div para el círculo de la imagen -->
      <div class="instructor-circle">
        <img :src="imageUrl || 'users.png'" class="preview-image" />
      </div>
      {{ usuario.nombre }}
    </td>
    <td>{{ usuario.apellidos }}</td>
    <td>{{ usuario.rol.denominacion }}</td>
    <td>
      <span v-if="usuario.estado" style="color: green">Activo</span>
      <span v-else style="color: red">Inactivo</span>
    </td>
    <td>
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
  </template>
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

let rolFiltro = ref("instructor");

const imageUrl = ref('');

// Función para manejar la carga de la imagen
const handleImageUpload = (event) => {
 const file = event.target.files[0];
 if (file) {
   const reader = new FileReader();
   reader.onload = (e) => {
     imageUrl.value = e.target.result;
   };
   reader.readAsDataURL(file);
 }
};

let searchTerm = ref(""); // Agrega esta línea



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
let curriculum = ref("");
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

async function guardar() {
 // Realizar validaciones
 if (
   !cc.value ||
   !nombre.value ||
   !apellidos.value ||
   !password.value ||
   !direccion.value ||
   !email.value ||
   !perfilProfesional.value ||
   !rol.value ||
   !telefono.value ||   
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

 let r = await useUsuario.addUsuario({
   cc: cc.value,
   nombre: nombre.value,
   apellidos: apellidos.value,
   password: password.value,
   direccion: direccion.value,
   email: email.value,
   perfilProfesional: perfilProfesional.value,
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
}
let editUsuario = ref(null); // Agrega esta variable en la parte superior de tu código.

function editarUsuario(usuario) {
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

// listar Usuarios 
const lisUsuario = async()=>{
usuariosActivos.value =await useUsuario.getUsuario();
console.log(usuariosActivos.value)
}

// listar Rol Usurio
const lisRolUsuario = async()=>{
RolusuariosActivos.value =await useRolUsuario.getRolUsuario();
console.log(RolusuariosActivos.value);
}

// Función para editar el conductor seleccionado
async function actualizarUsuarioEditado(id) {
 try {
   await useUsuario.updateUsuario(id, {
     nombre: editNombre.value,
     apellidos: editApellidos.value,
     direccion: editDireccion.value,
     perfilProfesional: editperfilProfesional.value,
     curriculum: editCurriculum.value,
     telefono: editTelefono.value,
     rol: editRol.value.value,
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
}

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