var num1 = document.querySelector(".num1");
var num2 = document.querySelector(".num2");
var SubBtn = document.querySelector(".SubBtn");
var CheckBtn = document.querySelector(".CheckBtn");
var error = document.querySelector(".error");
var remaining = document.querySelector(".remaining");
var playerOneDiv = document.querySelector(".playerOneDiv");
var playerTwoDiv = document.querySelector(".playerTwoDiv");
let playerOneValue;
let playerTwoValue;

let countDown = 5;



SubBtn.addEventListener("click", function () {
    if (Boolean(num1.value)) {
        if (Boolean(num1.value - 10)) {
            if (num1.value > 0 && num1.value < 20) {
                playerOneValue = num1.value;
                playerOneDiv.style.display = "none";
                playerTwoDiv.style.display = "block";
                error.innerHTML = "";
            }
            else {
                error.innerHTML = "Please, Enter the value between 0 to 20";
                error.style.color = "red";
            }

        }

        else {
            error.innerHTML = "Please, Enter the Number.Text not allowed";
            error.style.color = "red";
        }

    }

    else {
        error.innerHTML = "Please, Enter the Number For Start game";
        error.style.color = "red";
    }
})



CheckBtn.addEventListener("click", function () {
    if (Boolean(num2.value)) {
        if (Boolean(num2.value - 10)) {
            if (num2.value > 0 && num2.value < 20) {
                playerTwoValue = num2.value;


                countDown--;
                
                for(var i=0; i<=countDown;i++){
                    remaining.innerHTML = countDown;
                    remaining.style.color = "red";
                    if (playerTwoValue == playerOneValue) {
                        error.innerText = "Congratualations!! You Win";
                        error.style.color = "green";
                        
                        break;
                        
                        
                    }
                    
                    
                     else {
                        error.innerText = "Sorry!!You loose.Player One Won";
                        error.style.color = "red";
                        
                        
                    }
                    
                }
               

                
                
                
                
                
                
                
                
                // if (countDown != 0) {

                //     remaining.innerHTML = countDown;
                //     remaining.style.color = "red";

                // }

                // else {
                //     remaining.innerHTML ="";
                //     if (playerTwoValue == playerOneValue) {
                //         error.innerHTML = "Congratualations!! You Win";
                //         error.style.color = "green";
                //     }

                //     else {
                //         error.innerHTML = "Sorry!!You loose.Player One Won";
                //         error.style.color = "red";
                //     }

                     

                // }

               





            }
            else {
                error.innerHTML = "Please, Enter the value between 0 to 20";
                error.style.color = "red";
            }

        }

        else {
            error.innerHTML = "Please, Enter the Number";
            error.style.color = "red";
        }

    }

    else {
        error.innerHTML = "Please, Enter the Number For Start game";
        error.style.color = "red";
    }
})



