var form = document.querySelector("form");
var email = document.getElementById("email");
var Password = document.getElementById("Password");

var Confirm_pass = document.getElementById("Confirm_pass");
var message = document.getElementById("message");

var lower = document.getElementById("lower");
var upper = document.getElementById("upper");
var num = document.getElementById("num");
var min = document.getElementById("min");

var passwordCheck = document.getElementById("passwordCheck");

Password.addEventListener("focus",function(){
    message.style.display = "block";
    message.style.marginTop = "15px";
    message.style.marginBottom = "15px";
    message.style.border = "3px solid black";

})

Password.addEventListener("blur",function(){
    message.style.display = "none";
})

Password.addEventListener("keyup",function(){
    var lowerCaseLetters = /[a-z]/g;
    if(Password.value.match(lowerCaseLetters)){
        lower.classList.add("valid");
        lower.classList.remove("invalid");
    }

    else{
        lower.classList.remove("valid");
        lower.classList.add("invalid");
    }



    var upperCaseLetters = /[A-Z]/g;
    if(Password.value.match(upperCaseLetters)){
        upper.classList.add("valid");
        upper.classList.remove("invalid");
    }

    else{
        upper.classList.remove("valid");
        upper.classList.add("invalid");
    }


    var numbers = /[0-9]/g;
    if(Password.value.match(numbers)){
        num.classList.add("valid");
        num.classList.remove("invalid");
    }

    else{
        num.classList.remove("valid");
        num.classList.add("invalid");
    }

    if(Password.value.length >= 8) {
        min.classList.remove("invalid");
        min.classList.add("valid");
      } else {
        min.classList.remove("valid");
        min.classList.add("invalid");
      }
})


function showPassword(){
    if(Password.type == "password"){
        Password.type="text";
    }

    else{
        Password.type="password";
    }
}

function showConPassword(){
    if(Confirm_pass.type == "password"){
        Confirm_pass.type="text";
    }

    else{
        Confirm_pass.type="password";
    }
}



form.addEventListener("submit",eventHandler);

   
   function eventHandler(e){
   e.preventDefault();

   if(Confirm_pass.value != Password.value){
    document.getElementById("passwordCheck").innerText = "Password do not match";
    return false;
   }


  

   }