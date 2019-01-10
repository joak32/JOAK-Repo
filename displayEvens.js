function validateItems() {
    var firstNum = document.forms["numInput"]["firstNum"].value;
    var endNum = document.forms["numInput"]["endNum"].value;
    var stepNum = document.forms["numInput"]["stepNum"].value;

    if (firstNum == "" || isNaN(firstNum)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["numInput"]["firstNum"].parentElement.classname = "form-group has-error";
        document.forms["numInput"]["firstNum"].focus();
        return false;
    }
    if (endNum == "" || isNaN(endNum)) {
        alert("Ending Number must be filled in with a number.");
        document.forms["numInput"]["endNum"].parentElement.classname = "form-group has-error";
        document.forms["numInput"]["endNum"].focus();
        return false;
    }
    if (stepNum =="" || isNaN(stepNum)) {
        alert("Step must be filled in with a number.");
        document.forms["numInput"]["stepNum"].parentElement.classname = "form-group has-error";
        document.forms["numInput"]["stepNum"].focus();
    }

    //If the step is not a positive number
    if (stepNum < 0) {
        alert("Step must be a positive number.");
        document.forms["numInput"]["stepNum"].parentElement.classname = "form-group has-error";
        document.forms["numInput"]["stepNum"].focus();
    }

    if (endNum <= firstNum) {
        alert("Ending Number must be greater than the Starting Number.");
        document.forms["numInput"]["endNum"].parentElement.classname = "form-group has-error";
        document.forms["numInput"]["endNum"].focus();
    }
    
    var evenArray = new Array();

    for (var i = firstNum; firstNum < endNum; firstnum +=stepNum) {
        if (firstNum % 2 == 0) {
            // evenArray.push(firstNum);
            console.log(firstNum);
        }
    }
        //firstNum += stepNum;
    //document.getElementById("results").style.display = "block";
    //document.getElementById("")
    //document.getElementById("isItOver")
}
