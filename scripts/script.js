function clickHandler(event) {
    console.log("clicked", event.target.textContent)
    if ((event.target.textContent === 'Dark Theme') || (event.target.textContent === 'Light Theme'))
    {
        changeBGColor()
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

document.body.addEventListener("click", clickHandler)
btn.addEventListener('click', changeText)