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
        serviceSectionContainerId6.classList.add("active1");
    }
    else {
        serviceSectionContainerId6.classList.remove("active1");
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











