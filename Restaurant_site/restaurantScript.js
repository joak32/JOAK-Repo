/* Start with one function, if it doesn't work, use multiple */

function validateItems() {
    var validName = document.getElementById("inputName").value;
    var validEmail = document.getElementById("inputEmail").value;
    var validPhone = document.getElementById("inputPhone").value;
    var validReason = document.getElementById("selectReason").value;
    var validInfo = document.getElementById("inputMore").value;

    var validBeenToRestaurant = document.getElementById("beenHere").value;
    var allDays = document.getElementsByName("checkDay");
    var dayString = "";
    var i;
    for (i = 0; i < allDays.length; i++) {
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
}


/* Let's just make separate functions
Something like "Information successfully submitted */

function validateName() {
    var name = String(document.forms["contactInfo"]["inputName"]).value;

    if (name.length > 0) {
        return true;
    }
}

function validateEmail() {
    var email = String(document.forms["contactInfo"]["inputName"]).value;

    if (email.length > 0) {
        return true;
    }
}

function validatePhone() {
    var phoneNumber  = String(document.forms["contactInfo"]["inputPhone"]).value;
}

function validateReason() {
    var getReason = document.getElementById("selectReason");
}