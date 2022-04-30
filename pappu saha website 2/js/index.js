window.addEventListener("scroll",()=>{
    let contentaboutSectionLeft = document.getElementById("aboutSectionLeftId");
    let contentaboutSectionRight = document.getElementById("aboutSectionRightId"); 
    let contentPositionaboutSectionLeft = contentaboutSectionLeft.getBoundingClientRect().top;
    let contentPositionaboutSectionRight = contentaboutSectionRight.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(contentPositionaboutSectionLeft && contentPositionaboutSectionRight  < screenPosition){
        contentaboutSectionLeft.classList.add("active");
        contentaboutSectionRight.classList.add("active");
    }
})



// var myCardDiv = document.getElementById("myCardDiv");

// myCardDiv.addEventListener("mouseenter",function(){
//     myCardDiv.classList.add("serviceSectionAnimClass");
    
// })

// myCardDiv.addEventListener("mouseleave",function(){
//     myCardDiv.classList.remove("serviceSectionAnimClass");
// })

var myCardDivid1 = document.querySelector(".myCardDivid1");
var myCardDivid2 = document.querySelector(".myCardDivid2");
var myCardDivid3 = document.querySelector(".myCardDivid3");
var myCardDivid4 = document.querySelector(".myCardDivid4");
var myCardDivid5 = document.querySelector(".myCardDivid5");
var myCardDivid6 = document.querySelector(".myCardDivid6");


myCardDivid1.addEventListener("mouseenter",function(){
    myCardDivid1.classList.add("serviceSectionAnimClass");
    
})

myCardDivid1.addEventListener("mouseleave",function(){
    myCardDivid1.classList.remove("serviceSectionAnimClass");
})


myCardDivid2.addEventListener("mouseenter",function(){
    myCardDivid2.classList.add("serviceSectionAnimClass");
    
})

myCardDivid2.addEventListener("mouseleave",function(){
    myCardDivid2.classList.remove("serviceSectionAnimClass");
})

myCardDivid3.addEventListener("mouseenter",function(){
    myCardDivid3.classList.add("serviceSectionAnimClass");
    
})

myCardDivid3.addEventListener("mouseleave",function(){
    myCardDivid3.classList.remove("serviceSectionAnimClass");
})


myCardDivid4.addEventListener("mouseenter",function(){
    myCardDivid4.classList.add("serviceSectionAnimClass");
    
})

myCardDivid4.addEventListener("mouseleave",function(){
    myCardDivid4.classList.remove("serviceSectionAnimClass");
})

myCardDivid5.addEventListener("mouseenter",function(){
    myCardDivid5.classList.add("serviceSectionAnimClass");
    
})

myCardDivid5.addEventListener("mouseleave",function(){
    myCardDivid5.classList.remove("serviceSectionAnimClass");
})

myCardDivid6.addEventListener("mouseenter",function(){
    myCardDivid6.classList.add("serviceSectionAnimClass");
    
})

myCardDivid6.addEventListener("mouseleave",function(){
    myCardDivid6.classList.remove("serviceSectionAnimClass");
})