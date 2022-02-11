for(var i=0;i<25;i++){
    document.querySelectorAll(".my_button")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        audioPlay(text);
        animation(text);

    });
}


for(var i=0;i<25;i++){
    document.querySelectorAll(".my_button")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        if(text == "A"){
            var divfind = document.getElementById("show");
            divfind.classList.add("animation");
        }

    });
}



document.addEventListener("keypress",function(event){
    var text = event.key;
    audioPlay(text);
    animation(text);

});
    


    
    function audioPlay(text){
        switch(text){
            case "A":
                var audio = new Audio("audio/A.mp3");
                audio.play();
               
                break;
    
            case "B":
                var audio = new Audio("audio/B.mp3");
                audio.play();
                break;
            case "C":
                var audio = new Audio("audio/C.mp3");
                audio.play();
                break;
            case "D":
                var audio = new Audio("audio/D.mp3");
                audio.play();
                break;
            case "E":
                var audio = new Audio("audio/E.mp3");
                audio.play();
                break;
            case "F":
                var audio = new Audio("audio/F.mp3");
                audio.play();
                break;
            case "G":
                var audio = new Audio("audio/G.mp3");
                audio.play();
                break;
                
                
                case "H":
                var audio = new Audio("audio/H.mp3");
                audio.play();
                break;
    
                case "I":
                var audio = new Audio("audio/I.mp3");
                audio.play();
                break;
    
                case "J":
                var audio = new Audio("audio/J.mp3");
                audio.play();
                break;
    
                case "K":
                var audio = new Audio("audio/K.mp3");
                audio.play();
                break;
    
                case "L":
                var audio = new Audio("audio/L.mp3");
                audio.play();
                break;
    
                case "M":
                var audio = new Audio("audio/M.mp3");
                audio.play();
                break;
    
                case "N":
                var audio = new Audio("audio/N.mp3");
                audio.play();
                break;
    
                case "O":
                var audio = new Audio("audio/O.mp3");
                audio.play();
                break;
    
                case "P":
                var audio = new Audio("audio/P.mp3");
                audio.play();
                break;
    
                case "Q":
                var audio = new Audio("audio/Q.mp3");
                audio.play();
                break;
    
                case "R":
                var audio = new Audio("audio/R.mp3");
                audio.play();
                break;
    
                case "S":
                var audio = new Audio("audio/S.mp3");
                audio.play();
                break;
    
                case "T":
                var audio = new Audio("audio/T.mp3");
                audio.play();
                break;
    
                case "U":
                var audio = new Audio("audio/U.mp3");
                audio.play();
                break;
    
                case "V":
                var audio = new Audio("audio/V.mp3");
                audio.play();
                break;
    
                case "W":
                var audio = new Audio("audio/W.mp3");
                audio.play();
                break;
    
                case "X":
                var audio = new Audio("audio/X.mp3");
                audio.play();
                break;
    
                case "Y":
                var audio = new Audio("audio/Y.mp3");
                audio.play();
                break;
    
                case "Z":
                var audio = new Audio("audio/Z.mp3");
                audio.play();
                break;
    
            }
    }


    function animation(text){
        var ani = document.querySelector("."+text);
        ani.classList.add("anim");
       
    }
















    


    
