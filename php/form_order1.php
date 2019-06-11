<?php
header("Content-Type: text/html; charset=utf-8");
session_start();

require_once 'inc/MCAPI.class.php';

$admin = 'arefyev@evenagency.by'; 

ini_set("memory_limit", "320M");
if (!empty($_POST)){
   
  
   $name_order = htmlspecialchars($_POST["name_order1"]); 
   $tel_order = htmlspecialchars($_POST["tel_order1"]);
   $email_order = htmlspecialchars($_POST["email_order1"]);
   
   $company_order = htmlspecialchars($_POST["company_order1"]);
   $position_order = htmlspecialchars($_POST["position_order1"]);

    $data = array(
        'email'     => $email_pay,
        'status'    => 'subscribed',
        'firstname' => $name_pay,
        //'lastname'  => $lastname
    );
    syncMailchimp($data, "d4bf1a9f7a");

   //$picture = "";     
 
  $filepath = array();
  $filename = array();
  for( $i = 0; $i <= 50; $i++) {
    if ( !empty( $_FILES['file']['tmp_name'][$i] ) and $_FILES['file']['error'][$i] == 0 ) {
      $filepath[] = $_FILES['file']['tmp_name'][$i];
      $filename[] = $_FILES['file']['name'][$i];
    }
  }  
  
  $body .= "ИМЯ:".$name_order."\r\n"; 
  $body .= "EMAIL:".$email_order."\r\n"; 
  $body .= "ТЕЛЕФОН:".$tel_order."\r\n"; 
  $body .= "КАМПАНИЯ:".$company_order."\r\n"; 
  $body .= "ДОЛЖНОСТЬ:".$position_order."\r\n"; 
  
 
  if ( send_mail($admin, $body, $email, $filepath, $filename) )
    $_SESSION['success'] = true;	
  else
    $_SESSION['success'] = false;
  header( 'Location: '.$_SERVER['PHP_SELF'] );
  
  die();
}

if ( isset( $_SESSION['success'] ) ) {
  if ( $_SESSION['success'] )
    echo '';   

  else
    echo '<p>Ошибка при отправке письма</p>';
  unset( $_SESSION['success'] );
}

// Вспомогательная функция для отправки почтового сообщения с вложением
function send_mail($admin, $body, $email, $filepath, $filename)
{
  $subject = '=?utf-8?B?'.base64_encode('Заявка на обратный звонок!').'?=';
  $boundary = "--".md5(uniqid(time())); // генерируем разделитель
  
  $headers = "From:".htmlspecialchars($_POST["name_order1"])." <".htmlspecialchars($_POST["email_order1"]).">\r\n"; 
  $headers .= "Return-path: <".$email.">\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .="Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";
  $multipart = "--".$boundary."\r\n";
  $multipart .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
  $multipart .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";

  $body = quoted_printable_encode( $body )."\r\n\r\n";
 
  $multipart .= $body;
 
  $file = '';
  $count = count( $filepath );
  if ( $count > 0 ) {
  for( $i = 0; $i <= 50; $i++) {
      $fp = fopen($filepath[$i], "r");
      if ( $fp ) {
        $content = fread($fp, filesize($filepath[$i]));
        fclose($fp);
        $file .= "--".$boundary."\r\n";
        $file .= "Content-Type: application/octet-stream\r\n";
        $file .= "Content-Transfer-Encoding: base64\r\n";
        $file .= "Content-Disposition: attachment; filename=\"".$filename[$i]."\"\r\n\r\n";
        $file .= chunk_split(base64_encode($content))."\r\n";     
      }
    }
  }
  $multipart .= $file."--".$boundary."--\r\n";

  if( mail($admin, $subject, $multipart, $headers) )
    return true;
  else
    return false;
}


if ( isset( $_SESSION['sendMailForm'] ) ) {
  echo $_SESSION['sendMailForm']['error'];
  $name    = htmlspecialchars ( $_SESSION['sendMailForm']['name'] );
  $email   = htmlspecialchars ( $_SESSION['sendMailForm']['email'] );
  $subject = htmlspecialchars ( $_SESSION['sendMailForm']['subject'] );
  $message = htmlspecialchars ( $_SESSION['sendMailForm']['message'] );
  unset( $_SESSION['sendMailForm'] );
} else {
  $name  = '';
  $email   = '';
  $subject = '';
  $message = '';
}echo '<p style="color:green; text-align:center; font-size:0px;"><b> Заявка успешно отправлена </b> </p>'

?>
