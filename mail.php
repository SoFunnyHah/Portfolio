<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
header('Content-Type: application/json');
if ($name === ''){
  print json_encode(array('message' => 'Имя не может быть пустым', 'code' => 0));
  exit();
}
if ($email === ''){
  print json_encode(array('message' => 'Без вашего Email я не смогу вам ответить', 'code' => 0));
  exit();
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
  print json_encode(array('message' => 'Не верный формат Email', 'code' => 0));
  exit();
  }
}
if ($message === ''){
  print json_encode(array('message' => 'Сообщение не может быть пустым', 'code' => 0));
  exit();
}
$content="От: $name \nEmail: $email \nТекс: $message";
$recipient = "karpuxov.a@mail.ru";
$mailheader = "ОТ: $email \r\n";
$subject = "Форма обратной связи";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Email успешно отправлен! Я отвечу вам в течении нескольких дней!', 'code' => 1));
exit();
?>