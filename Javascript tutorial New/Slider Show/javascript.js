const slideShowElements = document.querySelectorAll(".content");
let count = 1;
setInterval(() => {
    count++
    let cuurentElement = document.querySelector(".current");
    cuurentElement.classList.remove("current");
    if(count>slideShowElements.length){
        slideShowElements[0].classList.add("current");
        count = 1;
    }
    else{
    cuurentElement.nextElementSibling.classList.add("current");
    }
}, 2000);