console.log("hello world!");

function hideJoin(e){
    e.remove();
}

function count(id){
    var element = document.querySelector(id);
    var count = parseInt(element.innerHTML);
    element.innerHTML = count + 1;
}

function search(){
    var value = document.querySelector("#search").value;
    alert(`You have searched for: ${value}`); // string interpolation
}