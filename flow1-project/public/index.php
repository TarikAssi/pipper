<?php 
require "./../.env";

header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json; charset=UTF-8"); 
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE"); 
header("Access-Control-Max-Age: 3600"); 
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); 


$requestType = $_SERVER["REQUEST_METHOD"];

$servername = "localhost:3306";
$username = "root";
$password = getenv("PASSWORD");



if($requestType == "GET") {
    try {
        $conn = new PDO("mysql:host=$servername;dbname=pipper", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $statement = $conn->query("select * from pipper.pips");
        $result = $statement->fetchAll();

        echo json_encode($result);
    } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    }
}
elseif ($requestType == "POST") {
    echo "You sent a post!";

    $name = $input["name"];
    $color = $input["color  "];

}

?> 