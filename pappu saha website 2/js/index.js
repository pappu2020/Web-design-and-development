window.addEventListener("scroll", () => {
    let contentaboutSectionLeft = document.getElementById("aboutSectionLeftId");

    let contentaboutSectionRight = document.getElementById("aboutSectionRightId");

    let contentPositionaboutSectionLeft = contentaboutSectionLeft.getBoundingClientRect().top;

    let contentPositionaboutSectionRight = contentaboutSectionRight.getBoundingClientRect().top;

    let screenPositionForAboutSec = window.innerHeight / 0.8;

    if (contentPositionaboutSectionLeft && contentPositionaboutSectionRight < screenPositionForAboutSec) {
        contentaboutSectionLeft.classList.add("active");
        contentaboutSectionRight.classList.add("active");


    }

    else {
        contentaboutSectionLeft.classList.remove("active");
        contentaboutSectionRight.classList.remove("active");
    }


})


window.addEventListener("scroll", () => {
    let serviceSectionContainerId = document.getElementById("serviceSectionContainerId");

    let contentPositionServiceSec = serviceSectionContainerId.getBoundingClientRect().top;


    let screenPositionForServiceSec = window.innerHeight;


    if (contentPositionServiceSec < screenPositionForServiceSec) {
        serviceSectionContainerId.classList.add("active1");
    }

    else {
        serviceSectionContainerId.classList.remove("active1");
    }
})

window.addEventListener("scroll", () => {
    let serviceSectionContainerId2 = document.getElementById("serviceSectionContainerId2");

    let contentPositionServiceSec2 = serviceSectionContainerId2.getBoundingClientRect().top;


    let screenPositionForServiceSec2 = window.innerHeight;


    if (contentPositionServiceSec2 < screenPositionForServiceSec2) {
        serviceSectionContainerId2.classList.add("active1");
    }

    else {
        serviceSectionContainerId2.classList.remove("active1");
    }
})

window.addEventListener("scroll", () => {
    let serviceSectionContainerId3 = document.getElementById("serviceSectionContainerId3");

    let contentPositionServiceSec3 = serviceSectionContainerId3.getBoundingClientRect().top;


    let screenPositionForServiceSec3 = window.innerHeight;


    if (contentPositionServiceSec3 < screenPositionForServiceSec3) {
        serviceSectionContainerId3.classList.add("active1");
    }
    else {
        serviceSectionContainerId3.classList.remove("active1");
    }
})

window.addEventListener("scroll", () => {
    let serviceSectionContainerId4 = document.getElementById("serviceSectionContainerId4");

    let contentPositionServiceSec4 = serviceSectionContainerId4.getBoundingClientRect().top;


    let screenPositionForServiceSec4 = window.innerHeight;


    if (contentPositionServiceSec4 < screenPositionForServiceSec4) {
        serviceSectionContainerId4.classList.add("active1");
    }
    else {
        serviceSectionContainerId4.classList.remove("active1");
    }
})

window.addEventListener("scroll", () => {
    let serviceSectionContainerId5 = document.getElementById("serviceSectionContainerId5");

    let contentPositionServiceSec5 = serviceSectionContainerId5.getBoundingClientRect().top;


    let screenPositionForServiceSec5 = window.innerHeight;


    if (contentPositionServiceSec5 < screenPositionForServiceSec5) {
        serviceSectionContainerId5.classList.add("active1");
    }
    else {
        serviceSectionContainerId5.classList.remove("active1");
    }
})

window.addEventListener("scroll", () => {
    let serviceSectionContainerId6 = document.getElementById("serviceSectionContainerId6");

    let contentPositionServiceSec6 = serviceSectionContainerId6.getBoundingClientRect().top;


    let screenPositionForServiceSec6 = window.innerHeight;


    if (contentPositionServiceSec6 < screenPositionForServiceSec6) {
        serviceSectionContainerId6.classList.add("active2");
    }
    else {
        serviceSectionContainerId6.classList.remove("active2");
    }
})





var myCardDivid1 = document.querySelector(".myCardDivid1");
var myCardDivid2 = document.querySelector(".myCardDivid2");
var myCardDivid3 = document.querySelector(".myCardDivid3");
var myCardDivid4 = document.querySelector(".myCardDivid4");
var myCardDivid5 = document.querySelector(".myCardDivid5");
var myCardDivid6 = document.querySelector(".myCardDivid6");


myCardDivid1.addEventListener("mouseenter", function () {
    myCardDivid1.classList.add("serviceSectionAnimClass");

})

myCardDivid1.addEventListener("mouseleave", function () {
    myCardDivid1.classList.remove("serviceSectionAnimClass");
})


myCardDivid2.addEventListener("mouseenter", function () {
    myCardDivid2.classList.add("serviceSectionAnimClass");

})

myCardDivid2.addEventListener("mouseleave", function () {
    myCardDivid2.classList.remove("serviceSectionAnimClass");
})

myCardDivid3.addEventListener("mouseenter", function () {
    myCardDivid3.classList.add("serviceSectionAnimClass");

})

myCardDivid3.addEventListener("mouseleave", function () {
    myCardDivid3.classList.remove("serviceSectionAnimClass");
})


myCardDivid4.addEventListener("mouseenter", function () {
    myCardDivid4.classList.add("serviceSectionAnimClass");

})

myCardDivid4.addEventListener("mouseleave", function () {
    myCardDivid4.classList.remove("serviceSectionAnimClass");
})

myCardDivid5.addEventListener("mouseenter", function () {
    myCardDivid5.classList.add("serviceSectionAnimClass");

})

myCardDivid5.addEventListener("mouseleave", function () {
    myCardDivid5.classList.remove("serviceSectionAnimClass");
})

myCardDivid6.addEventListener("mouseenter", function () {
    myCardDivid6.classList.add("serviceSectionAnimClass");

})

myCardDivid6.addEventListener("mouseleave", function () {
    myCardDivid6.classList.remove("serviceSectionAnimClass");
})








window.addEventListener("scroll", () => {
    let progressBar1 = document.getElementById("progressBar1");

    let contentPositionprogressBar1 = progressBar1.getBoundingClientRect().top;


    let screenPositionForprogressBar1 = window.innerHeight;


    if (contentPositionprogressBar1 < screenPositionForprogressBar1) {
        progressBar1.classList.add("progressSectionAnimClass1");
    }
    else {
        progressBar1.classList.remove("progressSectionAnimClass1");
    }
})


window.addEventListener("scroll", () => {
    let progressBar2 = document.getElementById("progressBar2");

    let contentPositionprogressBar2 = progressBar2.getBoundingClientRect().top;


    let screenPositionForprogressBar2 = window.innerHeight;


    if (contentPositionprogressBar2 < screenPositionForprogressBar2) {
        progressBar2.classList.add("progressSectionAnimClass2");
    }
    else {
        progressBar2.classList.remove("progressSectionAnimClass2");
    }
})

window.addEventListener("scroll", () => {
    let progressBar3 = document.getElementById("progressBar3");

    let contentPositionprogressBar3 = progressBar3.getBoundingClientRect().top;


    let screenPositionForprogressBar3 = window.innerHeight;


    if (contentPositionprogressBar3 < screenPositionForprogressBar3) {
        progressBar3.classList.add("progressSectionAnimClass3");
    }
    else {
        progressBar3.classList.remove("progressSectionAnimClass3");
    }
})


window.addEventListener("scroll", () => {
    let progressBar4 = document.getElementById("progressBar4");

    let contentPositionprogressBar4 = progressBar4.getBoundingClientRect().top;


    let screenPositionForprogressBar4 = window.innerHeight;


    if (contentPositionprogressBar4 < screenPositionForprogressBar4) {
        progressBar4.classList.add("progressSectionAnimClass4");
    }
    else {
        progressBar4.classList.remove("progressSectionAnimClass4");
    }
})

window.addEventListener("scroll", () => {
    let progressBar5 = document.getElementById("progressBar5");

    let contentPositionprogressBar5 = progressBar5.getBoundingClientRect().top;


    let screenPositionForprogressBar5 = window.innerHeight;


    if (contentPositionprogressBar5 < screenPositionForprogressBar5) {
        progressBar5.classList.add("progressSectionAnimClass5");
    }
    else {
        progressBar5.classList.remove("progressSectionAnimClass5");
    }
})









window.addEventListener("scroll", () => {
    let Myportfolioid = document.getElementById("Myportfolioid");

    let contentPositionMyportfolioid = Myportfolioid.getBoundingClientRect().top;


    let screenPositionForMyportfolioid = window.innerHeight;


    if (contentPositionMyportfolioid < screenPositionForMyportfolioid) {
        Myportfolioid.classList.add("portfolioSectionAnimClass1");
    }
    else {
        Myportfolioid.classList.remove("portfolioSectionAnimClass1");
    }
})



window.addEventListener("scroll", () => {
    let Myportfolioid2 = document.getElementById("myPortfolioCardid2");

    let contentPositionMyportfolioid2 = Myportfolioid2.getBoundingClientRect().top;


    let screenPositionForMyportfolioid2 = window.innerHeight;


    if (contentPositionMyportfolioid2 < screenPositionForMyportfolioid2) {
        Myportfolioid2.classList.add("portfolioSectionAnimClass2");
    }
    else {
        Myportfolioid2.classList.remove("portfolioSectionAnimClass2");
    }
})

window.addEventListener("scroll", () => {
    let Myportfolioid3 = document.getElementById("myPortfolioCardid3");

    let contentPositionMyportfolioid3 = Myportfolioid3.getBoundingClientRect().top;


    let screenPositionForMyportfolioid3 = window.innerHeight;


    if (contentPositionMyportfolioid3 < screenPositionForMyportfolioid3) {
        Myportfolioid3.classList.add("portfolioSectionAnimClass1");
    }
    else {
        Myportfolioid3.classList.remove("portfolioSectionAnimClass1");
    }
})





window.addEventListener("scroll", () => {
    let myForm = document.querySelector(".myForm")

    let contentPositionmyForm = myForm.getBoundingClientRect().top;


    let screenPositionFormyForm = window.innerHeight/0.9;


    if (contentPositionmyForm < screenPositionFormyForm) {
        myForm.classList.add("active3");
    }
    else {
        myForm.classList.remove("active3");
    }
})





var aboutMeMenu = document.querySelector(".aboutMeMenu");
aboutMeMenu.addEventListener("click",function(){
    aboutMeMenu.style.color = "red";
})


