<?php
header("Content-type: application/json; charset=utf-8");

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if (isset($_POST['phone'])) {
  $mail = new PHPMailer(true);
  $mail->CharSet = "UTF-8";
  $mail->SMTPDebug = 0;
  $mail->isSMTP();
  $mail->SMTPAuth = true;
  $mail->SMTPSecure = "tls";
  $mail->Host = 'ssl://smtp.mustbefamily.com';
  $mail->Port = 465;
  $mail->Username = 'we@mustbefamily.com';
  $mail->Password = getenv('HTTP_EPSFSE');
  $mail->From = "we@mustbefamily.com";
  $mail->FromName = "Must Be Family";
  $mail->addAddress("we@mustbefamily.com", "Must Be Family");
  $mail->isHTML(true);
  $phone = trim($_POST['phone']);
  $id = trim($_POST['id']);
  if (!preg_match("/^\d{9,12}$/", $phone)) {
    $phone_error = array("status" => "error", "msg" => "Номер телефона заполнен неверно");
    $return = $phone_error;
  }
  $body = "<html><body><div>";
  if (isset($_POST['addData'])) {
    $dataarrayorig = explode(',', $_POST['addData']);
  } else {
    $dataarrayorig = array();
  }
  if (!isset($phone_error)) {
    if (isset($_POST['isquiz']) && ($_POST['isquiz'] === "true")) {
      $textarray = array();
      $dataarray = array();
      $mail->Subject = "Квиз с сайта events.mustbefamily.com";
      $chunks = array_chunk($dataarrayorig, 2); //chunk array into 2-2 combination
      foreach ($chunks as $chunk) { //iterate over array
        $dataarray[trim($chunk[0])] = trim($chunk[1]); //make key value pair
      }
      foreach ($dataarray as $key => $value) {
        if (strpos($key, "question") !== false) {
          $index = "answer" . substr($key, 8, 1);
          $textarray[$value] = $dataarray[$index];
        }
      }
      foreach ($textarray as $key => $value) {
        $body .= "<p>$key: $value</p>";
      }
    } else {
      $mail->Subject = "Обращение на events.mustbefamily.com";
    }
    $body .= "<p>Идентификатор формы: $id</p>";
    $body .= "<p>Телефон: $phone</p></div></body></html>";
    $mail->Body = $body;
    if ($mail->send()) {
      $return = array("status" => "ok", "msg" => "");
    } else {
      $return = array("status" => "error", "msg" => "Упс! Что-то пошло не так. Попробуйте обновить страницу и попробовать ещё раз. Или воспользуйтесь кнопкой выше и позвоните нам!");
    }
  }
  $json = json_encode($return);
  echo $json;
}
