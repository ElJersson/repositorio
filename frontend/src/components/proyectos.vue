<template>
    <div class="container" style="background-color: #f6f6f6; border-radius: 10px; top: 200px; position: absolute; overflow-y: auto; max-height: 500px;">  
        <h1 style="text-align: center; margin-top: 10px; " class="letra">proyectos</h1> 
            <br />
            <div class="group" style="display: flex; justify-content: space-between; align-items: center">
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#agregarProyectos"
                    style="width: 220px; height: 60px; ">
                    <i class="fa-solid fa-plus fa-xl"></i> 
                </button>
    
                <div class="input-container">
                    <input placeholder="Buscar..." type="search" class="input" />
                    <!-- Tu código SVG para el icono de búsqueda -->
                </div>
            </div>
            <br />
    
            <!-- modal para agregar nuevo nivel de formacion  -->
            <div class="modal fade" id="agregarProyectos" tabindex="-1" aria-label="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style=" border-radius: 10px">
                        <div class="modal-header">
                            <h2>nuevo proyecto</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <input v-model="codigo" type="text" class="form-control"
                                            :class="{ 'is-invalid': !editCodigo }" placeholder="codigo" /><br />
    
                                        <input v-model="nombre" type="text" class="form-control"
                                            :class="{ 'is-invalid': !editNombre }"
                                            placeholder="nombre del proyecto" /><br />

                                            <input v-model="descripcion" type="text" class="form-control"
                                            :class="{ 'is-invalid': !editDescripcion }"
                                            placeholder="descripcion del proyecto" /><br />
    
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
                            <h4>nuevo proyecto</h4>
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
    
                                        <input v-model="editNombre" type="text" class="form-control"
                                            :class="{ 'is-invalid': !editNombre }" placeholder="nombre proyecto" /><br />

                                            <input v-model="editDescripcion" type="text" class="form-control"
                                            :class="{ 'is-invalid': !editDescripcion }" placeholder="descripcion del proyecto" /><br />
                                    </div>
    
                                    <button @click="
                                        actualizarProyectoEditado(editProyecto._id)
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
                        <th>nombre</th>
                        <th>descripcion</th>
                        <th>estado</th>
                        <th>Opciones</th>
                        <th>....</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="Proyecto in proyectosActivos" :key="Proyecto.id && Proyecto.id">
                        <td>{{ Proyecto.codigo }}</td>
                        <td>{{ Proyecto.nombre }}</td>
                        <td>{{ Proyecto.descripcion }}</td>
                        <td>
                            <span v-if="Proyecto.estado" style="color: green">Activo</span>
                            <span v-else style="color: red">Inactivo</span>
                        </td>
                        <td>
                            <i data-bs-toggle="modal" data-bs-target="#statickBackdrop"
                                @click="editarProyecto(Proyecto)" class="fa-solid fa-pen fa-lg"
                                style="color: #000000"></i>
                        </td>
                        <td>
                            <label class="switch">
                                <input @click="editEstados(Proyecto)" v-model="Proyecto.estado"
                                    :checked="Proyecto.estado" type="checkbox" class="checkbox" />
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
    import { useProyectoStore } from "../almacenaje/proyecto.js";
    
    const RedActivos = ref([])
    
    // Variables para agregar nivel de formación
    let codigo = ref("");
    let nombre = ref("");
    let descripcion = ref ("")
    let estado = ref(true);
    
    let ProyectoSeleccionado = ref (null)
    
    // Variables para editar nivel de formación
    let editCodigo = ref("");
    let editNombre = ref("");
    let editDescripcion = ref ("")
    let editEstado = ref(true);
    
    // Almacenamiento de niveles de formación
    let proyectosActivos = ref([]);
    let editProyecto = ref(null);
    
    const useProyecto = useProyectoStore();
    
    // Obtener y mostrar los niveles de formación
     const lisProyecto = async () => {
        proyectosActivos.value = await useProyecto.getProyecto()
        console.log(proyectosActivos.value);
     }
    
    // Guardar un nuevo nivel de formación
    async function guardar() {
        if (!codigo.value || !nombre.value || !descripcion.value) {
          Swal.fire({
            icon: "error",
            tittle: "error",
            text: "por favor, compelta todos los campos"
          })
          return
        }
    let r = await useProyecto.addProyecto({
        codigo : codigo.value,
        nombre: nombre.value,
        descripcion: descripcion.value,
        estado : estado.value
    });
    
    await lisProyecto()
    
    Swal.fire({
        icon: "sucess",
        title: "Éxito",
        text: "Los datos se agregaron con éxito.",
      }).then((result) => {
        if (result.isConfirmed) {
            const agregarProyectos = document.getElementById("agregarProyectos")
            const modalProyectoInstance = bootstrap.Modal.getInstance(agregarProyectos)
            modalProyectoInstance.hide()
        }
    })
    }
    
    // Editar un nivel de formación
    function editarProyecto(Proyecto) {
        editProyecto.value = Proyecto;
        editCodigo.value = Proyecto.codigo;
        editNombre.value = Proyecto.nombre;
        editDescripcion.value = Proyecto.descripcion;
        editEstado.value = Proyecto.estado;
    }
    
    // Actualizar un nivel de formación editado
    async function actualizarProyectoEditado(id) {
        try {
            await useProyecto.updateProyecto(id, {
                codigo: editCodigo.value,
                nombre: editNombre.value,
                descripcion: editDescripcion.value,
                estado: editEstado.value
            });
    
            const editarProyectoModal = document.getElementById("statickBackdrop");
            const modalProyectoInstance = bootstrap.Modal.getInstance(editarProyectoModal);
            modalProyectoInstance.hide();
    
            await lisProyecto();
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
    async function editEstados(proyectosActivos) {
    try {
        if (proyectosActivos.estado === true) {
            await useProyecto.putProyectoEstado(proyectosActivos._id, false)
        } else {
            await useProyecto.putProyectoEstado(proyectosActivos._id, true)
        }
    } catch (error) {
        console.error('error en editar estado', error)
    }
    }
    
    // Limpiar los campos de entrada
    function limpiarInputs() {
        codigo.value = "";
        nombre.value = "";
        descripcion.value = "";
        estado.value = true;
        ProyectoSeleccionado.value = null;
    }
    
    
    
    onMounted(async () => {
        await lisProyecto();
    });
</script>
    
    
<style>
    
 </style>
    