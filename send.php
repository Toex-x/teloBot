<?php
 
 $phone = $_REQUEST['phone'];
 $procedure = $_REQUEST['procedure'];

echo 'before ok!';

$body = "
<html><head><meta http-equiv=\"Content-type\" content=\"text/html; charset=windows-1251\" /></head>
<body>
<div style=\"width:75%;background:#eee;padding:40px;text-align:center;border-radius:12px;
background-position:center\">
<img src=\"https://studiatela.ru/img/logo.svg\" />
<p style=\"margin-top:24px;margin-bottom:32px;\"><b style=\"color:#383838;font-size:24px;\">Телефон:</b> <br/><a href=\"tel:$phone\"> $phone </a></p>";

if ( $procedure && !is_null($procedure) && $procedure !='' ):

	$body .= "<p><b style=\"color:#383838;font-size:20px;\">Выбранная процедура:</b><br/> $procedure</p>";

endif;


$body .= "</div>
</body></html>";

$subject = "Студия Тела: заполнение формы на сайте";

$to1 = 'arseny-17@yandex.ru'; 
$to2 = 'studiatelamsk@yandex.ru'; 
$to3 = 'vladskorichenko161@gmail.com'; 




 $headers   = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: text/html; charset=UTF-8";
	$headers[] = "Content-Transfer-Encoding: utf-8";
	$headers[] = "Reply-To:no-reply@studiatela.ru";
	$headers[] = "From: Студия Тела <no-reply@studiatela.ru>";
	



mail($to1, $subject, $body, implode("\r\n", $headers));
mail($to2, $subject1, $body, implode("\r\n", $headers));
mail($to3, $subject1, $body, implode("\r\n", $headers));

echo 'ok!';



?>