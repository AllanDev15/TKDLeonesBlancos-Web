<?php 
function obtenerPaginaActual() {
    $archivo  = basename($_SERVER['PHP_SELF']); // Regresa el nombre del archivo

    $pagina = str_replace(".php", "", $archivo);
    return $pagina;
}

function getMonthName($mes) {
    $meses = array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
    return $meses[$mes-1];
}
?>