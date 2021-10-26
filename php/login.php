
<?php 
require("db-connect.php");

function signIn()
{
  global $dbn; // global so that it links to the db thats in the connect-db.php file
  global $username;
  global $password;

  
  $query = "SELECT * FROM users ";
  $statement = $dbn->prepare($query);
  $statement->execute(); 
  $results = $statement->fetchAll(); // get array of all rows, fetch() returns an array of one row
  $statement->closeCursor();

  if (count($results) > 0) {
      foreach ($results as $result) {

        if (password_verify($password,$result['pwd']))
        {
            session_start(); 
            $_SESSION['user'] = $username;
            $_SESSION['pwd'] = $password;
            session_write_close();

            
            echo "<script>window.location.href='main.php?id=".$_SESSION['user']."';</script>";
           
        }
        else {
            echo " <p>The password does not match the user in our system. Please try again.</p>";
        }
      }
  }
  else {
         
    echo " <p>There is no account associated with this email. Please try again or create an account.</p>";
  }
}
?>