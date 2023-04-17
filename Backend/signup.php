<?php

include "config.php";
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $firstname = $request->firstname;
    $lastname = $request->lastname;
    $email = $request->email;
    $phone = $request->phone;
    $password = $request->password;
    $role = $request->role;
    $select = " SELECT * FROM user WHERE email = '$email' ";
    $result = mysqli_query($conn, $select);
    if (mysqli_num_rows($result) > 0) {

        echo json_encode(array(
            "Error" => 'User already Exists!',
        ));

    } else {
        $insert = "INSERT INTO user(email, firstname, lastname, password, phone, role) VALUES('$email','$firstname','$lastname','$password','$phone','$role')";
        if (mysqli_query($conn, $insert)) {
            http_response_code(201);
            echo json_encode(array(
                "Success" => 'User registered',
            ));
        } else {
            http_response_code(422);
            echo json_encode(array(
                "Error" => 'Error in registration',
            ));
        }

    }
}
?> 