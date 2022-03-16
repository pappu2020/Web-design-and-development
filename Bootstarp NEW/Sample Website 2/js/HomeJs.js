var courses = document.getElementById("courses");
var CourseSummary = document.getElementById("CourseSummary");
var nav2 = document.querySelector(".nav2");


courses.addEventListener("mouseenter",function(){
    CourseSummary.style.display="block";
    nav2.style.color="#6366F1";

   
})

CourseSummary.addEventListener("mouseleave",function(){
    CourseSummary.style.display="none";
    nav2.style.color="white";
    
})




