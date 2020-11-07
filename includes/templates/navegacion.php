<?php $login = $_GET['login']; ?>

<div class="contenedor-navegacion" style="position:relative"> 
    <a href="index.php" class="logo">
        <img src="img/Logo.png" alt="Logo Principal">
    </a>

    <?php if($paginaActual === 'index'): ?>
    <nav class="navegacion" style="display: none;">
      <a href="index.php">Inicio</a>
      <a href="nosotros.php">Nosotros</a>
      <a href="#">Contacto</a>
      <div class="indicator"></div>
    </nav>

    <p id="<?php echo (isset($_SESSION['id'])) ? 'perfil' : 'cuenta' ?>" class="boton cuenta">
        <?php echo (isset($_SESSION['id'])) ? ($_SESSION['nombre']) : 'Mi Cuenta' ?> 
    </p>
    <div class="menu">
        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <?php endif; ?>
</div>

<?php 
if(isset($login)) {
    $loginStyle = "style='visibility: visible; opacity: 1;'";
    $modalStyle = "style='display: block;'";
} else {
    $loginStyle = "";
    $modalStyle = "style='display: none;'";
}
?>

<div class="login" <?= $loginStyle ?>>
    <div class="arrow"></div>
    <img src="img/Logo.png" alt="Logo">
    <h3>Bienvenido</h3>
    <form class="form-login">
        <div class="campo">
            <i class="fas fa-envelope"></i>
            <input type="text" name="usuario" id="usuario" class="input" required>
            <label for="usuario">Usuario</label>
            <i class="far fa-times-circle"></i>
            <i class="far fa-check-circle icon-correcto"></i>
        </div>
        <div class="campo">
            <i class="fas fa-lock"></i>            
            <input type="password" name="password" id="password" class="input" required>
            <label for="password">Contraseña</label>
            <i class="far fa-times-circle"></i>
            <i class="far fa-check-circle icon-correcto"></i>
        </div>
        <a href="#" class="enlace-login">Olvidaste tu contraseña?</a>
        <input type="hidden" name="accion" value="login">
        <input type="submit" value="Ingresar" class="boton btn-round btn-primary-red">
        <a href="registro.php" class="boton btn-round btn-secondary-red">Registrate</a>
    </form>
</div>

<div class="opciones-cuenta" style="display:none; opacity:0">
    <ul>
        <li><a href="perfil.php">Mi Perfil</a></li>
        <li><a href="index.php?log_out=true">Cerrar Sesion</a></li>
    </ul>
</div>

<div class="modal" <?= $modalStyle ?>></div>

<div class="container-loader" style="display: none; opacity:0">
    <div class="loader" style="display: none;"></div>
  </div>
