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


