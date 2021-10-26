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
$email = mysqli_real_escape_string( $con, trim($request->email));
$pwd  = mysqli_real_escape_string( $con,trim($request->pwd));
foreach ($request as $k => $v){
    $data[$k] = $v;
}

// function signIn()
// {
 
  $query = "SELECT * FROM users WHERE email = '{$email}'";
  $statement = $db->prepare($query);
  $statement->execute(); 
  $results = $statement->fetchAll(); // get array of all rows, fetch() returns an array of one row
  $statement->closeCursor();

  if (count($results) > 0) {
      foreach ($results as $result) {

        if (password_verify($pwd,$result['pwd']))
        {
            session_start(); 
            $_SESSION['email'] = $email;
            $_SESSION['pwd'] = $pwd;
            session_write_close();

            
          //  echo "<script>window.location.href='main.php?id=".$_SESSION['user']."';</script>";
          $data['error'] = "login success!!";
           
        }
        else {
           // echo " <p>The password does not match the user in our system. Please try again.</p>";
           $data['error'] = "password does not match the user in our system. Please try again.";
        }
      }
  }
  else {
    $data['error'] = "There is no account associated with this email. Please try again or create an account.";
   // echo " <p>There is no account associated with this email. Please try again or create an account.</p>";
  }
// }

    // $hash = password_hash($pwd, PASSWORD_DEFAULT);
    // $statement = $db->prepare("Select * from users (email, pwd) VALUES ('{$email}','{$hash}');");
    // $statement->execute();
    // $statement->closeCursor();

 echo json_encode($data);
    
?>