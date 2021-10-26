<?php
require('db-connect.php');
$con = mysqli_connect('localhost','root','','cs4640');
// header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Origin: *');// * means every remote request
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
header('Access-Control-Max-Age: 1000');  
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

// retrieve data from a post request, can't use $_POST
$postdata = file_get_contents("php://input");
global $db;

// change it back, urldecode(string) -- urlencode(string)

$request = json_decode($postdata);
//do processing 
$data = []; //returned to Angular
$Uname = mysqli_real_escape_string( $con, trim($request->name));
$email  = mysqli_real_escape_string( $con,trim($request->email));
$pwd  = mysqli_real_escape_string( $con,trim($request->pwd));
foreach ($request as $k => $v){
    $data[$k] = $v;
}

    $hash = password_hash($pwd, PASSWORD_DEFAULT);
    $statement = $db->prepare("INSERT INTO users ( name, email, pwd) VALUES ('{$Uname}','{$email}','{$hash}');");
    $statement->execute();
    $statement->closeCursor();

 echo json_encode($data);
    
?>

