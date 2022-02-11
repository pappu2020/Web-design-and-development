
var h1 = document.createElement("h3");
var text;
var input = prompt("Enter your Name: ");

let confirmMessage = confirm("Are you sure?");

if(confirmMessage){
    if(input == null || input == ""){
        text = "name not found";
    }
    else{
        text = input;
    }


    let textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}

else{
    document.getElementById("heading").innerText = "please try again";
}
