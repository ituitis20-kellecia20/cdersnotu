<?php

if (isset($_POST['submit'])) {
   $name = $_POST['name'];
   $mail = $_POST['mail'];
   $message = $_POST['message'];

   $from = 'from';
   $subject = "subject";
   $body = "$name.\n".
               "$mail.\n".
                  "$message.\n";

   $to = "kellecia20@itu.edu.tr";
   $headers = "$from \r\n";
   

   mail($to,$subject,$body,$headers);

   header("Location: form.html");
}