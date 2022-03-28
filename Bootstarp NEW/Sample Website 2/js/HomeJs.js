var preloader = document.getElementById("preloader");

window.addEventListener("load",function(){
    setTimeout(()=>{
    preloader.style.display="none";
    },500);
    
    
}) 



var courses = document.getElementById("courses");
var CourseSummary = document.getElementById("CourseSummary");
var nav2 = document.querySelector(".nav2");
var nav5 = document.querySelector(".nav5");




var chooseImageid = document.getElementById("chooseImageid");
var chooseParaHeadingid = document.getElementById("chooseParaHeadingid");
var chooseParaid = document.getElementById("chooseParaid");

var chooseImageid2 = document.getElementById("chooseImageid2");
var chooseParaHeadingid2 = document.getElementById("chooseParaHeadingid2");
var chooseParaid2 = document.getElementById("chooseParaid2");

var chooseImageid3 = document.getElementById("chooseImageid3");
var chooseParaHeadingid3 = document.getElementById("chooseParaHeadingid3");
var chooseParaid3 = document.getElementById("chooseParaid3");

var chooseImageid4 = document.getElementById("chooseImageid4");
var chooseParaHeadingid4 = document.getElementById("chooseParaHeadingid4");
var chooseParaid4 = document.getElementById("chooseParaid4");

var branches = document.getElementById("branches");
var branchesId= document.getElementById("branchesId");


var cartButton = document.getElementById("cartButton");
var Cartoutput  = document.getElementById("Cartoutput");
var cartOutputButton = document.getElementById("cartOutputButton");
var count = 0;

cartButton.addEventListener("click",function(){
    count++;
    Cartoutput.innerText = count;
})

cartOutputButton.addEventListener("click",function(){
    window.location.assign("./cart.html");
})
















branches.addEventListener("mouseenter",function(){
    branchesId.style.display = "block";
    branchesId.style.marginLeft = "736px";
    branchesId.style.marginTop = "55px";
    CourseSummary.style.display = "none";
    nav2.style.color = "white";
    nav5.style.color = "#6366F1";


   

})


branchesId.addEventListener("mouseleave",function(){
    branchesId.style.display = "none";
    nav5.style.color = "white";
   
})








courses.addEventListener("mouseenter", function () {
    CourseSummary.style.display = "block";
    nav2.style.color = "#6366F1";
    branchesId.style.display = "none";
    nav5.style.color = "white";


})



CourseSummary.addEventListener("mouseleave", function () {
    CourseSummary.style.display = "none";
    nav2.style.color = "white";

})


chooseImageid.addEventListener("mouseover", function () {
    chooseParaHeadingid.style.color = "#0DCAF0";
    chooseParaid.style.color = "#0DCAF0";
    chooseImageid.style.border = "5px solid #0DCAF0";
})

chooseImageid.addEventListener("mouseleave", function () {
    chooseParaHeadingid.style.color = "white";
    chooseParaid.style.color = "white";
    chooseImageid.style.border = "none";
})


chooseImageid2.addEventListener("mouseover", function () {
    chooseParaHeadingid2.style.color = "#0DCAF0";
    chooseParaid2.style.color = "#0DCAF0";
    chooseImageid2.style.border = "5px solid #0DCAF0";
})

chooseImageid2.addEventListener("mouseleave", function () {
    chooseParaHeadingid2.style.color = "white";
    chooseParaid2.style.color = "white";
    chooseImageid2.style.border = "none";
})

chooseImageid3.addEventListener("mouseover", function () {
    chooseParaHeadingid3.style.color = "#0DCAF0";
    chooseParaid3.style.color = "#0DCAF0";
    chooseImageid3.style.border = "5px solid #0DCAF0";
})

chooseImageid3.addEventListener("mouseleave", function () {
    chooseParaHeadingid3.style.color = "white";
    chooseParaid3.style.color = "white";
    chooseImageid3.style.border = "none";
})

chooseImageid4.addEventListener("mouseover", function () {
    chooseParaHeadingid4.style.color = "#0DCAF0";
    chooseParaid4.style.color = "#0DCAF0";
    chooseImageid4.style.border = "5px solid #0DCAF0";
})

chooseImageid4.addEventListener("mouseleave", function () {
    chooseParaHeadingid4.style.color = "white";
    chooseParaid4.style.color = "white";
    chooseImageid4.style.border = "none";
})







chooseParaHeadingid.addEventListener("mouseover", function () {
    chooseParaHeadingid.style.color = "#0DCAF0";
    chooseParaid.style.color = "#0DCAF0";
    chooseImageid.style.border = "5px solid #0DCAF0";
})

chooseParaHeadingid.addEventListener("mouseleave", function () {
    chooseParaHeadingid.style.color = "white";
    chooseParaid.style.color = "white";
    chooseImageid.style.border = "none";
})


chooseParaHeadingid2.addEventListener("mouseover", function () {
    chooseParaHeadingid2.style.color = "#0DCAF0";
    chooseParaid2.style.color = "#0DCAF0";
    chooseImageid2.style.border = "5px solid #0DCAF0";
})

chooseParaHeadingid2.addEventListener("mouseleave", function () {
    chooseParaHeadingid2.style.color = "white";
    chooseParaid2.style.color = "white";
    chooseImageid2.style.border = "none";
})

chooseParaHeadingid3.addEventListener("mouseover", function () {
    chooseParaHeadingid3.style.color = "#0DCAF0";
    chooseParaid3.style.color = "#0DCAF0";
    chooseImageid3.style.border = "5px solid #0DCAF0";
})

chooseParaHeadingid3.addEventListener("mouseleave", function () {
    chooseParaHeadingid3.style.color = "white";
    chooseParaid3.style.color = "white";
    chooseImageid3.style.border = "none";
})

chooseParaHeadingid4.addEventListener("mouseover", function () {
    chooseParaHeadingid4.style.color = "#0DCAF0";
    chooseParaid4.style.color = "#0DCAF0";
    chooseImageid4.style.border = "5px solid #0DCAF0";
})

chooseParaHeadingid4.addEventListener("mouseleave", function () {
    chooseParaHeadingid4.style.color = "white";
    chooseParaid4.style.color = "white";
    chooseImageid4.style.border = "none";
})




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

// Password.addEventListener("focus",function(){
//     message.style.display = "block";
//     message.style.marginTop = "15px";
//     message.style.marginBottom = "15px";
//     message.style.border = "3px solid black";
//     message.style.position = "absolute";


// })


Password.addEventListener("focus", function () {
    message.style.display = "block";
    message.style.marginTop = "-140px";

    message.style.border = "3px solid black";
    message.style.position = "absolute";
    message.style.marginLeft = "300px";


})

Password.addEventListener("blur", function () {
    message.style.display = "none";
})

Password.addEventListener("keyup", function () {
    var lowerCaseLetters = /[a-z]/g;
    if (Password.value.match(lowerCaseLetters)) {
        lower.classList.add("valid");
        lower.classList.remove("invalid");
    }

    else {
        lower.classList.remove("valid");
        lower.classList.add("invalid");
    }



    var upperCaseLetters = /[A-Z]/g;
    if (Password.value.match(upperCaseLetters)) {
        upper.classList.add("valid");
        upper.classList.remove("invalid");
    }

    else {
        upper.classList.remove("valid");
        upper.classList.add("invalid");
    }


    var numbers = /[0-9]/g;
    if (Password.value.match(numbers)) {
        num.classList.add("valid");
        num.classList.remove("invalid");
    }

    else {
        num.classList.remove("valid");
        num.classList.add("invalid");
    }

    if (Password.value.length >= 8) {
        min.classList.remove("invalid");
        min.classList.add("valid");
    } else {
        min.classList.remove("valid");
        min.classList.add("invalid");
    }
})


function showPassword() {
    if (Password.type == "password") {
        Password.type = "text";
    }

    else {
        Password.type = "password";
    }
}

function showConPassword() {
    if (Confirm_pass.type == "password") {
        Confirm_pass.type = "text";
    }

    else {
        Confirm_pass.type = "password";
    }
}



form.addEventListener("submit", eventHandler);


function eventHandler(e) {
    e.preventDefault();

    if (Confirm_pass.value != Password.value) {
        document.getElementById("passwordCheck").innerText = "Password do not match";
        return false;
    }

    else {
        confirm("Your registration complete!!!")
    }

    if (true) {
        window.location.assign("./Home.html");
    }




}








// Wrap every letter in a span
var textWrapper = document.querySelector('.textAnimation1 .letters1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.textAnimation1 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.textAnimation1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  // Wrap every letter in a span
var textWrapper2 = document.querySelector('.textAnimation2 .letters2');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.textAnimation2 .letter2',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.textAnimation2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });









