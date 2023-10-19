<template >

<div class="container" style="background-color:  #f6f6f6; border-radius: 10px ;  box-shadow: 3px 2px 22px 1px rgb(11, 12, 11); top: 200px;position: absolute;
    /* Lowering the shadow */">
   <h1 style="text-align: center; margin-top: 10px; color: #209702;">Programas De Formación</h1> <!-- Agregamos el letrero aquí -->
 
  <br>
  <div class="group" style="display: flex; justify-content: space-between; align-items: center;">
    <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#agregarBus"
    style="width: 220px; height: 50px; background-color: rgb(25, 103, 42); display: flex; align-items: center; justify-content: center; color: #e0e0e0;"
  >
    <i class="fa-solid fa-plus fa-xl" style="color: #fffefe;"></i>
   
  </button>
  
  
      <div class="input-container">
        <input placeholder="Buscar..." type="search" class="input">
          <!-- Tu código SVG para el icono de búsqueda -->
      </div>
    </div><br>
      <div
        class="modal fade"
        id="agregarBus"
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
              <h2>Agregar programa de formacion</h2>
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
              <!-- input codigo -->
                <input
                  v-model="codigo"
                  type="text"
                  class="form-control"
                  :class="{'is-invalid' : !numBus}"
                  placeholder="codigo"
                /><br>
            
              <!-- input agregar denominacion -->
                <input
                  v-model="denominacion"
                  type="text"
                  class="form-control"
                 placeholder="Denominacion"
                  :class="{'is-invalid': !conductor}"
                /><br>

                <!-- input nivel de formacion -->
                <input
                  v-model="nivel_formacion"
                  type="text"
                  class="form-control"
                 placeholder="Nivel de formacion"
                  :class="{'is-invalid': !nivel_formacion}"
                /><br>

                <!-- input red de conocimiento -->
                <input
                  v-model="red_conocimiento"
                  type="text"
                  class="form-control"
                 placeholder="Red de conocimiento"
                  :class="{'is-invalid': !red_conocimiento}"
                /><br>
               <!-- input de version -->
               <input
                  v-model="version"
                  type="number"
                  class="form-control"
                 placeholder="Version"
                  :class="{'is-invalid': !version}"
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
  
      <!-- modal editar bus -->
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
          <h5>Codigo</h5>
                <input
                  v-model="editCodigo"
                  type="text"
                  class="form-control"
                 placeholder="codigo"
                />
              
  
              <!-- input editar denominacion -->
              <h5>Denominacion</h5>
                <input
                  v-model="editdenominacion"
                  type="text"
                  class="form-control"
                 placeholder="Denominacion"
                />
                
              <!-- input editar nivel de formacion -->
              <h5>Nivel De Formacion</h5>
                <input
                  v-model="editnivel_formacion"
                  type="text"
                  class="form-control"
                 placeholder="Nivel formacion"
                />
              
                
              <!-- input editar red de conocimiento-->
              <h5>Red De Conocimiento</h5>
                <input
                  v-model="editred_conocimiento"
                  type="text"
                  class="form-control"
                 placeholder="Red de conocimiento"
                />
              
              
            </div>


            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                @click="actualizarBusEditado(editBus._id)"
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
                <th>denominacion</th>
                <th>Estado</th>
                <th>Editar</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="bus in busesActivos" :key="bus.id && bus.id">
                <td>{{ bus.codigo }}</td>
                <td>{{ bus.denominacion }}</td>
                <td>
                  <span v-if="bus.estado" style="color: green">Activo</span>
                  <span v-else style="color: red">Inactivo</span>
                </td>
                <td>
                  <!-- boton  modal editar bus -->
                
                  <i  data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"   @click="editarBus(bus)" class="fa-solid fa-pen fa-lg" style="color: #000000;"></i>
                 
                </td><td>
                  <label class="switch">
      <input type="checkbox" class="checkbox">
      <div class="slider"></div>
  </label>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style>
   
    



  </style>
  