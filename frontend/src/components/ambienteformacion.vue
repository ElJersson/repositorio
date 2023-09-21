<template >

    <div class="container" style="background-color:  #fefefe; border-radius: 10px ;  box-shadow: 3px 2px 22px 1px rgb(11, 12, 11); top: 200px; left: 150px;position: absolute;
    /* Lowering the shadow */">
  
  <br>
  <div class="group" style="display: flex; justify-content: space-between; align-items: center;">
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#agregarBus"
        style="width: 220px; height: 50px; background-color: rgb(35, 120, 51); display: flex; align-items: center; justify-content: center; color: #ffffff;"
      >
        <i class="fa-solid fa-plus fa-xl" style="color: #ffffff;"></i> agregar
      </button>
  
      <div class="input-container" style="background-color: black;">
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
              <h2>agregar</h2>
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
              <!-- input numero del bus -->
                <input
                  v-model="codigo"
                  type="text"
                  class="form-control"
                  :class="{'is-invalid' : !numBus}"
                  placeholder="codigo"
                /><br>
            
              <!-- input nombre -->
                <input
                  v-model="nombre"
                  type="text"
                  class="form-control"
                 placeholder="Nombre"
                  :class="{'is-invalid': !nombre}"
                /><br>
              
  
              <!-- input capacidad -->
                <input
                  v-model="centroformacion"
                  type="text"
                  class="form-control"
                  placeholder="centro formacion"
                  :class="{'is-invalid': !centroformacion}"
                /><br>
              
  
              <!-- input placa -->
                <input
                  v-model="descripcion"
                  type="text"
                  class="form-control"
                 placeholder="Descripcion"
                  :class="{'is-invalid': !descripcion}"
                /><br>
              
              <!-- input marca -->
                <input
                  type="file"
                  class="form-control"
                 placeholder="Archivos"
                  :class="{'is-invalid': !archivos}"
                /><br>
                <select :class="{'is-invalid': !rolSeleccionado}" class="form-select" id="red-conocimiento" v-model="redConocimientoSeleccionada">
                        <option v-for="red in redesConocimiento" :key="red.id" :value="red">{{ red.nombre }}</option>
                    </select> 
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
          <div class="modal-content" style="background-color:  #fdfdfd; border-radius: 10px">
            <div class="modal-header">
              <h2>editar</h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                
              ></button>
            </div>
            <div class="modal-body">
              <!-- input editar numero de bus -->
              <h5>numero de bus</h5>
                <input
                  v-model="editNumBus"
                  type="text"
                  class="form-control"
                 placeholder="numero de bus"
                  
                />
              
              <!-- input editar conductor -->
              <h5>conductor</h5>
                <input
                  v-model="editConductor"
                  type="text"
                  class="form-control"
                  placeholder="conductor"
                />
              
  
              <!-- input editar capacidad -->
          <h5>capacidad</h5>
                <input
                  v-model="editCapacidad"
                  type="text"
                  class="form-control"
                 placeholder="capacidad"
                />
              
  
              <!-- input editar placa -->
              <h5>placa</h5>
                <input
                  v-model="editPlaca"
                  type="text"
                  class="form-control"
                 placeholder="placa"
                />
              
              <!-- input editar marca -->
              <h5>marca</h5>
                <input
                  v-model="editMarca"
                  type="text"
                  class="form-control"
                 placeholder="marca"
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
    
      <div class="accordion" id="accordionExample">
    <div
      class="accordion-item"
      v-for="(item, index) in ambienteformacion"
      :key="index"
    >
      <h2 class="accordion-header" :id="'heading' + index">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + index"
          :aria-expanded="index === 0 ? 'true' : 'false'"
          :aria-controls="'collapse' + index"
        >
          <tr>
            <th>Codigo: {{ item.codigo }}</th><br>
            <th>Ambiente: {{ item.ambiente }}</th><br>
            <th>Tipo: {{ item.tipo }}</th><br>
          </tr>
        </button>
      </h2>
      <div
        :id="'collapse' + index"
        class="accordion-collapse collapse"
        :class="{ show: index === 0 }"
        :aria-labelledby="'heading' + index"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <strong>Ciudad: {{ item.ciudad }}</strong><br>
          <strong>Centro de formación: {{ item.centroFormacion }}</strong><br>
          <strong>Descripción: {{ item.descripcion }}</strong><br>
        </div>
      </div>
    </div>
  </div>
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
      background-color: #000000;
      color: #0d0c22;
      transition: .3s ease;
    }
  .input::placeholder {
   color: #9e9ea7;
  }
  
  .input:focus, input:hover {
   outline: none;
   border-color: rgba(0, 0, 0, 0.4);
   background-color: #fff;
   box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }
  
  </style>