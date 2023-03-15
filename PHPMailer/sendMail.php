<?php
  use PHPMailer\PHPMailer\PHPMailer;
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
  require 'src/PHPMailer.php';
  //$mail = new PHPMailer;
  //var_dump($mail);
  use PHPMailer\PHPMailer\Exception;
  use PHPMailer\PHPMailer\SMTP;
  require 'src/Exception.php';
  //require 'src/PHPMailer.php';
  require 'src/SMTP.php';

  
  $mail = new PHPMailer();
  $mail->IsSMTP();

  $mail->SMTPDebug  = 0;  
  $mail->SMTPAuth   = TRUE;
  $mail->SMTPSecure = "tls";
  $mail->Port       = 587;
  $mail->Host       = "smtp.gmail.com";
  //$mail->Username   = "annathai.r@gmail.com";
  //$mail->Password   = "Anu@Ram12345";
  $mail->Username   = "anusiya3@gmail.com";
  $mail->Password   = "jntjccdqopmuduib";

  $mail->IsHTML(true);
  $mail->AddAddress("ramtech01@gmail.com", "Ram");
  $mail->SetFrom("anusiya3@gmail.com", "Anu");
  $mail->AddReplyTo("anusiya3@gmail.com", "Anu");
  $mail->AddCC("annathai.r@gmail.com", "Annam");
  $mail->Subject = "Test is Test Email sent via Gmail SMTP Server using PHP Mailer";
  $content = "<b>This is a Test Email sent via Gmail SMTP Server using PHP mailer class.</b>";

  $mail->MsgHTML($content); 
  if(!$mail->Send()) {
    echo "Error while sending Email.";
    var_dump($mail);
  } else {
    echo "Email sent successfully";
  }
?>