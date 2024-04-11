<?php

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$response = $_POST['g-recaptcha-response'];
$secret = "6LfSaKwpAAAAAIy1Q3WfPgE61Qe8bYb4IeTzYpiv";

$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response";
$response = file_get_contents($url);

$data = json_decode($response, true);

if ($data['success']) {
  // El usuario es humano.
  // Enviar correo electrónico o guardar datos en la base de datos.
  echo "<p>¡Gracias por contactarnos! Tu mensaje ha sido enviado.</p>";
} else {
  // El usuario es un bot.
  echo "<p>Error: Parece que eres un bot. Inténtalo de nuevo más tarde.</p>";
}

?>