<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$url = "http://bored.api.lewagon.com/api" . $_SERVER['REQUEST_URI'];

// Initialize cURL session
$ch = curl_init($url);

// Set options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

// Execute cURL session
$response = curl_exec($ch);

// Close cURL session
curl_close($ch);

// Output the response
echo $response;
?>
