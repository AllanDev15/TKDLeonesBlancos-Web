<?php include_once 'includes/templates/header.php' ?>
<?php include_once 'includes/templates/navegacion.php' ?>

<main>
    <div class="seccion">
        <div class="encabezado-registro">
            <h1>Crea una cuenta</h1>
            <p>Si ya eres alumno o deseas serlo registrate!</p>
        </div>
        <form method="POST" class="form-usuario contenedor">
            <div class="campos-alumno form-section">
                <h4>Datos del Alumno</h4>
                <div class="campo">
                    <input type="text" name="nombre" id="nombre" class="input" required autofocus>
                    <label for="nombre">Nombre(s)</label>
                    <i class="far fa-times-circle"></i>
                    <i class="far fa-check-circle icon-correcto"></i>
                </div>
                <div class="campo">
                    <input type="text" name="apPaterno" id="apPaterno" class="input" required>
                    <label for="apPaterno">Apellido paterno</label>
                    <i class="far fa-times-circle"></i>
                    <i class="far fa-check-circle icon-correcto"></i>
                </div>
                <div class="campo">
                    <input type="text" name="apMaterno" id="apMaterno" class="input" required>
                    <label for="apMaterno">Apellido materno</label>
                    <i class="far fa-times-circle"></i>
                    <i class="far fa-check-circle icon-correcto"></i>
                </div>
                <div class="nacimiento-alumno">
                    <p>Fecha de Nacimiento</p>
                    <div class="campo">
                        <select name="mes" id="mes" class="input" required>
                            <option value="" disabled selected></option>
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
                        <label for="mes">Mes</label>
                        <i class="far fa-times-circle"></i>
                        <i class="far fa-check-circle icon-correcto"></i>
                    </div>
                    <div class="campo">
                        <select name="año" id="año" required class="input"></select>
                        <label for="año">Año</label>
                        <i class="far fa-times-circle"></i>
                        <i class="far fa-check-circle icon-correcto"></i>
                    </div>
                    <div class="campo">
                        <select name="dia" id="dia" required class="input"></select>
                        <label for="dia">Dia</label>
                        <i class="far fa-times-circle"></i>
                        <i class="far fa-check-circle icon-correcto"></i>
                    </div>                                        
                </div>
                <div class="campo">
                    <select name="cinta" id="cinta" required class="input">
                        <option value="" disabled selected></option>
                        <option value="blanca">Blanca</option>
                        <option value="naranja">Naranja</option>
                        <option value="amarilla">Amarilla</option>
                        <option value="verde">Verde</option>
                        <option value="azul">Azul</option>
                        <option value="roja">Roja</option>
                        <option value="negra">Negra</option>
                    </select>
                    <label for="cinta">Cinta</label>
                    <i class="far fa-times-circle"></i>
                    <i class="far fa-check-circle icon-correcto"></i>
                </div>
                <div class="campo">
                    <select name="grado" id="grado"  class="input">
                        <option value="1">1er Dan</option>
                    </select>
                    <label for="grado">Grado</label>
                    <i class="far fa-times-circle"></i>
                    <i class="far fa-check-circle icon-correcto"></i>
                </div>
            </div>
            <div class="campos-tutor form-section">
                <h4>Datos del Tutor</h4>
                <div class="campo">
                    <label class="label-optional" style="display: none;">Opcional</label>
                    <input type="text" name="tutor" id="tutor" class="input" required disabled>
                    <label for="tutor">Nombre completo del tutor</label>
                    <i class="far fa-times-circle"></i>
                    <i class="far fa-check-circle icon-correcto"></i>
                </div>
                <div class="campo">
                    <input type="text" name="telefono" id="telefono" class="input" required>
                    <label for="telefono">Telefono</label>
                    <i class="far fa-times-circle"></i>
                    <i class="far fa-check-circle"></i>
                </div>
            </div>
            <div class="campos-cuenta form-section">
                <h4>Cuenta</h4>
                <div class="campo">
                    <input type="text" name="correo" id="correo" class="input" required>
                    <label for="correo">Correo</label>
                    <i class="far fa-times-circle"></i>
                    <i class="far fa-check-circle"></i>
                </div>
                <div class="campo">
                    <input type="password" name="password" id="password_registro" class="input" required>
                    <label for="password">Contraseña</label>
                    <i class="far fa-times-circle"></i>
                    <i class="far fa-check-circle icon-correcto"></i>
                </div>
                <input type="hidden" name="accion" value="registro">
                <input type="submit" value="Crear cuenta" class="boton btn-primary-red" id="crearCuenta">
            </div>
        </form>
    </div>
</main>


<?php include_once 'includes/templates/footer.php' ?>
