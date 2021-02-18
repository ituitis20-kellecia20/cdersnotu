<?php

if (isset($_POST['submit'])) {
   $name = $_POST['name'];
   $subject = $_POST['subject'];
   $mailFrom = $_POST['mail'];
   $message = $_POST['message'];

   $mailTo = "kellecia20@itu.edu.tr";
   $headers = "C ders notu: ".$mailFrom;
   $txt = "ismi: ".$name.".\n\n".$message;

   mail($mailTo, $subject, $txt, $headers);
   header("Location: form.php?mailsend");
}