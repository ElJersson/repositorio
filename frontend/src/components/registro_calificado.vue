<template>
    
    <div class="card">
        <h1 style="text-align: center; margin-top: 10px; color: #209702;">Registro calificado</h1> 
      <div class="card-header">
        <h3 style="text-align: center; margin-top: 10px;"></h3>
        <slot name="header">
            <i class="fa-solid fa-play" style="color: #29993b;"><a style="color: black;">Titulo que otorga:</a></i> <br>
            <h7>Tecnologo en gestion contable:</h7><br><br>
            <i class="fa-solid fa-play" style="color: #29993b;"><a style="color: black;">Lugar de desarrolla de la oferta:</a></i> <br>
            <h7>Nombre del lugar:</h7><br><br>
            <i class="fa-solid fa-play" style="color: #29993b;"><a style="color: black;">Metodologia:</a></i> <br>
            <h7>Metodologia:</h7><br><br>
            <i class="fa-solid fa-play" style="color: #29993b;"><a style="color: black;">Numero de creditos:</a></i> <br>
            <h7>:</h7><br><br>
            <i class="fa-solid fa-play" style="color: #29993b;"><a style="color: black;">Codigo series:</a></i> <br>
            <h7>:</h7><br>
        </slot>
           <button class="btn">Descargar <i class="fa-solid fa-download" style="color: #ffffff;"></i></button>  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Editar</button>
      </div>
      
      <div class="card-body">
     
        <slot></slot>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar Información</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="input1">Titulo que otorga*</label>
          <input type="text" class="form-control" id="input1">
        </div>
        <div class="form-group">
          <label for="input2">Lugar de desarrollo de la oferta*</label>
          <input type="text" class="form-control" id="input2">
        </div>
        <div class="form-group">
          <label for="input3">Metodologia*</label>
          <input type="text" class="form-control" id="input3">
        </div>
        <div class="form-group">
          <label for="input4">Creditos*</label>
          <input type="text" class="form-control" id="input4">
        </div>
        <div class="form-group">
          <label for="input5">Codigo SNIES*</label>
          <input type="text" class="form-control" id="input5">
        </div>
        <div class="form-group">
          <label for="input5">Fecha</label>
          <input type="date" class="form-control" id="input5">
        </div>
        <div class="form-group">
          <label for="input5">Archivo</label>
          <input type="file" class="form-control" id="input5">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>

</div>
    </div>
</template>
  
<script>
  export default {
    name: 'Card',
  };
</script>
  
<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 15px;
  background-color: #fff;
  width: 700px;
  height: 500px;
  margin-top: -300px;
}

.card-content {
  display: flex; /* Hace que los elementos estén en línea uno al lado del otro */
  align-items: center; /* Centra verticalmente los elementos */
}

.card-header {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>