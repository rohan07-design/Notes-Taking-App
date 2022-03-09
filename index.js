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

function getalert(message, type) {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    notify.append(newDiv)
}

//to disappear the alert bar after 2 sec
function disappear() {
    notify.style.display = "none";    
}

//adding the data into table
var addData = () => {
    //getting value from input box
    var data = {  
        title1 : title.value,
        desc1 : desc.value
    }

    let str = JSON.stringify(data)
    //stored in localstorage
    localStorage.setItem(data.title1,str)
    let allData1 = localStorage.getItem(data.title1);
    let allData = JSON.parse(allData1)
    
    var createTable = document.getElementById("body")
    var createBody = document.createElement('tr');

    createBody.innerHTML = '<td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td><td>'+ allData.title1 +'</td><td>'+ allData.desc1 +'</td>'
    createTable.append(createBody)
}


if(alert) {
    btn.addEventListener('click',() => {
        if(title.value === "" && desc.value === "") {
            alert("Please Enter all the data fields..!!", "danger")
            setTimeout(disappear,2000)
        } else {
            getalert("Task is added successfully..!!", "success")
            setTimeout(disappear,2000)
            setTimeout(clearInput, 3000)
            addData()
        }
    });
} 


