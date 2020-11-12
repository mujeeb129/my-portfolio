<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['describtion'];
$formcontent="From: $name \n Message: $message";
$recipient = "mujeebmj@gmail.com";
$subject = $_POST['subject'];
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>