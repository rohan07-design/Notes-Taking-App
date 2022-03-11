 // getting the data
 var getNote = document.getElementById('validationTextarea');
 var getButtonData = document.getElementById('sData');

//still show the data after reloading the wedsite
 showData()


 //put the data in localstorage after click
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

 //show the notes
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
        html = html+`<div class="notecard col-lg-4 col-md-4 col-sm-6">
        <div class="my-3 mx-3 card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Note ${key}</h5>
              <p class="card-text">${newNotes[key]}</p>
              <button id=${key} onclick=del(this.id) class="btn btn-primary">Delete</button>
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

//deleting the note
function del(id) {
    let getData = localStorage.getItem('user')
    if(getData == null) {
        newNotes = []
    } else {
        newNotes = JSON.parse(getData)
    }

    newNotes.splice(id,1);
    localStorage.setItem('user',JSON.stringify(newNotes))
    showData()
}

//searching the notes
var search = document.getElementById('search');

search.addEventListener('input',function() {
    
    //getting data from search box
    let searchValue = search.value;
    
    //get all notes using class
    let notesTake = document.getElementsByClassName('notecard');
    
    Array.from(notesTake).forEach(function(element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(searchValue)) {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})