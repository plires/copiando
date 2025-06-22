<?php
require_once(__DIR__ . '/../vendor/autoload.php');

use PHPMailer\PHPMailer\PHPMailer;

class App
{

  // public function subscribeUserInPerfit($post)
  // {

  //   if (is_object($post)) {
  //     $post = (array) $post;
  //   }

  //   if (isset($post['newsletter'])) {

  //     $perfit = new PerfitSDK\Perfit(['apiKey' => $_ENV['VITE_PERFIT_API_KEY']]);
  //     $listId = $_ENV['VITE_PERFIT_LIST'];

  //     $response = $perfit->post(
  //       '/lists/' . $listId . '/contacts',
  //       [
  //         'firstName' => $post['name'],
  //         'email' => $post['email'],
  //         'customFields' =>
  //         [
  //           [
  //             'id' => 12,
  //             'value' => $post['utm_source']
  //           ]
  //         ]
  //       ]
  //     );

  //     return $response;
  //   }

  //   return false;
  // }

  public function validEmail($email)
  {
    $mail_valid = 0;
    //compruebo unas cosas primeras 
    if ((strlen($email) >= 6) && (substr_count($email, "@") == 1) && (substr($email, 0, 1) != "@") && (substr($email, strlen($email) - 1, 1) != "@")) {
      if ((!strstr($email, "'")) && (!strstr($email, "\"")) && (!strstr($email, "\\")) && (!strstr($email, "\$")) && (!strstr($email, " "))) {
        //miro si tiene caracter . 
        if (substr_count($email, ".") >= 1) {
          //obtengo la terminacion del dominio 
          $term_dom = substr(strrchr($email, '.'), 1);
          //compruebo que la terminaci&oacute;n del dominio sea correcta 
          if (strlen($term_dom) > 1 && strlen($term_dom) < 5 && (!strstr($term_dom, "@"))) {
            //compruebo que lo de antes del dominio sea correcto 
            $before_dom = substr($email, 0, strlen($email) - strlen($term_dom) - 1);
            $caracter_ult = substr($before_dom, strlen($before_dom) - 1, 1);
            if ($caracter_ult != "@" && $caracter_ult != ".") {
              $mail_valid = 1;
            }
          }
        }
      }
    }
    if ($mail_valid)
      return 1;
    else
      return 0;
  }

  public function emptyField($data)
  {
    if ($data == '') {
      return true;
    } else {
      return false;
    }
  }

  public function validateForm($recaptcha, $require)
  {

    $errors = [];

    // Verificamos si hay errores en el formulario
    if (!$recaptcha['success']) {
      array_push($errors, 'Error Recaptcha, volvé a intentar el envio por favor.');
    }

    if (!$this->validEmail($require->email)) {
      array_push($errors, 'Ingresá un email válido.');
    }

    if ($this->emptyField($require->name)) {
      array_push($errors, 'Ingresá tu nombre.');
    }

    if ($this->emptyField($require->phone)) {
      array_push($errors, 'Ingresá un teléfono de contacto.');
    }

    if ($this->emptyField($require->comments)) {
      array_push($errors, 'Ingresá tu consulta.');
    }

    return $errors;
  }

  public function verifyRecaptcha($token)
  {

    $cu = curl_init();
    curl_setopt($cu, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
    curl_setopt($cu, CURLOPT_POST, 1);
    curl_setopt($cu, CURLOPT_POSTFIELDS, http_build_query(array('secret' => $_ENV['RECAPTCHA_SECRET_KEY_V3'], 'response' => $token)));
    curl_setopt($cu, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($cu);
    curl_close($cu);

    return $data = json_decode($response, true);
  }

  public function setEmailRecipients($objectPhpMailer, $recipient, $post, $destinationEmail)
  {

    switch ($recipient) {

      case 'Cliente':
        //ENVIOS
        $objectPhpMailer->setFrom($post['email']);
        $objectPhpMailer->addAddress($destinationEmail); //Add a recipient
        $objectPhpMailer->addReplyTo($post['email']);

        if ($_ENV['EMAIL_RECIPENT_BCC'] != '') {
          $objectPhpMailer->addBCC($_ENV['EMAIL_RECIPENT_BCC']); //Agregar copia oculta;
        }

        break;

      case 'Usuario':
        //ENVIOS
        $objectPhpMailer->setFrom($destinationEmail, $_ENV['VITE_NAME_LANDING']);
        $objectPhpMailer->addAddress($post['email']); //Add a recipient
        $objectPhpMailer->addReplyTo($_ENV['MAIL_CONTACTO'], $_ENV['VITE_NAME_LANDING']);
        break;
    }

    return $objectPhpMailer;
  }

  public function setTemplateAndEmailSubject($template, $post, $destinationEmail)
  {

    switch ($template) {

      case 'Contacto Cliente':
        $email['template'] = $this->selectEmailTemplate($post, 'to_client', $destinationEmail);
        $email['subject'] = 'Nuevo Consulta desde ' . $_ENV['VITE_NAME_LANDING'];
        break;

      case 'Contacto Usuario':
        $email['template'] = $this->selectEmailTemplate($post, 'to_user', $destinationEmail);
        $email['subject'] = $_ENV['EMAIL_SUBJECT_USUARIO'];
        break;
    }

    return $email;
  }

  public function setServerValuesToSendEmails($objectPhpMailer)
  {

    // $objectPhpMailer->SMTPDebug  = 3;
    $objectPhpMailer->Host       = $_ENV['SMTP'];
    $objectPhpMailer->SMTPAuth   = true;
    $objectPhpMailer->Username   = $_ENV['EMAIL_CLIENT'];
    $objectPhpMailer->Password   = $_ENV['PASSWORD'];
    $objectPhpMailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $objectPhpMailer->CharSet    = $_ENV['EMAIL_CHARSET'];
    $objectPhpMailer->Port       = $_ENV['EMAIL_PORT'];

    return $objectPhpMailer;
  }

  public function sendEmail($destinatario, $template, $post, $destinationEmail)
  {

    if (is_object($post)) {
      $post = (array) $post;
    }

    $objectPhpMailer = new PHPMailer();

    // Setear destinatarios
    $mail = $this->setEmailRecipients($objectPhpMailer, $destinatario, $post, $destinationEmail);

    // Setear Template y asunto de los mails
    $email_content = $this->setTemplateAndEmailSubject($template, $post, $destinationEmail);

    if ($_ENV['VITE_ENVIRONMENT'] === 'dev') {
      $mail->isSendmail();
    } else {
      $mail->isSMTP();
    }

    //SERVER SETTINGS
    $mail = $this->setServerValuesToSendEmails($objectPhpMailer);

    //CONTENIDO
    $mail->isHTML(true);
    $mail->Subject = $email_content['subject'];
    $mail->Body    = $email_content['template'];

    //send the message, check for errors
    $send = $mail->send();

    return $send;
  }

  function selectEmailTemplate($post, $to, $destinationEmail)
  {

    (isset($post['name'])) ? $name = $post['name'] : $name = null;
    (isset($post['email'])) ? $email = $post['email'] : $email = null;
    (isset($post['phone'])) ? $phone = $post['phone'] : $phone = null;
    (isset($post['comments'])) ? $comments = $post['comments'] : $comments = null;
    (isset($post['interes'])) ? $interes = $post['interes'] : $interes = null;

    if (!defined('BASE')) {
      define('BASE', $_ENV['VITE_ROOT']);
    }

    //configuro las variables a remplazar en el template
    $vars = array(
      '{name_client}',
      '{name_landing}',
      '{email_client}',
      '{name_user}',
      '{email_user}',
      '{phone_user}',
      '{comments_user}',
      '{interes}',
      '{date}',
      '{base}'
    );

    $values = array(
      $_ENV['NAME_APP'],
      $_ENV['VITE_NAME_LANDING'],
      $_ENV['MAIL_CONTACTO'],
      $name,
      $email,
      $phone,
      $comments,
      $interes,
      date('d-m-Y'),
      BASE
    );

    if ($_ENV['VITE_ENVIRONMENT'] === 'dev') {
      $arrContextOptions = array(
        "ssl" => array(
          "verify_peer" => false,
          "verify_peer_name" => false,
        ),
      );
    } else {
      $arrContextOptions = array();
    }

    switch ($to) {

      case 'to_client':
        $template = file_get_contents($_ENV['VITE_ROOT'] . 'includes/emails/contacts/contacts-to-client.php', false, stream_context_create($arrContextOptions));
        break;

      case 'to_user':
        $template = file_get_contents($_ENV['VITE_ROOT'] . 'includes/emails/contacts/contacts-to-user.php', false, stream_context_create($arrContextOptions));
        break;

      default:
        $template = file_get_contents($_ENV['VITE_ROOT'] . 'includes/emails/contacts/contacts-to-client.php', false, stream_context_create($arrContextOptions));
        break;
    }

    //Remplazamos las variables por las marcas en los templates
    $template_final = str_replace($vars, $values, $template);

    return $template_final;
  }
}
