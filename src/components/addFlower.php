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
$type =$_POST['type'];
$name =$_POST['itemName'];
$desc =$_POST['description'];
$price =$_POST['price'];
$img =$_POST['itemImg'];
$adminId = 1;

$query = "INSERT INTO flowers (type, name, price, description, image, adminid) VALUES ('$type', '$name', '$price', '$desc', '$img', '$adminId')";

$result = $conn->query($query);
if($result){
  echo json_encode (true);
} else {
    echo json_encode (false);
}
?>
