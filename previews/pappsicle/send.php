<?php
$name = $_POST['name'];
$email = $_POST['email'];
$providedSubject = $_POST['subject'];
$providedMessage = $_POST['message'];
$foundBy = $_POST['find'];
$antispam = $_POST['antispam'];

$to = "kevincherryholme@gmail.com";
$subject = "From Pappsicle Contact Form";
$message = "name: $name\n\nEmail: $email\n\nSubject: $providedSubject\n\nFound By: $foundBy\n\nMessage: $providedMessage";

if($antispam==""){
		mail($to, $subject, $message);
		header("Location:contact.html?s=1");
}
else {
	header("Location:contact.html?s=2");
}

?>