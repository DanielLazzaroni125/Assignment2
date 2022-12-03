const notesArray = [{
  title: 'note one',
  body: 'this is my first note'
}]

function clickHandler(event) {
    console.log("clicked", event.target.textContent)
    if ((event.target.textContent === 'Dark Theme') || (event.target.textContent === 'Light Theme'))
    {
        changeBGColor()
        changeButtonColor()
    }
}


function changeBGColor(){
    document.body.classList.toggle("darkBody");
    var element = document.getElementById("aside");
    element.classList.toggle("darkSidebar");
    

}

const btn = document.getElementById('button2');

function changeText() {
    if (btn.textContent === 'Dark Theme') {
      btn.textContent = 'Light Theme';
    } else {
      btn.textContent = 'Dark Theme';
    }
}

function changeButtonColor(){
    var btn1 = document.getElementById('button1')
    btn1.classList.toggle('darkTurquoise')
    btn1.classList.toggle('button1')
    var btn2 = document.getElementById('button2')
    btn2.classList.toggle('darkPurple')
    btn2.classList.toggle('button2')
    var btn3 = document.getElementById('button3')
    btn3.classList.toggle('darkTurquoise')
    btn3.classList.toggle('button3')
    var btn4 = document.getElementById('button4')
    btn4.classList.toggle('darkRed')
    btn4.classList.toggle('button4')
}

const textAreaHide = document.getElementById('button4');

function removeArea() {
  var x = document.getElementById("textOptions");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const textAreaShow = document.getElementById('button1');
const textArea = document.getElementById('textArea')

function showArea() {
  var x = document.getElementById("textOptions");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  textArea.value = ''
}

const save = document.getElementById('button3')
const noteList = document.getElementById('noteList')

function savePressed(){
  if (textArea.value == ''){
    alert('Nothing to save')
  } else{
    var name = prompt('What would you like to name this note? ')
    notesArray.push({name: name, body: textArea.value})
    const listItem = document.createElement("li")
    listItem.textContent = name
    noteList.append(listItem)
    textArea.value = ''
  }
  
  console.log(notesArray)
}


document.body.addEventListener("click", clickHandler)
btn.addEventListener('click', changeText)
textAreaHide.addEventListener('click', removeArea)
textAreaShow.addEventListener('click', showArea)
save.addEventListener('click', savePressed)




