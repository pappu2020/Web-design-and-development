
var courses = document.getElementById("courses");
var CourseSummary = document.getElementById("CourseSummary");
var nav2 = document.querySelector(".nav2");
var nav5 = document.querySelector(".nav5");

var branches = document.getElementById("branches");
var branchesId= document.getElementById("branchesId");



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











