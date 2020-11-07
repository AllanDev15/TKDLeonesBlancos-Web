<?php include_once 'includes/funciones/validar_sesion.php'; ?>
<?php include_once 'includes/templates/header.php'; ?>
<?php include_once 'includes/funciones/connectiondb.php' ?>

<?php include_once 'includes/templates/sidebar.php' ?>

<?php
$id = $_SESSION['id'];
try {
    $sql = "SELECT correo, nombre, apPaterno, apMaterno, diaNac, mesNac, añoNac, grado, cinta, tutor, telefono FROM usuarios WHERE id_usuario = $id";
    $response = $con->query($sql);
    $usuario = $response->fetch_assoc();

    $monthName = getMonthName($usuario['mesNac']);
    
} catch (Exception $e) {
    
}
?>

<main>
  <div class="seccion-perfil">
    <div class="contenedor contenedor-perfil">
      <div>
        <h1>Mis Datos</h1>
        <button class="boton btn-18 btn-primary-blue">Editar Informacion</button>
      </div>

      <form method="POST" class="form-perfil">
        <div class="flex-start">
          <div class="campo">
            <div class="label-container">
              <label for="nombre">Nombre(s)</label>
            </div>
            <div class="input-container">
              <input type="text" name="nombre" id="nombre" class="input_perfil" required disabled
                value="<?= $usuario['nombre'] ?>">
              <i class="far fa-times-circle icon-error"></i>
              <i class="far fa-check-circle icon-correcto"></i>
            </div>
          </div>
          <div class="campo">
						<div class="label-container">
							<label for="apPaterno">Apellido paterno</label>
						</div>
            <div class="input-container">
							<input type="text" name="apPaterno" id="apPaterno" class="input_perfil" required disabled
								value="<?= $usuario['apPaterno'] ?>">
							<i class="far fa-times-circle"></i>
							<i class="far fa-check-circle icon-correcto"></i>
						</div>
          </div>
          <div class="campo">
						<div class="label-container">
							<label for="apMaterno">Apellido materno</label>
						</div>
            <div class="input-container">
							<input type="text" name="apMaterno" id="apMaterno" class="input_perfil" required disabled
								value="<?= $usuario['apMaterno'] ?>">
							<i class="far fa-times-circle"></i>
							<i class="far fa-check-circle icon-correcto"></i>
						</div>
          </div>
        </div>
        <div class="nacimiento-alumno width-50">
          <div class="flex-start">
            <div class="campo">
							<div class="label-container">
								<label for="mes">Mes</label>
							</div>
              <div class="input-container">
								<select name="mes" id="mes" class="input_perfil" disabled required>
									<option value=<?= $usuario['mesNac'] ?> disabled selected><?= $monthName ?></option>
									<option value="1">Enero</option>
									<option value="2">Febrero</option>
									<option value="3">Marzo</option>
									<option value="4">Abril</option>
									<option value="5">Mayo</option>
									<option value="6">Junio</option>
									<option value="7">Julio</option>
									<option value="8">Agosto</option>
									<option value="9">Septiembre</option>
									<option value="10">Octubre</option>
									<option value="11">Noviembre</option>
									<option value="12">Diciembre</option>
								</select>								
								<i class="far fa-times-circle"></i>
								<i class="far fa-check-circle icon-correcto"></i>
							</div>
            </div>
            <div class="campo">
							<div class="label-container">
								<label for="año">Año</label>
							</div>
              <div class="input-container">
								<select name="año" id="año" class="input_perfil" required disabled>
									<option selected disabled value="<?= $usuario['añoNac'] ?>"><?= $usuario['añoNac'] ?></option>
								</select>              
								<i class="far fa-times-circle"></i>
								<i class="far fa-check-circle icon-correcto"></i>
							</div>
            </div>
            <div class="campo">
							<div class="label-container">
								<label for="dia">Dia</label>
							</div>
              <div class="input-container">
								<select name="dia" id="dia" required class="input_perfil" disabled>
									<option selected disabled value="<?= $usuario['diaNac'] ?>"><?= $usuario['diaNac'] ?></option>
								</select>
								<i class="far fa-times-circle"></i>
								<i class="far fa-check-circle icon-correcto"></i>
							</div>
            </div>
          </div>
        </div>
        <div class="flex-start width-50">
          <div class="campo">
            <div class="label-container">
              <label for="cinta">Cinta</label>
            </div>
            <div class="input-container">
              <select name="cinta" id="cinta" required class="input_perfil" disabled>
                <option value="<?= strtolower($usuario['cinta']) ?>" disabled selected><?= ucwords($usuario['cinta']) ?>
                </option>
                <option value="blanca">Blanca</option>
                <option value="naranja">Naranja</option>
                <option value="amarilla">Amarilla</option>
                <option value="verde">Verde</option>
                <option value="azul">Azul</option>
                <option value="roja">Roja</option>
                <option value="negra">Negra</option>
              </select>
              <i class="far fa-times-circle"></i>
              <i class="far fa-check-circle icon-correcto"></i>
            </div>
          </div>
          <div class="campo">
            <div class="label-container">
              <label for="grado">Grado</label>
            </div>
            <div class="input-container">
              <select name="grado" id="grado" class="input_perfil" disabled>
                <option value="1">1er Dan</option>
              </select>
              <i class="far fa-times-circle"></i>
              <i class="far fa-check-circle icon-correcto"></i>
            </div>
          </div>
        </div>
        <div class="campo width-50">
          <div class="label-container">
            <label for="tutor">Nombre completo del tutor</label>
            <label class="label-optional" style="display: none;">Opcional</label>
          </div>
          <div class="input-container">
            <input type="text" name="tutor" id="tutor" class="input_perfil" required disabled
              value="<?= $usuario['tutor'] ?>">
            <i class="far fa-times-circle"></i>
            <i class="far fa-check-circle icon-correcto"></i>
          </div>
        </div>
        <div class="campo width-33">
          <div class="label-container">
            <label for="telefono">Telefono</label>
          </div>
          <div class="input-container">
            <input type="text" name="telefono" id="telefono" class="input_perfil" required disabled
              value="<?= $usuario['telefono'] ?>">
            <i class="far fa-times-circle"></i>
            <i class="far fa-check-circle"></i>
          </div>
        </div>
        <!-- <div class="campo">
                <input type="text" name="correo" id="correo" class="input" required disabled value="<?= $usuario['correo'] ?>">
                <label for="correo">Correo</label>
                <i class="far fa-times-circle"></i>
                <i class="far fa-check-circle"></i>
            </div>
            <div class="campo">
                <input type="password" name="password" id="password_registro" class="input" required disabled>
                <label for="password">Contraseña</label>
                <i class="far fa-times-circle"></i>
                <i class="far fa-check-circle icon-correcto"></i>
            </div> -->
        <input type="hidden" name="accion" value="update" id="accion">
        <input type="hidden" name="id" value="<?= $id ?>" id="id">
        <input type="submit" value="Guardar Cambios" class="boton btn-primary-green" id="actualizarDatos" disabled>
      </form>
    </div>
  </div>
</main>


<?php include_once 'includes/templates/footer.php'; ?>