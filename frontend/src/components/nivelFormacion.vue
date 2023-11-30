<template>
<div class="container" style="background-color: #f6f6f6; border-radius: 10px; top: 200px; position: absolute; overflow-y: auto; max-height: 500px;">  
    <h1 style="text-align: center; margin-top: 10px; " class="letra">Nivel De Formación</h1> 
        <br />
        <div class="group" style="display: flex; justify-content: space-between; align-items: center">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#agregarNivelFormacion"
                style="width: 220px; height: 60px; ">
                <i class="fa-solid fa-plus fa-xl" style="color: #000000"></i> 
            </button>

            <div class="input-container">
                <input placeholder="Buscar..." type="search" class="input" />
                <!-- Tu código SVG para el icono de búsqueda -->
            </div>
        </div>
        <br />

        <!-- modal para agregar nuevo nivel de formacion  -->
        <div class="modal fade" id="agregarNivelFormacion" tabindex="-1" aria-label="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="background-color: #26b502; border-radius: 10px">
                    <div class="modal-header">
                        <h2>nuevo nivel formacion</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <input v-model="codigo" type="text" class="form-control"
                                        :class="{ 'is-invalid': !editCodigo }" placeholder="codigo" /><br />

                                    <input v-model="denominacion" type="text" class="form-control"
                                        :class="{ 'is-invalid': !editDenominacion }"
                                        placeholder="denominacion del programa" /><br />

                                    <button @click="guardar()" type="button" class="centrar; btn btn-success">
                                        guardar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- modal editar nivel formacion -->
        <div class="modal fabe" id="statickBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="background-color: #ffffff; border-radius: 10px">
                    <div class="modal-header">
                        <h4>nuevo nivel de formacion</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card-body">
                            <!-- input para cargar imagen -->
                            <input style="border-radius: 50px" type="file" class="form-control" @change="handleImageUpload"
                                accept="image/*" /><br />

                            <div class="row">
                                <div class="col-md-12">
                                    <input v-model="editCodigo" type="text" class="form-control"
                                        :class="{ 'is-invalid': !editCodigo }" placeholder="codigo" /><br />

                                    <input v-model="editDenominacion" type="text" class="form-control"
                                        :class="{ 'is-invalid': !editDenominacion }" placeholder="denominacion" /><br />
                                </div>

                                <button @click="
                                    actualizarNivelFormacionEditado(editNivelFormacion._id)
                                    " type="button" class="btn2" style="width: 100px">
                                    Editar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <table class="table table-striped table table-hover">
            <thead>
                <tr>
                    <th>codigo</th>
                    <th>denominacion</th>
                    <th>estado</th>
                    <th>Opciones</th>
                    <th>....</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="NivelFormacion in nivelFormacionActivas" :key="NivelFormacion.id && NivelFormacion.id">
                    <td>{{ NivelFormacion.codigo }}</td>
                    <td>{{ NivelFormacion.denominacion }}</td>
                    <td>
                        <span v-if="NivelFormacion.estado" style="color: green">Activo</span>
                        <span v-else style="color: red">Inactivo</span>
                    </td>
                    <td>
                        <i data-bs-toggle="modal" data-bs-target="#statickBackdrop"
                            @click="editarNivelFormacion(NivelFormacion)" class="fa-solid fa-pen fa-lg"
                            style="color: #000000"></i>
                    </td>
                    <td>
                        <label class="switch">
                            <input @click="editEstados(NivelFormacion)" v-model="NivelFormacion.estado"
                                :checked="NivelFormacion.estado" type="checkbox" class="checkbox" />
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
import { useNivelFormacionStore } from "../almacenaje/nivelFormacion.js";
import { useAdministradorStore} from "../almacenaje/login.js";


//variable store login
const useAdministrador = useAdministradorStore();

const RedActivos = ref([])


// Variables para agregar nivel de formación
let codigo = ref("");
let denominacion = ref("");
let estado = ref(true);

let nivelFormacionSeleccionado = ref (null)

// Variables para editar nivel de formación
let editCodigo = ref("");
let editDenominacion = ref("");
let editEstado = ref(true);

// Almacenamiento de niveles de formación
let nivelFormacionActivas = ref([]);
let editNivelFormacion = ref(null);

const useNivelFormacion = useNivelFormacionStore();

// Obtener y mostrar los niveles de formación
 const lisnivelFormacion = async () => {
    console.log(useAdministrador.token);
   let nivelFormacio= await useNivelFormacion.getNivelFormacion(useAdministrador.token) 
   nivelFormacionActivas.value =nivelFormacio.data.nivelDeFormacion;
    console.log(nivelFormacionActivas.value);
 }


// Guardar un nuevo nivel de formación
async function guardar() {
    if (!codigo.value || !denominacion.value) {
      Swal.fire({
        icon: "error",
        tittle: "error",
        text: "por favor, compelta todos los campos"
      })
      return
    }
let r = await useNivelFormacion.postNivelFormacion({
    codigo : codigo.value,
    denominacion: denominacion.value,
    estado : estado.value
});

await lisnivelFormacion()

Swal.fire({
    icon: "sucess",
    title: "Éxito",
    text: "Los datos se agregaron con éxito.",
  }).then((result) => {
    if (result.isConfirmed) {
        const agregarNivelFormacion = document.getElementById("agregarNivelFormacion")
        const modalNivelFormacionInstance = bootstrap.Modal.getInstance(agregarNivelFormacion)
        modalNivelFormacionInstance.hide()
    }
})
}

// Editar un nivel de formación
function editarNivelFormacion(nivelFormacion) {
    editNivelFormacion.value = nivelFormacion;
    editCodigo.value = nivelFormacion.codigo;
    editDenominacion.value = nivelFormacion.denominacion;
    editEstado.value = nivelFormacion.estado;
}

// Actualizar un nivel de formación editado
async function actualizarNivelFormacionEditado(id) {
    try {
        await useNivelFormacion.putNivelFormacion(id, {
            codigo: editCodigo.value,
            denominacion: editDenominacion.value,
            estado: editEstado.value
        });

        const editarNivelFormacionModal = document.getElementById("statickBackdrop");
        const modalNivelFormacionInstance = bootstrap.Modal.getInstance(editarNivelFormacionModal);
        modalNivelFormacionInstance.hide();

        await lisnivelFormacion();
   Swal.fire({
    icons: "sucess",
    tittle: "exito",
    text: "los datos se editaron con exito"
   })

    } catch (error) {
        console.error(error);
      alert(
        "hubo un error al actualizar el nivel de formacion"
      )
    }
}

// Cambiar el estado de un nivel de formación
async function editEstados(nivelFormacionActivas) {
try {
    if (nivelFormacionActivas.estado === true) {
        await useNivelFormacion.putNivelFormacionEstado(nivelFormacionActivas._id, false)
    } else {
        await useNivelFormacion.putNivelFormacionEstado(nivelFormacionActivas._id, true)
    }
} catch (error) {
    console.error('error en editar estado', error)
}
}

// Limpiar los campos de entrada
function limpiarInputs() {
    codigo.value = "";
    denominacion.value = "";
    estado.value = true;
    nivelFormacionSeleccionado.value = null;
}



onMounted(async () => {
    await lisnivelFormacion();
});
</script>


<style>

</style>
