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


global $new;
$search  = mysqli_real_escape_string( $con,trim($request->search ));
// $title  = mysqli_real_escape_string( $con,trim($request->title ));
// $subtitle  = mysqli_real_escape_string( $con,trim($request->subtitle));
// $imageURL  = mysqli_real_escape_string( $con,trim($request->imageURL));
// $date  = mysqli_real_escape_string( $con,trim($request->date));
// $text  = mysqli_real_escape_string( $con,trim($request->text));

foreach ($request as $k => $v){
    $data[$k] = $v;
}
if(!empty($search)){

$statement = $db -> prepare("SELECT * FROM posthtml WHERE title LIKE '%{$search}%' OR  subtitle LIKE '%{$search}%' or  source LIKE '%{$search}%'");
$statement ->execute(); 
$results = $statement ->fetchAll(); 
$statement ->closeCursor (); 

}
else{
    $statement = $db -> prepare("SELECT * FROM posthtml");
    $statement ->execute(); 
    $results = $statement ->fetchAll(); 
    $statement ->closeCursor ();  
}
echo json_encode($results);


    
?>