<aside class="sidebar sidebar-open"> 
  <a href="index.php" class="logo">
    <img src="img/Logo.png" alt="Logo Principal">
  </a>  
  <div class="user-info">
    <h3 style="opacity: 1;"><?= $_SESSION['nombre'] ?></h3>
  </div>
  <ul class="sidebar-items-container">
    <li class="nav-item">
      <a href="perfil.php" class="nav-link">
        <!-- <i class="fas fa-user"></i> -->
        <i class="far fa-user"></i>
        <p>Mi Informacion</p> 
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <!-- <i class="fas fa-calendar-alt"></i> -->
        <i class="far fa-calendar-alt"></i>        
        <p>Mensualidades</p> 
      </a>
    </li>
    <div class="sidebar-indicator"></div>
  </ul>
</aside>

<div class="contenedor-navegacion nav-sidebar" style="position:relative">
  <div class="menu push-menu">
    <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </div>
  </div>
  <a href="index.php?log_out=true" class="enlace enlace-white">Cerrar Sesion</a>
</div>