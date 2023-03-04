
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    if(isset($_POST['login']) == 0){
        return 0;
    }
    if(isset($_POST['password']) == 0){
        return 0;
    }
    if(isset($_POST['login']) == 1){
        $login = $_POST['login'];
        $login = filter_input(INPUT_POST,'login' ,FILTER_SANITIZE_SPECIAL_CHARS);
    }
    if(isset($_POST['password']) == 1){
        $password =$_POST['password'];
        $password = filter_var($password, FILTER_VALIDATE_REGEXP,
        array( "options"=> array( "regexp" => "/.{6,25}/"))
        );
    }
    ?>
</body>
</html>