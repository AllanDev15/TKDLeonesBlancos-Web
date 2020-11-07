<?php


session_start();
// usuario_autenticado();
// echo $_SESSION['usuario'];

if(isset($_GET['log_out'])) {
    session_destroy();
    header('Location:index.php');
}



?>


