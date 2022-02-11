var input = document.getElementById("myButton");
var text = document.getElementById("text");
var textValue = text.value;
input.addEventListener("click",function(){
    var textValue=document.getElementById("output").innerText = text.value;

    try{

        if(textValue<=7){
            throw "You are Not eligible for this tournament";
        }
        
        
        
        else if(textValue <=12){
            throw "You are under D group";
        }
        
        else if(textValue <=18){
            throw "You are under C group";
        }
        
        else if(textValue <=25){
            throw "You are under B group";
        }
        
        else if(textValue <=30){
            throw "You are under A group";
        }
        
        else{
            throw "You are not eligible for this tournament";
        }
        
        
        }
        
        catch(err){
           document.getElementById("outputValid").innerText = err;
        }
});



document.getElementById("reset").addEventListener("click",function(){
    location.assign("Try_catch_error.html");
});




