<?php include 'includes/funciones/funciones.php' ?>

<!doctype html>
<html class="no-js" lang="es">

<head>
  <meta charset="utf-8">
  <title>TKD Leones Blancos</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->
  <?php 
  $paginaActual = obtenerPaginaActual();
  if($paginaActual == 'index'): ?>
    <link rel="stylesheet" href="css/leaflet.css">
    <link rel="stylesheet" href="css/jquery.bxslider.css">
  <?php endif; ?>

  
  <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
  <link rel="stylesheet" href="css/all.min.css">
  <link rel="stylesheet" href="css/normalize.css">  
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <link rel="stylesheet" href="node_modules/sweetalert2/dist/sweetalert2.min.css">
  <link rel="stylesheet" href="css/main.css">
  <?php if($paginaActual == 'perfil'): ?>
  <link rel="stylesheet" href="css/perfil.css">
  <?php endif; ?>

  <meta name="theme-color" content="#fafafa">
</head>

<body id="<?=$paginaActual?>">

