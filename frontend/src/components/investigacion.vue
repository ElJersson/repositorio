<template>
    <div class="container" style="background-color: #f6f6f6; border-radius: 10px; top: 200px; position: absolute; overflow-y: auto; max-height: 500px;">  
        <h1 style="text-align: center; margin-top: 10px; " class="letra">investigacion</h1> 
            <br />
            <div class="group" style="display: flex; justify-content: space-between; align-items: center">
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#agregarInvestigacion"
                    style="width: 220px; height: 60px; ">
                    <i class="fa-solid fa-plus fa-xl" ></i> 
                </button>
    
                <div class="input-container">
                    <input placeholder="Buscar..." type="search" class="input" />
                    <!-- Tu código SVG para el icono de búsqueda -->
                </div>
            </div>
            <br />
    
            <!-- modal para agregar nuevo nivel de formacion  -->
            <div class="modal fade" id="agregarInvestigacion" tabindex="-1" aria-label="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" >
                        <div class="modal-header">
                            <h2 class="letra">nueva investigacion</h2>
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
                                            placeholder="nombre de la investigacion" /><br />

                                            <input v-model="descripcion" type="text" class="form-control"
                                            :class="{'is-invalid':  !editDescripcion}" placeholder="descripcion de la investigacion"><br>
    
                                            <input v-model="fecha" type="text" class="form-control"
                                            :class="{'is-invalid':  !editFecha}" placeholder="fecha de la investigacion"><br>

                                            <input v-model="documento" type="text" class="form-control"
                                            :class="{'is-invalid':  !editDocumento}" placeholder="documento de la investigacion"> <br>

                                           

                                        <button @click="guardar()" type="btn" class="centrar; btn btn-success">
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
                            <h4 class="letra">Actualizar investigacion</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="card-body">
                                <!-- input para cargar imagen -->
                                <input style="border-radius: 50px" type="file" class="form-control" @change="handleImageUpload"
                                    accept="image/*" /><br />
    
                                <div class="row">
                                    <div class="col-md-12">
                                        <input v-model="codigo" type="text" class="form-control"
                                            :class="{ 'is-invalid': !editCodigo }" placeholder="codigo" /><br />
    
                                        <input v-model="nombre" type="text" class="form-control"
                                            :class="{ 'is-invalid': !editNombre }"
                                            placeholder="nombre de la investigacion" /><br />

                                            <input v-model="descripcion" type="text" class="form-control"
                                            :class="{'is-invalid':  !editDescripcion}" placeholder="descripcion de la investigacion">
    
                                            <input v-model="fecha" type="text" class="form-control"
                                            :class="{'is-invalid':  !editFecha}" placeholder="fecha de la investigacion">

                                            <input v-model="documento" type="text" class="form-control"
                                            :class="{'is-invalid':  !editDocumento}" placeholder="documento de la investigacion">
                                    </div>
    
                                    <button @click="
                                        actualizarInvestigacionEditado(editInvestigacion._id)
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
                        <th>fecha</th>
                        <th>documento</th>
                        <th>programa de formacion</th>
                        <th>estado</th>
                        <th>Opciones</th>
                        <th>....</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="Investigacion in InvestigacionActivas" :key="Investigacion.id && Investigacion.id">
                        <td>{{ Investigacion.codigo }}</td>
                        <td>{{ Investigacion.nombre }}</td>
                        <td>{{ Investigacion.descripcion }}</td>
                        <td>{{ Investigacion. fecha}}</td>
                        <td>{{ Investigacion.documento }}</td>
                        
                        <td>
                            <span v-if="Investigacion.estado" style="color: green">Activo</span>
                            <span v-else style="color: red">Inactivo</span>
                        </td>
                        <td>
                            <i data-bs-toggle="modal" data-bs-target="#statickBackdrop"
                                @click="editarInvestigacion(Investigacion)" class="fa-solid fa-pen fa-lg"
                                style="color: #000000"></i>
                        </td>
                        <td>
                            <label class="switch">
                                <input @click="editEstados(Investigacion)" v-model="Investigacion.estado"
                                    :checked="Investigacion.estado" type="checkbox" class="checkbox" />
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
    import { useInvestigacionStore } from "../almacenaje/investigacion.js";
    
    const RedActivos = ref([])
    
    // Variables para agregar nivel de formación
    let codigo = ref("");
    let nombre = ref("");
    let descripcion = ref ("")
    let fecha = ref ("")
    let documento = ref ("")
    let estado = ref(true);
    
    let InvestigacionSeleccionado = ref (null)
    
    // Variables para editar nivel de formación
    let editCodigo = ref("");
    let editNombre = ref("");
    let editDescripcion = ref ("")
    let editFecha = ref  ("")
    let editDocumento = ref ("")
    let editEstado = ref(true);
    
    // Almacenamiento de niveles de formación
    let InvestigacionActivas = ref([]);
    let editInvestigacion = ref(null);
    
    const useInvestigacion = useInvestigacionStore();
    
    // Obtener y mostrar los niveles de formación
     const lisInvestigacion = async () => {
        InvestigacionActivas.value = await useInvestigacion.getInvestigacion()
        console.log(InvestigacionActivas.value);
     }
    
    // Guardar un nuevo nivel de formación
    async function guardar() {
        if (!codigo.value || !nombre.value || !descripcion || !fecha || !documento) {
          Swal.fire({
            icon: "error",
            tittle: "error",
            text: "por favor, compelta todos los campos"
          })
          return
        }
    let r = await useInvestigacion.addInvestigacion({
        codigo : codigo.value,
        nombre: nombre.value,
        descripcion : descripcion.value,
        fecha : fecha.value,
        documento : documento.value,
        estado : estado.value
    });
    
    await lisInvestigacion()
    
    Swal.fire({
        icon: "sucess",
        title: "Éxito",
        text: "Los datos se agregaron con éxito.",
      }).then((result) => {
        if (result.isConfirmed) {
            const agregarInvestigacion = document.getElementById("agregarInvestigacion")
            const modalInvestigacionInstance = bootstrap.Modal.getInstance(agregarInvestigacion)
            modalInvestigacionInstance.hide()
        }
    })
    }
    
    // Editar un nivel de formación
    function editarInvestigacion(Investigacion) {
        editInvestigacion.value = Investigacion;
        editCodigo.value = Investigacion.codigo;
        editNombre.value = Investigacion.nombre;
        editDescripcion.value = Investigacion.descripcion;
        editFecha.value = Investigacion.fecha;
        editDocumento.value = Investigacion.documento;
        editEstado.value = Investigacion.estado;
    }
    
    // Actualizar un nivel de formación editado
    async function actualizarInvestigacionEditado(id) {
        try {
            await useInvestigacion.updateInvestigacion(id, {
                codigo: editCodigo.value,
                nombre: editNombre.value,
                descripcion : editDescripcion.value,
                fecha : editFecha.value,
                documento : editDocumento.value,
                estado: editEstado.value
            });
    
            const editarInvestigacionModal = document.getElementById("statickBackdrop");
            const modalInvestigacionInstance = bootstrap.Modal.getInstance(editarInvestigacionModal);
            modalInvestigacionInstance.hide();
    
            await lisInvestigacion();
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
    async function editEstados(InvestigacionActivas) {
    try {
        if (InvestigacionActivas.estado === true) {
            await useInvestigacion.putInvestigacionEstado(InvestigacionActivas._id, false)
        } else {
            await useInvestigacion.putInvestigacionEstado(InvestigacionActivas._id, true)
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
        fecha.value = "";
        documento.value = "";
        estado.value = true;
        InvestigacionSeleccionado.value = null;
    }
    
    
    
    onMounted(async () => {
        await lisInvestigacion();
    });
</script>
    
    
<style>
    
</style>
    