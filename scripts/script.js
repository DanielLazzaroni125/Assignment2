function clickHandler(event) {
    console.log("clicked", event.target.textContent)
    if (event.target.textContent === 'Dark Theme')// background color button is pressed
    {
        changeBGColor()
    }
}


function changeBGColor(){
    document.body.classList.toggle("darkBody");
    var element = document.getElementById("aside");
    element.classList.toggle("darkSidebar");
}

document.body.addEventListener("click", clickHandler)