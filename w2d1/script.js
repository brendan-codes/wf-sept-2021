

function doStuff(element){
    element.innerHTML = "THIS HAS CHANGED!!";

    var otherBox = document.querySelector("#special-box");
    var deletedBox = document.querySelector("#deleted-box");
    deletedBox.remove();
    console.log(otherBox);
    otherBox.innerHTML = "<h1>You have changed this other box by clicking a different element!</h1>";
}

function doOtherStuff(){
    var box = document.querySelector("#special-box");
    box.style = `background-color: rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function randomColor(){
    return Math.floor(Math.random() * 256);
}

function captureInput(){
    var input = document.querySelector("#username").value;
    console.log(input);
    alert(input);
}
