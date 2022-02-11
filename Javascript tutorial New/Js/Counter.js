var start = document.getElementById("start");
var off = document.getElementById("off");
var output = document.getElementById("countdown");

let count = 0;
output.textContent = count;


function countdownTimer(){    
     count++;
     output.textContent = count;

    
}


start.addEventListener("click",function(){
    var myInterval = setInterval(countdownTimer,1000);
    output.style.color="green";

    off.addEventListener("click",function(){
        clearInterval(myInterval);

        output.style.color="red";
    });


});


var reset = document.getElementById("reset");
reset.addEventListener("click",function(){
    location.assign("Counter.html");
})
















// const myInterval;

// var input=prompt("Enter the time: ");
// var input = parseInt(input,10);
// start.addEventListener("click",function(){
//     let count = 1;
//     output.textContent = count;

//     const myInterval = setInterval(() => {
       
//        count++;
//        output.textContent = count;
    
//     }, 1000);

// });

// off.addEventListener("click",function(){
//     clearInterval(myInterval);
// })





// // if(count == input){
// //     clearInterval(myInterval);
// //    } 


// // off.addEventListener("click",function(){
    
// //     clearInterval(myInterval);
// // })