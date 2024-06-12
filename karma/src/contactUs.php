<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once '../vendor/autoload.php';
include '../config/constant.php';
require_once('sendMail.php');


$request_method = strtoupper($_SERVER['REQUEST_METHOD']);

$redirectTo = SITE_URL.'/index.html';


if ($request_method == "POST") {
    $errors = [];
    $inputs = [];
    if(isset($_POST['contact_submit']))
    {
        $validate = formValidation($_POST);
        $errors = $validate['errors'];
        $data = $validate['inputs'];
        if(count($errors) == 0)
        {
            $name      = $data['name'];
            $userEmail      = $data['email'];
            $message        = $data['comment'];
            

            $mailSubject =  SITE_NAME.': Form Response';

            /** Send mail to Admin */           
            $adminMailMessage = '<h2> Hi, </h2>
                                <p>Mail from '.$name.' </p>
                                <p>Email : '.$userEmail.' </p>
                                <p>Message : '.$message.' </p>
                                <p>Regards, </p>
                                <p>'.SITE_NAME.' team</p>';
                                
            $m = new SendMail();
            $result = $m->sendMessage(MAIL_FROM, ADMIN_EMAIL, $mailSubject, $adminMailMessage);
                           
            
            /** Send mail to User */
            $userMailMessage = '<h2> Hi '.$name.', </h2>
                                <p>We received your message successfully. Our team will reach you soon.</p>
                                <p>Thanks for your interest with us.</p>
                                <p>Regards, </p>
                                <p>'.SITE_NAME.' team</p>';

            $mailClass = new SendMail();
            $sendMail = $mailClass->sendMessage(MAIL_FROM, $userEmail, $mailSubject, $userMailMessage);
            if($sendMail == true){
                header('Location: '.$redirectTo.'?mail=success');
                exit;
            }
        }
    }
}else{

    header('Location: '.$redirectTo.'?mail=error'); 
    exit;
}


function formValidation($postData)
{
    $errors = [];
    $inputs = [];

    if(isset($postData['name']))
    {
        $name = sanitizeInput($postData['name']);
        if (preg_match('/^[A-Za-z\s\-\'\p{L}]+$/u', $name)) {
            $inputs['name'] = $name;
        } else {
            $errors['name'] = NAME_REQUIRED;
        }
    }else{
        $errors['name'] = NAME_REQUIRED;
    }

    if(isset($postData['lname']))
    {
        $lname = sanitizeInput($postData['lname']);
        if (preg_match('/^[A-Za-z\s\-\'\p{L}]+$/u', $lname)) {
            $inputs['lname'] = $lname;
        }
    }else{
        $inputs['lname'] = null;
    }
    
    if(isset($postData['email']))
    {
        $email = sanitizeInput($postData['email']);
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $inputs['email'] = $email;
        } else {
            $errors['email'] = EMAIL_INVALID;
        }
    }else{
        $errors['email'] = EMAIL_REQUIRED;
    }

    if(isset($postData['phone']))
    {
        $phone = sanitizeInput($postData['phone']);
        if(preg_match("/^[0-9]{10}$/", $phone)) {
            $inputs['phone'] = $phone;
        } else {
            $errors['phone'] = PHONE_INVALID;
        }
    }else{
        $errors['phone'] = PHONE_REQUIRED;
    }

    if(isset($postData['message']))
    {
        $address = sanitizeInput($postData['message']);
        if (!empty($address)) {
            $inputs['message'] = $address;
        } else {
            $errors['message'] = ADDRESS_REQUIRED;
        }
    }else{
        $errors['message'] = ADDRESS_REQUIRED;
    }

    $data['errors'] = $errors;
    $data['inputs'] = $inputs;

    return $data;
}

function sanitizeInput($input) {
    $data = trim($input);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

