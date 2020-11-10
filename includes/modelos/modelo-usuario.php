<?php

$accion = $_POST['accion'];

$usuario = filter_var($_POST['usuario'], FILTER_SANITIZE_STRING);
$nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
$paterno = filter_var($_POST['apPaterno'], FILTER_SANITIZE_STRING);
$materno = filter_var($_POST['apMaterno'], FILTER_SANITIZE_STRING);
$mes = filter_var($_POST['mes'], FILTER_SANITIZE_NUMBER_INT);
$año = filter_var($_POST['año'], FILTER_SANITIZE_NUMBER_INT);
$dia = filter_var($_POST['dia'], FILTER_SANITIZE_NUMBER_INT);
$cinta = filter_var($_POST['cinta'], FILTER_SANITIZE_STRING);
$grado = filter_var($_POST['grado'], FILTER_SANITIZE_STRING);
$tutor = filter_var($_POST['tutor'], FILTER_SANITIZE_STRING);
$telefono = filter_var($_POST['telefono'], FILTER_SANITIZE_STRING);
$correo = filter_var($_POST['correo'], FILTER_SANITIZE_STRING);
$password = $_POST['password'];
$id = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);

$opcionesHash = array(
  'cost' => 12
);
$hash_password = password_hash($password, PASSWORD_BCRYPT, $opcionesHash);

if ($accion === 'registro') {
  include '../funciones/connectiondb.php';

    try {
      $stmt = $con->prepare("INSERT INTO usuarios (correo, password, nombre, apPaterno, apMaterno, diaNac, mesNac, añoNac, grado, cinta, tutor, telefono) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)");
      $stmt->bind_param("sssssiiissss", $correo, $hash_password, $nombre, $paterno, $materno, $dia, $mes, $año, $grado, $cinta, $tutor, $telefono);
      $stmt->execute();

      if($stmt->affected_rows > 0) {
        $respuesta = array(
          'respuesta' => 'exito',
          'titulo' => 'Registrado',
          'texto' => 'Te has registrado correctamente',
          'tipo' => 'success'
        );
      } else {
        $respuesta = array(
          'respuesta' => 'error',
          'titulo' => 'Ha ocurrido un error',
          'texto' => 'No se pudo realizar el registro',
          'tipo' => 'error'
        );
      }
      $stmt->close();
      $con->close();
    } catch (Exception $e) {
      $respuesta = array(
        'error' => $e->getMessage()
      );
    }

    echo json_encode($respuesta);
}

if($accion === 'login') {

  // $usuario = 'Allan Atzin';

  try {
    include '../funciones/connectiondb.php';

    $stmt = $con->prepare("SELECT id_usuario, correo, password, nombre FROM usuarios WHERE correo = ?");
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $stmt->bind_result($id_usuario, $correo_usuario, $password_usuario, $nombre_usuario);
    if($stmt->affected_rows) {
    
      $existe = $stmt->fetch();

      if($existe) {
        if(password_verify($password, $password_usuario)) {
          session_start();
          $_SESSION['usuario'] = $correo_usuario;
          $_SESSION['id'] = $id_usuario;
          $_SESSION['nombre'] = $nombre_usuario;

          $respuesta = array(
            'respuesta' => 'exito'
          );
        }
        else {
          $respuesta = array(
            'respuesta' => 'error',
            'titulo' => 'Contraseña incorrecta',
            'texto' => '',
            'tipo' => 'error'
          );
        }
      }
      else {
        $respuesta = array(
          'respuesta' => 'error',
          'titulo' => 'Usuaio no encontrado',
          'texto' => 'No existe una cuenta con ese correo',
          'tipo' => 'error'
        );
      }
    }
    $stmt->close();
    $con->close();
  }
  catch (Exception $e) {
    $respuesta = array(
      'respuesta' => 'error',
      'titulo' => 'Error desconocido',
      'texto' => $e->getMessage(),
      'tipo' => 'error'
    );
  }

  echo json_encode($respuesta);

}

if($accion === 'update') {
  //echo json_encode($_POST);

  include '../funciones/connectiondb.php';

  try {
    $stmt = $con->prepare("UPDATE usuarios SET nombre=?, apPaterno=?, apMaterno=?, diaNac=?, mesNac=?, añoNac=?, grado=?, cinta=?, tutor=?, telefono=?, actualizado=NOW() WHERE id_usuario=?");
    $stmt->bind_param("sssiiissssi", $nombre, $paterno, $materno, $dia, $mes, $año, $grado, $cinta, $tutor, $telefono, $id);
    $stmt->execute();
    if($stmt->affected_rows > 0) {
      $respuesta = array(
        'respuesta' => 'exito',
        'id_actualizado' => $stmt->insert_id,
      );
    }
    else {
      $respuesta = array(
        'respuesta' => 'error',
        'error' => mysqli_error($con),
      );
    }
  } catch(Exception $e) {
    $respuesta = array(
      'error' => $e->getMessage()
    );
  }

  echo json_encode($respuesta);
}