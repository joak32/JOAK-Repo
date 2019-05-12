var taskArray = new Array();
var colNum = 0;
var colCount = 0;

//if colNum == 12 {
    //add row, colNum = 0;
//}

function makeDismiss() {
    var dismissCode = "";
    dismissCode.innerHTML = "<button type='button' class='close' data-dismiss='alert'>" +
        "&times" + "</button>";
    return dismissCode;
}

/*function addTask() {
    validateForms();
    var newTask = document.forms["taskForm"]["enterTask"].value;
    var newTask2 = document.getElementById("enterTask");
    var newDeadline = document.forms["taskForm"]["inputDaysToComplete"].value;
    //var fullTask = "";
    //fullTask.innerHTML = newTask + "<br>" + newDeadline;
    var taskList = document.getElementById("display");
    //var taskList = document.createElement("col-sm");
    //taskList.addClass(fullTask);
   //document.getElementById("addedTasks").innerText = (newTask + "<br>" + newDeadline + " days");
    //taskList.innerHTML = "";
    // doesnt work taskList.append("<div class = 'col-sm'>" + newTask + "<br>" + newDeadline);
    //taskList.className += "col-sm";
    //taskList.innerHTML += "<div class='col-sm'>"
    if (newDeadline < 3) {
        taskList.innerHTML += "<div class='col-auto mr-2 alert alert-danger alert-dismissable fade show' role='alert'>"
            + newTask + "<br>" + newDeadline + " day(s)" +
            "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" 
            + "<span aria-hidden='true'>" + "&times;" + "</span>" + "</button></div>";
    }
    else if (newDeadline < 7 && newDeadline > 2) {
        taskList.innerHTML += "<div class='col-auto mr-2 alert alert-warning alert-dismissable fade show' role='alert'>" +
            newTask + "<br>" + newDeadline + " day(s)" + 
            "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" 
            + "<span aria-hidden='true'>" + "&times;" + "</span>" + "</button></div>";"</div>";
    }
    else if (newDeadline >= 7) {
        taskList.innerHTML += "<div class='col-auto mr-2 alert alert-secondary alert-dismissable fade show' role='alert'>" +
            newTask + "<br>" + newDeadline + " day(s)" + 
            "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" 
            + "<span aria-hidden='true'>" + "&times;" + "</span>" + "</button></div>";"</div>";
    }
    //checkDeadline();

    colCount += 1;
    if (colCount > 12) {
        taskList.innerHTML += "</div>" + "<br>" + "<div class='row'>";
        colCount = 0;
    }
    document.getElementById("display").innerHTML.display = taskList.innerHTML;
    //event.preventDefault();
    taskForm.reset();
    return false;
    //taskList('.alert').alert();
    //document.getElementById('display').setAttribute('class', "close");
} WORKING ISH*/

function addDismiss() {
    //add dismiss button
    var addButton = document.createElement("button");
    addButton.innerHTML = "class='close' data-dismiss='alert'";
    //on dismiss button, add data-dismiss="alert" ATTRIBUTE, triggers function
    //use <button> 
    
    //add .fade and .show classes

    //add .alert-dismissable class (adds padding to right of alert/positions .close button)

    //
}

//clean this
function clearErrors() {
    for (var i = 0; 
        i < document.forms["taskForm"].elements.length;
        i++) {
            if (document.forms["taskForm"].elements[i]
        .parentElement.className.indexOf("has-") != -1) {
            document.forms["taskForm"].elements[i]
            .parentElement.className = "form-group";
        }
    }
}

//check that the days read as a number, non-negative, non-zero
function validateForms() {
    clearErrors();
    var inputTaskName = document.forms["taskForm"]["enterTask"].value;
    var inputDays = document.forms["taskForm"]["inputDaysToComplete"].value;

    if (inputTaskName == "") {
        alert("Please enter a task");
        document.forms["taskForm"]["enterTask"].parentElement.className = "form-group has-error";
        document.forms["taskForm"]["enterTask"].focus();
        //event.preventDefault();
        return false;
    }
    
    if (inputDays == "" || isNaN(inputDays) || inputDays < 1) {
        alert("Please enter a number no less than 1.");
        document.forms["taskForm"]["inputDaysToComplete"].parentElement.className = "form-group has-error";
        document.forms["taskForm"]["inputDaysToComplete"].focus();
        //event.preventDefault();
        return false;
    }
      /* if (inputTaskName === "") {
        inputTaskName.setCustomValidity("Please fill out this field.");
        document.forms["taskForm"]["inputTaskName"]
            .parentElement.className = "form-group has error";
        document.forms["taskForm"]["inputTaskName"].focus();    
    }*/
    //event.preventDefault();

    var newTask = document.forms["taskForm"]["enterTask"].value;
    var newTask2 = document.getElementById("enterTask");
    var newDeadline = document.forms["taskForm"]["inputDaysToComplete"].value;
    //var fullTask = "";
    //fullTask.innerHTML = newTask + "<br>" + newDeadline;
    var taskList = document.getElementById("display");
    //var taskList = document.createElement("col-sm");
    //taskList.addClass(fullTask);
   //document.getElementById("addedTasks").innerText = (newTask + "<br>" + newDeadline + " days");
    //taskList.innerHTML = "";
    // doesnt work taskList.append("<div class = 'col-sm'>" + newTask + "<br>" + newDeadline);
    //taskList.className += "col-sm";
    //taskList.innerHTML += "<div class='col-sm'>"
    if (newDeadline < 3) {
        taskList.innerHTML += "<div class='col-auto mr-2 alert alert-danger alert-dismissable fade show' role='alert'>"
            + newTask + "<br>" + newDeadline + " day(s)" +
            "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" 
            + "<span aria-hidden='true'>" + "&times;" + "</span>" + "</button></div>";
    }
    else if (newDeadline < 7 && newDeadline > 2) {
        taskList.innerHTML += "<div class='col-auto mr-2 alert alert-warning alert-dismissable fade show' role='alert'>" +
            newTask + "<br>" + newDeadline + " day(s)" + 
            "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" 
            + "<span aria-hidden='true'>" + "&times;" + "</span>" + "</button></div>";"</div>";
    }
    else if (newDeadline >= 7) {
        taskList.innerHTML += "<div class='col-auto mr-2 alert alert-secondary alert-dismissable fade show' role='alert'>" +
            newTask + "<br>" + newDeadline + " day(s)" + 
            "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" 
            + "<span aria-hidden='true'>" + "&times;" + "</span>" + "</button></div>";"</div>";
    }
    //checkDeadline();

    colCount += 1;
    if (colCount > 12) {
        taskList.innerHTML += "</div>" + "<br>" + "<div class='row'>";
        colCount = 0;
    }
    document.getElementById("display").innerHTML.display = taskList.innerHTML;
    //event.preventDefault();
    taskForm.reset();
    return false;
    //taskList('.alert').alert();
    //document.getElementById('display').setAttribute('class', "close");
}
/*    return false;
} WORKING ISH*/
