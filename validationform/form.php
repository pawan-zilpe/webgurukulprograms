<?php
// Your PHP code for form handling and validation goes here
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);

    $city = htmlspecialchars($_POST['city']);
    $state = htmlspecialchars($_POST['state']);
    $country = htmlspecialchars($_POST['country']);
    $zip = htmlspecialchars($_POST['zip']);
    $errors = [];
    if (empty($name)) {
        $errors[] = "Name is required.";
    }
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required.";
    }
   
    //password validation

    if (empty($password) || strlen($password) < 6) {
        $errors[] = "Password must be at least 6 characters long.";
    }




    if (empty($phone) || !preg_match('/^\d{10}$/', $phone)) {
        $errors[] = "Valid phone number is required.";
    }
    if (empty($city)) {
        $errors[] = "City is required.";
    }
    if (empty($state)) {
        $errors[] = "State is required.";
    }
    if (empty($country)) {
        $errors[] = "Country is required.";
    }
    if (empty($zip) || !preg_match('/^\d{5}$/', $zip)) {
        $errors[] = "Valid ZIP code is required.";
    }
    if (empty($errors)) {
        // Process the form data (e.g., save to database)
    }
    else {
        foreach ($errors as $error) {
            echo "<p style='color: red;'>$error</p>";
        }
    }
    // Display success message or handle form submission
    if (empty($errors)) {
        echo "<p style='color: green;'>Form submitted successfully!</p>";
    
    }
} else {
    // Display the form
    echo '<form method="POST" action="">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <br>
    <label for="phone">Phone:</label>
    <input type="text" id="phone" name="phone" required pattern="\d{10}">
    <br>
    <label for="city">City:</label>
    <input type="text" id="city" name="city" required>
    <br>
    <label for="state">State:</label>
    <input type="text" id="state" name="state" required>
    <br>
    <label for="country">Country:</label>
    <input type="text" id="country" name="country" required>
    <br>
    <label for="zip">ZIP Code:</label>
    <input type="text" id="zip" name="zip" required pattern="\d{5}">
    <br>
    <input type="submit" value="Submit">
</form>';
}

// End of PHP code

    
// Include any additional scripts or stylesheets if needed
// For example, you can include a CSS file for styling
// echo '<link rel="stylesheet" type="text/css" href="style.css">';

// You can also include JavaScript for form validation or interactivity
echo '<script src="script.js"></script>';
// End of PHP code
// Close the PHP tag if you want to include HTML below

//connect to database
 $conn = new mysqli('localhost', 'username', 'password', 'database');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $country = $_POST['country'];
    $zip = $_POST['zip'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO users (name, email, password, phone, city, state, country, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $name, $email, $password, $phone, $city, $state, $country, $zip);

    // Execute the statement
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

// Close the database connection
$conn->close();


    

  

?>