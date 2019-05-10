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

function addTask() {
    validateForms();
    var newTask = document.forms["taskForm"]["enterTask"].value;
    var newTask2 = document.getElementById("enterTask");
    var newDeadline = document.forms["taskForm"]["inputDaysToComplete"].value;
    //var fullTask = "";
    //fullTask.innerHTML = newTask + "<br>" + newDeadline;
    var taskList = document.getElementById("display")
    //var taskList = document.createElement("col-sm");
    //taskList.addClass(fullTask);
   //document.getElementById("addedTasks").innerText = (newTask + "<br>" + newDeadline + " days");
    //taskList.innerHTML = "";
    // doesnt work taskList.append("<div class = 'col-sm'>" + newTask + "<br>" + newDeadline);
    //taskList.className += "col-sm";
    //taskList.innerHTML += "<div class='col-sm'>"
    if (newDeadline < 3) {
        taskList.innerHTML += "<div class='col-auto mr-auto alert alert-danger alert-dismissable fade show'>"
        + newTask + "<br>" + newDeadline + " day(s)" + "</div>";
    }
    else if (newDeadline < 7 && newDeadline > 2) {
        taskList.innerHTML += "<div class='col-auto mr-auto alert alert-warning'>" +
            newTask + "<br>" + newDeadline + " day(s)" + "</div>";
    }
    else if (newDeadline >= 7) {
        taskList.innerHTML += "<div class='col-auto mr-auto alert alert-secondary'>" +
            newTask + "<br>" + newDeadline + " day(s)" + "</div>";
    }
    colCount += 1;
    if (colCount > 12) {
        taskList.innerHTML += "</div>" + "<br>" + "<div class='row'>";
        colCount = 0;
    }
    document.getElementById("display").innerHTML.display = taskList.innerHTML;
    event.preventDefault();
    taskForm.reset();
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
    //if invalid, throw error
    clearErrors();
    var inputDays = document.forms["taskForm"]["inputDaysToComplete"].value;
    if (inputDays == "" || isNaN(inputDays)) {
        alert("Please enter a number.");
        document.forms["taskForm"]["inputDays"]
        .parentElement.className = "form-group has error";
        document.forms["taskForm"]["inputDays"].focus();
        return false;
    }
}