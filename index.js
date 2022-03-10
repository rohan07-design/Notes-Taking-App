 // getting the data
 var getNote = document.getElementById('validationTextarea');
 var getButtonData = document.getElementById('sData');

 showData()
 getButtonData.addEventListener('click', function() {
    let getData = localStorage.getItem('user')
    if(getData == null) {
        newNotes = []
    } else {
        newNotes = JSON.parse(getData)
    }

    newNotes.push(getNote.value)
    // console.log(newNotes)
    localStorage.setItem('user', JSON.stringify(newNotes))
    // console.log(newNotes)
    
    let user = localStorage.getItem('user');
    getNote.value = "";
    showData();
 })

 function showData() {
    let getData = localStorage.getItem('user')
    if(getData == null) {
        newNotes = []
    } else {
        newNotes = JSON.parse(getData)
    }

    // newNotes.push(getNote.value)
    
    let html = "";
    for(var key in newNotes) {
        html = html+`<div class="col-lg-4 col-md-4 col-sm-6">
        <div class="my-3 mx-3 card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Note ${key}</h5>
              <p class="card-text">${newNotes[key]}</p>
              <button class="btn btn-primary">Delete</button>
            </div>
        </div>
    </div>`
    };

    if(localStorage.length != 0) {
        document.getElementById('add').innerHTML = html
    } else {
        document.getElementById('add').innerHTML = "Enter data"
    }
 }