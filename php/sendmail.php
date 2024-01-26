<?php
// files phpmailer
require './PHPMailer.php';
require './SMTP.php';
require './Exception.php';

$title = "subject";

$c = true;
// forming mail
$title = "subject";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

// settings PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // setting your mail
  $mail->Host       = 'smtp-relay.brevo.com'; // SMTP 
  $mail->Username   = 'art.ok.dubai@gmail.com'; // mail login
  $mail->Password   = 'Tx1gDymPdvHSVW2F'; // mail password
  $mail->SMTPSecure = false;
  $mail->Port       = 587;

  $mail->setFrom('art.ok.dubai@gmail.com', 'order from your site'); // address mail and sendler

  // to whom
  $mail->addAddress('art.ok.dubai@gmail.com');

  // adding files to mail
  if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
      $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
      $filename = $file['name'][$ct];
      if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
          $mail->addAttachment($uploadfile, $filename);
          $rfile[] = " $filename added";
      } else {
          $rfile[] = "it can't add file";
      }
    }
  }

  // sending mail
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();

} catch (Exception $e) {
  $status = "Mail was not sent: {$mail->ErrorInfo}";
}

