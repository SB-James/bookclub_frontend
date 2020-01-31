<?php 
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT");

$verb = $_SERVER['REQUEST_METHOD'];
$title = $_GET['title'];

$ch = curl_init("https://bookclub-rest.herokuapp.com/greeting"); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);

$response = curl_exec($ch);

curl_close($ch);

echo $response;
?> 
