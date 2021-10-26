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

$email = $username;
$image  = mysqli_real_escape_string( $con,trim($request->image));
$discp  = mysqli_real_escape_string( $con,trim($request->discp));
$about  = mysqli_real_escape_string( $con,trim($request->about));
foreach ($request as $k => $v){
    $data[$k] = $v;
}

function getUsername(){
    global $db; 
    $username; 
    $query = "SELECT name FROM users WHERE email = '$username'";
    $statement =$db->prepare($query);
    $statement->execute();
    $results= $statement->fetchAll();
    $statement->closeCursor();

    foreach($results as $result ){
        $username = $result['name'];
    }
}

function Selectuser(){
    global $db; 
    global $username;
    $statement = $db -> prepare("SELECT * FROM profile  WHERE email= '$username'");
    $statement ->execute();
    $results = $statement ->fetchAll();
    $statement ->closeCursor ();


    if(empty($results)){
        global $db;
        $query = "INSERT INTO profile (email, name, discp, about) VALUES ('$username1', '$username','Describe your blog', 'Introduce yourself');";
    }else {
        foreach ($results as $result){
            $disp = $result['disp'];
            $about = $result['about'];
        }
    }
}




 echo json_encode($data);
    
?>