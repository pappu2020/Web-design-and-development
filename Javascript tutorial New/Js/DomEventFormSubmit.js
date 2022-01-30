const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #Email");
const pass = form.querySelector("div #Password");
const confirm_pass = form.querySelector("div #Confirm-password");

const courses = document.querySelector("div #course");


var genders=document.querySelectorAll("input[name=flexRadioDefault");

Array.from(genders).map((flexRadioDefault) =>{
     flexRadioDefault.addEventListener("change", eventHandlerGender);
});

function eventHandlerGender(e){
    e.preventDefault();
    if(e.target.checked){
        document.getElementById("femaleMaleOutput").innerText = e.target.value;
     } 
}









form.addEventListener("submit", eventHandler);

function eventHandler(e){
    e.preventDefault();

   document.getElementById("name_output").innerText = name.value;
   document.getElementById("Email_output").innerText = email.value;
   document.getElementById("Password_output").innerText = pass.value;
   document.getElementById("Confirm_password").innerText = confirm_pass.value;   
}







courses.addEventListener("change",courseEventHandler);
function courseEventHandler(e){
    e.preventDefault();
    document.getElementById("courseOutput").innerText = e.target.value;
}



