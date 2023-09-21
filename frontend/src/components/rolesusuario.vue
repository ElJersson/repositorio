<template >

    <div class="container" style="background-color:  #ffffff; border-radius: 10px ;  box-shadow: 3px 2px 22px 1px rgb(11, 12, 11); top: 200px; left: 150px;position: absolute;
    /* Lowering the shadow */">
  
  <br>
  <div class="group" style="display: flex; justify-content: space-between; align-items: center;">
    <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#agregarBus"
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
                  v-model="editCapacidad"
                  type="text"
                  class="form-control"
                 placeholder="capacidad"
                />
              
  
              <!-- input editar denominacion -->
              <h5>Denominacion</h5>
                <input
                  v-model="editPlaca"
                  type="text"
                  class="form-control"
                 placeholder="placa"
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
  
  .checkbox:checked ~ .slider::before {
    transform: translateX(30px);
    box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
  }
  
  .checkbox:checked ~ .slider {
    background-color: #2196F3;
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
      margin-left: 800px; /* Ajusta el margen izquierdo para el espacio deseado */
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
  
  .input:focus, input:hover {
   outline: none;
   border-color: rgba(234,76,137,0.4);
   background-color: #fff;
   box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }
  
  
  
  
  
  
  
  </style>
  