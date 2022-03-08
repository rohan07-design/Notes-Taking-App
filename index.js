//get the data

var title = document.getElementById("exampleInputText");
var desc = document.getElementById("floatingTextarea2");

//clear the content of the input

var clearInput = () => {
    title.value = ""
    desc.value = ""
}

//notify the task is added

var notify = document.getElementById('live')
var btn = document.getElementById('liveAlertBtn')

function alert(message, type) {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    notify.append(newDiv)
}

//to disappear the alert bar after 2 sec
function disappear() {
    notify.style.display = "none";    
}

if(alert) {
    btn.addEventListener('click',() => {
        if(title.value === "" && desc.value === "") {
            alert("Please Enter all the data fields..!!", "danger")
            setTimeout(disappear,2000)
        } else {
            alert("Task is added successfully..!!", "success")
            setTimeout(disappear,2000)
            setTimeout(clearInput, 3000)
        }
    });
}
