<?php
require_once(__DIR__ . '/../php/bootstrap.php');
require_once(__DIR__ . '/../clases/app.php');
include_once(__DIR__ . '/../clases/repositorioSQL.php');

$db = new RepositorioSQL();
$app = new App();

$origin = '*';
if ($_ENV['VITE_DOMAIN'] != '') {
  $origin = $_ENV['VITE_DOMAIN'];
}

header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

$response_array = [
  'success' => false,
  'msg_success' => '',
  'content' => [],
  'errors' => []
];

$require = json_decode(file_get_contents('php://input'));
$recaptcha = $app->verifyRecaptcha($require->recaptchaToken); // obtiene resultado de la verificacion recaptcha

$errors_form = $app->validateForm($recaptcha, $require); // obtiene errores de la validacion de formulario

if (count($errors_form) > 0) {
  $response_array['errors'] = $errors_form;
  echo json_encode($response_array);
  exit;
}

try {

  //grabamos en la base de datos y obtenemos el email destino de la consulta
  $db->getRepositorioContacts()->saveInBDD($require);

  // Enviamos los correos al usuario y al administrador del sitio
  $sendClient = $app->sendEmail('Cliente', 'Contacto Cliente', $require, $_ENV['EMAIL_RECIPENT']);
  $sendUser = $app->sendEmail('Usuario', 'Contacto Usuario', $require, $_ENV['EMAIL_RECIPENT']);

  if ($sendClient && $sendUser) {

    $response_array = [
      'success' => true,
      'msg_success' => 'Envio exitoso, nos pondremos en contacto con vos.',
      'errors' => []
    ];

    echo json_encode($response_array);
    exit;
  } else {
    array_push($response_array['errors'], '1-Ocurrió un error al enviar la consulta, por favor intente nuevamente o si prefiere contacte a ' . $_ENV['EMAIL_RECIPENT']);

    echo json_encode($response_array);
    exit;
  }
} catch (\Throwable $th) {

  array_push($response_array['errors'], '2-Ocurrió un error al enviar la consulta, por favor intente nuevamente o si prefiere contacte a ' . $_ENV['EMAIL_RECIPENT']);

  echo json_encode($response_array);
  exit;
}
