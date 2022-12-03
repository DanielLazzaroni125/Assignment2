const notesArray = [{
  title: 'note one',
  body: 'this is my first note'
}]

function clickHandler(event) {
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
  var textOptions = document.getElementById("textOptions");
  if (textOptions.style.display === "none") {
    textOptions.style.display = "block";
  } else {
    textOptions.style.display = "none"; 
  }
}

const textAreaShow = document.getElementById('button1');
const textArea = document.getElementById('textArea')

function showArea() {
  var textOptions = document.getElementById("textOptions");
  if (textOptions.style.display === "none") {
    textOptions.style.display = "block";
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
}

//when li clicked, get text content of the li
//next, find array object with that title
//last, display its body text in the text area

function liClicked(event){
  var title = event.target.textContent
  var body = notesArray.find(item => item.name === title)
  textArea.value = body.body
}

document.body.addEventListener("click", clickHandler)
btn.addEventListener('click', changeText)
textAreaHide.addEventListener('click', removeArea)
textAreaShow.addEventListener('click', showArea)
save.addEventListener('click', savePressed)
noteList.addEventListener('click', liClicked)




