function like(){
    console.log("You liked a thing!")

    var counterElement = document.querySelector("#counter");
    counterElement.innerHTML = parseInt(counterElement.innerHTML) + 1;
}


function likeV2(element){
    var count = parseInt(element.innerHTML);
    element.innerHTML = count + 1;
}


function hoverKeanuIn(element){
    element.src = "https://placekeanu.com/200/200/g";
}

function hoverKeanuOut(element){
    element.src = "https://placekeanu.com/200/200/"
}

function birthYears(){
    var dropdown = document.querySelector("#birth-years");
    console.log(dropdown);
    console.log(Date.now());

    var html = "";
    var date = 1900;

    for(var i = 0; i<122; i++){
        html += `<option value="${1900 + i}">${1900 + i}</option>`;
    }

    dropdown.innerHTML = html;
}

birthYears();