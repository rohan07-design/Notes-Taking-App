//notify the task is added

var notify = document.getElementById('live')
var btn = document.getElementById('liveAlertBtn')

function alert(message) {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = '<div class="alert alert-success alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    notify.append(newDiv)
}

if(alert) {
    btn.addEventListener('click',() => {
       setTimeout(alert("Task is added successfully..!!"),2000)
       
    });
}