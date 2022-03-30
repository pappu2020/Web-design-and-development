var homeButton = document.querySelector(".homeButton");
var aboutButton = document.querySelector(".aboutButton");





homeButton.addEventListener("click",function(){
    window.location.assign("#HomeId");
    homeButton.style.color = "blue";
    aboutButton.style.color = "#C7C8C9";
})

aboutButton.addEventListener("click",function(){
    window.location.assign("#aboutSection");
    homeButton.style.color = "#C7C8C9";
    aboutButton.style.color = "blue";
})











var SectionRightContentHeading = document.querySelector(".SectionRightContentHeading");
window.addEventListener("load",function(){
    SectionRightContentHeading.classList.add("SectionRightContentHeadingAnim");
    // SectionRightContentParaAnim.classList.add("SectionRightContentParaAnim");
 
 })