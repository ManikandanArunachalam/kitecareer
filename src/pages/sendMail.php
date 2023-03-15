<script>
// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    // Validate country
    if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n";
        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};
</script>

<?php
  use PHPMailer\PHPMailer\PHPMailer;
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
  require 'PHPMailer/src/PHPMailer.php';
  use PHPMailer\PHPMailer\Exception;
  use PHPMailer\PHPMailer\SMTP;
  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/SMTP.php';
  $name = $email = $phone = $web = $message = "";

  $mail = new PHPMailer();
  $mail->IsSMTP();
  $mail->SMTPKeepAlive = true;
  $mail->Mailer="smtp";

  $mail->SMTPDebug  = 0;  
  $mail->SMTPAuth   = TRUE;
  $mail->SMTPSecure = "tls";
  $mail->Port       = 587;
  $mail->Host       = "smtp.gmail.com";
  $mail->Username   = "anusiya3@gmail.com";
  $mail->Password   = "jntjccdqopmuduib";

    /* $mail->isSMTP();
    $mail->SMTPDebug  = 0; 
    $mail->Host = 'localhost';
    $mail->SMTPAuth = false;
    $mail->SMTPAutoTLS = false; 
    $mail->Port = 25; 
 */
    $mail->IsHTML(true);

    // Get the form fields and remove whitespace.
    if(isset($_POST['email_for']) && $_POST['email_for']  == "contact") {
      $name = strip_tags(trim($_POST["name"]));
      $email_subject = "Thedal Project - Contact";
      $name = str_replace(array("\r","\n"),array(" "," "),$name);
      $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
      $phone = trim($_POST["phone"]);
      $web = trim($_POST["web"]);
      $message = trim($_POST["message"]);

      // Build the email content.
      //$email_content = "<b>Thank you for contacting us. We will get back to you shortly!!!</b> <br>";
      $confirmation_content = "<b>Thank you for contacting us. We will get back to you shortly!!!</b> <br>";
      $email_content = "Name: ".$name."<br>";
      $email_content .= "Email: ".$email."<br>";
      $email_content .= "Phone: ".$phone."<br>";
      $email_content .= "Subject: ".$web."<br>";
      $email_content .= "Message: ".$message."<br>";
    } elseif (isset($_POST['email_for']) && $_POST['email_for']  == "career"){
      $email_subject = "Thedal Project - Career";
      $name = strip_tags(trim($_POST["name"]));
      $name = str_replace(array("\r","\n"),array(" "," "),$name);
      $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
      $phone = trim($_POST["phone"]);
      $description = trim($_POST["description"]);
      $job = trim($_POST["job"]);

      // Build the email content.
      //$email_content = "<b>Thank you for contacting us. We will get back to you shortly!!!</b> <br>";
      $confirmation_content = "<b>Thank you for applying the job. We will get back to you shortly!!!</b> <br>";
      $email_content = "Name: ".$name."<br>";
      $email_content .= "Email: ".$email."<br>";
      $email_content .= "Phone: ".$phone."<br>";
      $email_content .= "Description: ".$description."<br>";
      $email_content .= "Job Type: ".$job."<br>";
        
      //Attach a file
      $mail->AddAttachment($_FILES['resume']['tmp_name'], $_FILES['resume']['name']);
    }

  //$mail->AddAddress("anandan@thedal.co.in", "Anandhan");
  $mail->SetFrom("noreply@thedal.co.in", "Thedal");
  //$mail->AddReplyTo("anusiya3@gmail.com", "Anu");
  $mail->AddBcc("anandan@thedal.co.in", "Anandan");
  $mail->AddCC("annathai.r@gmail.com", "Annam");
  $mail->Subject = $email_subject;
  $mail->MsgHTML($email_content); 
  $contactFlag = $mail->Send();

  $careerFlag = sendConfirmationEmail($email_subject,$confirmation_content,$email,$name,$mail);

  /* if(isset($_POST['email_for']) && $_POST['email_for']  == "contact") {
    return $success = "Thankyou for your enquiry submission. Our team will reach out to you shortly.";
  } elseif (isset($_POST['email_for']) && $_POST['email_for']  == "career"){
    
  } */
/*if(!$mail->Send()) {
        return $success = "Thankyou for your enquiry submission. Our team will reach out to you shortly.";
}
  else {
        return $failed = "Sorry! Message was not sent, Try again Later.";
  }
  */

  function sendConfirmationEmail($email_subject,$confirmation_content,$email,$name,$mail) {
    $mail->clearAllRecipients( ); // clear all
    $mail->clearAttachments( ); // clear attachments
    $mail->AddAddress($email, $name);
    $mail->SetFrom("noreply@thedal.co.in", "Thedal");
    //$mail->AddReplyTo("anusiya3@gmail.com", "Anu");
    $mail->AddCC("annathai.r@gmail.com", "Annam");
    $mail->Subject = $email_subject;
    $mail->MsgHTML($confirmation_content); 
    return $mail->Send();
  }
?>