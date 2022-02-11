var input = document.querySelector("input");
input.addEventListener("copy",function(){
    document.getElementById("para").innerText = "You have copied";
})


input.addEventListener("cut",function(){
    document.getElementById("para").innerText = "You have cut this text";
})

input.addEventListener("paste",function(){
    document.getElementById("para").innerText = "You have paste this text";
})