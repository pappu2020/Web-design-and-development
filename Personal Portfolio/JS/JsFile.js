var SectionRightContentHeading = document.querySelector(".SectionRightContentHeading");
var SectionRightContentParaAnim = document.querySelector(".SectionRightContentParaAnim");
var aboutButton = document.getElementById("aboutButton");
var aboutMeSection = document.getElementById("aboutMeSection");
var HomeButton  =document.getElementById("HomeButton");

var aboutContentId1 = document.getElementById("aboutContentId1");
var aboutContentId2 = document.getElementById("aboutContentId2");
var aboutContentId3 = document.getElementById("aboutContentId3");
var aboutContentId4 = document.getElementById("aboutContentId4");


HomeButton.addEventListener("click",function(){
   HomeButton.style.color = "blue";
   aboutButton.style.color = "black";
   window.location.assign("#Home");
})

window.addEventListener("load",function(){
   SectionRightContentHeading.classList.add("SectionRightContentHeadingAnim");
   SectionRightContentParaAnim.classList.add("SectionRightContentParaAnim");

})

aboutButton.addEventListener("click",function(){
   window.location.assign("#about");
   aboutMeSection.classList.add("aboutanim");
   aboutContentId1.classList.add("aboutContentanim1");
   aboutContentId2.classList.add("aboutContentanim2");
   aboutContentId3.classList.add("aboutContentanim3");
   aboutContentId4.classList.add("aboutContentanim4");
   HomeButton.style.color = "black";
   aboutButton.style.color = "blue";
})