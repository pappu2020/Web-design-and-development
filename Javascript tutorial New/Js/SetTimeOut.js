var button = document.querySelector(".myButton");
var div = document.querySelector("#show");

button.addEventListener("click",function(){
    div.classList.add("animation");

    setTimeout(()=>{

        div.classList.remove("animation");


    },2000);
})