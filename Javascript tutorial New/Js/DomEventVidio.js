const vedio = document.querySelector("div video");

vedio.addEventListener("canplay",function(){
   console.log("Vedio is ready to playing");
});

vedio.addEventListener("playing",function(){
    console.log("Vedio is playing");
 });

 vedio.addEventListener("pause",function(){
    console.log("Vedio is pause");
 });

 vedio.addEventListener("ended",function(){
    console.log("Vedio is ended");
 });