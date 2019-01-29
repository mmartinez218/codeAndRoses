<?php

//var_dump($_POST);
//exit;

try {
    $conn = new PDO("mysql:host=localhost", "root", "root");
}
catch(PDOException $e)
{
    echo "Error: " .$e->getMessage();
}
$email =$_POST['email'];
$firstname =$_POST['firstname'];
$lastname =$_POST['lastname'];
$password =$_POST['password'];

$query = "INSERT INTO admins (email, firstname, lastname, password) VALUES ('$email', '$firstname', '$lastname', '$password')";

$result = $conn->query($query);
if($result){
  echo json_encode (true);
} else {
    echo json_encode (false);
}
?>
