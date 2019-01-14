function validateItems() {
    /* The following are the variable names of the input from the form;
        they may be sent elsewhere to be stored */
    var validName = document.getElementById("inputName").value;
    var validEmail = document.getElementById("inputEmail").value;
    var validPhone = document.getElementById("inputPhone").value;
    var validReason = document.getElementById("selectReason").value;
    var validInfo = document.getElementById("inputMore").value;
    var validBeenToRestaurant = document.getElementById("beenHere").value;

    /*These in particular are used to concatenate a string (dayString) containing the
        best days to contact the user */
    var allDays = document.getElementsByName("checkDay");
    var dayString = "";
    for (var i = 0; i < allDays.length; i++) {
        if (allDays[i].checked) {
            dayString = dayString + allDays[i].value + " ";
        }
    }

    // Check to make sure required fields are entered
    if (validName === "") {
        alert("You must enter your name.");
        document.forms["contactInfo"]["validName"].parentElement.className = "form-group-req has-error";
        document.forms["contactInfo"]["validName"].focus();
        return false;
    }
    if (validEmail === "") {
        alert("You must enter your email address.");
        document.forms["contactInfo"]["validEmail"].parentElement.className = "form-group-req has-error";
        document.forms["contactInfo"]["validEmail"].focus();
        return false;
    }
    if (validReason === "") {
        alert("You must select a reason for inquiry.");
        document.forms["contactInfo"]["validReason"].parentElement.className = "form-group-req has-error";
        document.forms["contactInfo"]["validReason"].focus();
        return false;
    }
    
    if ((validName.length > 0) && (validEmail.length > 0) && (validReason.length > 0)) {
        alert("The form has been submitted and the information is valid.");
    }
    return false;
}