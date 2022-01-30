var btn = document.querySelectorAll(".myButton");

Array.from(btn).map((button)=>{
   button.addEventListener("click",function(e){
       document.getElementById("output").innerText = e.target.innerText;
   })
});