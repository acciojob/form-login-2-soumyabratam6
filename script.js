//your JS code here. If required.
function submitForm(event) {
    event.preventDefault(); // Prevent form submission
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;

    // Construct the alert message with spaces
    var alertMessage = "First Name: " + firstName + " " +
                       "Last Name: " + lastName + " " +
                       "Phone Number: " + phoneNumber + " " +
                       "Email ID: " + email;

    // Display the alert
    alert(alertMessage);