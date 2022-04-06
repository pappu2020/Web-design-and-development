// var CvButton = document.getElementById("CvButton");


// CvButton.addEventListener("click",function(){
//     window.location.assign("./Cv.html");
// })







var homeButton = document.querySelector(".homeButton");
var aboutButton = document.querySelector(".aboutButton");
var serviceButton = document.querySelector(".serviceButton");
var eduButton =  document.querySelector(".eduButton");
var skillsButton = document.querySelector(".skillsButton");
var portfolioButton = document.querySelector(".portfolioButton");
var CertificationButton = document.querySelector(".CertificationButton");
var contactMeButton = document.querySelector(".contactMeButton");




homeButton.addEventListener("click",function(){
    window.location.assign("#HomeId");
    homeButton.style.color = "blue";
    aboutButton.style.color = "white";
    serviceButton.style.color = "white";
    eduButton.style.color = "white";
    skillsButton.style.color = "white";
    portfolioButton.style.color = "white";
    CertificationButton.style.color = "white";
    contactMeButton.style.color = "white";
})

aboutButton.addEventListener("click",function(){
    window.location.assign("#aboutSection");
    homeButton.style.color = "white";
    aboutButton.style.color = "blue";
    serviceButton.style.color = "white";
    eduButton.style.color = "white";
    skillsButton.style.color = "white";
    CertificationButton.style.color = "white";
    portfolioButton.style.color = "white";
    contactMeButton.style.color = "white";
})


serviceButton.addEventListener("click",function(){
    window.location.assign("#serviceSection");
    homeButton.style.color = "white";
    aboutButton.style.color = "white";
    eduButton.style.color = "white";
    skillsButton.style.color = "white";
    portfolioButton.style.color = "white";
    CertificationButton.style.color = "white";
    serviceButton.style.color = "blue";
    contactMeButton.style.color = "white";
})


eduButton.addEventListener("click",function(){
    window.location.assign("#educationalQualification");
    homeButton.style.color = "white";
    serviceButton.style.color = "white";
    aboutButton.style.color = "white";
    skillsButton.style.color = "white";
    portfolioButton.style.color = "white";
    CertificationButton.style.color = "white";
    eduButton.style.color = "blue";
    contactMeButton.style.color = "white";
})


skillsButton.addEventListener("click",function(){
    window.location.assign("#skillsSction");
    homeButton.style.color = "white";
    serviceButton.style.color = "white";
    aboutButton.style.color = "white";
    eduButton.style.color = "white";
    portfolioButton.style.color = "white";
    CertificationButton.style.color = "white";
    skillsButton.style.color = "blue";
    contactMeButton.style.color = "white";
})



portfolioButton.addEventListener("click",function(){
    window.location.assign("#portfolioSection");
    homeButton.style.color = "white";
    serviceButton.style.color = "white";
    aboutButton.style.color = "white";
    eduButton.style.color = "white";
    skillsButton.style.color = "white";
    CertificationButton.style.color = "white";
    portfolioButton.style.color = "blue";
    contactMeButton.style.color = "white";
})

CertificationButton.addEventListener("click",function(){
    window.location.assign("#Certicationsection");
    homeButton.style.color = "white";
    serviceButton.style.color = "white";
    aboutButton.style.color = "white";
    eduButton.style.color = "white";
    skillsButton.style.color = "white";
    portfolioButton.style.color = "white";
    contactMeButton.style.color = "white";
    CertificationButton.style.color = "blue";
})


contactMeButton.addEventListener("click",function(){
    window.location.assign("#ContactMeSection");
    homeButton.style.color = "white";
    serviceButton.style.color = "white";
    aboutButton.style.color = "white";
    eduButton.style.color = "white";
    skillsButton.style.color = "white";
    portfolioButton.style.color = "white";
    CertificationButton.style.color = "white";
    contactMeButton.style.color = "blue";
})











var SectionRightContentHeading = document.querySelector(".SectionRightContentHeading");
window.addEventListener("load",function(){
    SectionRightContentHeading.classList.add("SectionRightContentHeadingAnim");
    // SectionRightContentParaAnim.classList.add("SectionRightContentParaAnim");
 
 })




 var stage1 = document.querySelector(".stage1");
 var stage2 = document.querySelector(".stage2");
 var stage3 = document.querySelector(".stage3");
 var stage4 = document.querySelector(".stage4");
 var stage5 = document.querySelector(".stage5");
 var stage6 = document.querySelector(".stage6");
 var stage7 = document.querySelector(".stage7");

 var stage1Para = document.querySelector(".stage1Para");
 var stage2Para = document.querySelector(".stage2Para");
 var stage3Para = document.querySelector(".stage3Para");
 var stage4Para = document.querySelector(".stage4Para");
 var stage5Para = document.querySelector(".stage5Para");
 var stage6Para = document.querySelector(".stage6Para");
 var stage7Para = document.querySelector(".stage7Para");


 stage1.addEventListener("mouseover",function(){
     stage1.style.border = "3px solid #0DCAF0"
     stage1Para.style.color = "#0DCAF0";
 })

 stage1.addEventListener("mouseleave",function(){
    stage1.style.border = "none";
    stage1Para.style.color = "white";
})


stage1Para.addEventListener("mouseover",function(){
    stage1.style.border = "3px solid #0DCAF0"
    stage1Para.style.color = "#0DCAF0";
})

stage1Para.addEventListener("mouseleave",function(){
   stage1.style.border = "none";
   stage1Para.style.color = "white";
})




stage2.addEventListener("mouseover",function(){
    stage2.style.border = "3px solid #0DCAF0"
    stage2Para.style.color = "#0DCAF0";
})

stage2.addEventListener("mouseleave",function(){
   stage2.style.border = "none";
   stage2Para.style.color = "white";
})


stage2Para.addEventListener("mouseover",function(){
   stage2.style.border = "3px solid #0DCAF0"
   stage2Para.style.color = "#0DCAF0";
})

stage2Para.addEventListener("mouseleave",function(){
  stage2.style.border = "none";
  stage2Para.style.color = "white";
})



stage3.addEventListener("mouseover",function(){
    stage3.style.border = "3px solid #0DCAF0"
    stage3Para.style.color = "#0DCAF0";
})

stage3.addEventListener("mouseleave",function(){
    stage3.style.border = "none";
    stage3Para.style.color = "white";
})


stage3Para.addEventListener("mouseover",function(){
    stage3.style.border = "3px solid #0DCAF0"
    stage3Para.style.color = "#0DCAF0";
})

stage3Para.addEventListener("mouseleave",function(){
    stage3.style.border = "none";
    stage3Para.style.color = "white";
})




stage4.addEventListener("mouseover",function(){
    stage4.style.border = "3px solid #0DCAF0"
    stage4Para.style.color = "#0DCAF0";
})

stage4.addEventListener("mouseleave",function(){
    stage4.style.border = "none";
    stage4Para.style.color = "white";
})


stage4Para.addEventListener("mouseover",function(){
    stage4.style.border = "3px solid #0DCAF0"
    stage4Para.style.color = "#0DCAF0";
})

stage4Para.addEventListener("mouseleave",function(){
    stage4.style.border = "none";
    stage4Para.style.color = "white";
})



stage5.addEventListener("mouseover",function(){
    stage5.style.border = "3px solid #0DCAF0"
    stage5Para.style.color = "#0DCAF0";
})

stage5.addEventListener("mouseleave",function(){
    stage5.style.border = "none";
    stage5Para.style.color = "white";
})


stage5Para.addEventListener("mouseover",function(){
    stage5.style.border = "3px solid #0DCAF0"
    stage5Para.style.color = "#0DCAF0";
})

stage5Para.addEventListener("mouseleave",function(){
    stage5.style.border = "none";
    stage5Para.style.color = "white";
})


stage6.addEventListener("mouseover",function(){
    stage6.style.border = "3px solid #0DCAF0"
    stage6Para.style.color = "#0DCAF0";
})

stage6.addEventListener("mouseleave",function(){
    stage6.style.border = "none";
    stage6Para.style.color = "white";
})


stage6Para.addEventListener("mouseover",function(){
    stage6.style.border = "3px solid #0DCAF0"
    stage6Para.style.color = "#0DCAF0";
})

stage6Para.addEventListener("mouseleave",function(){
    stage6.style.border = "none";
    stage6Para.style.color = "white";
})



stage7.addEventListener("mouseover",function(){
    stage7.style.border = "3px solid #0DCAF0"
    stage7Para.style.color = "#0DCAF0";
})

stage7.addEventListener("mouseleave",function(){
    stage7.style.border = "none";
    stage7Para.style.color = "white";
})


stage7Para.addEventListener("mouseover",function(){
    stage7.style.border = "3px solid #0DCAF0"
    stage7Para.style.color = "#0DCAF0";
})

stage7Para.addEventListener("mouseleave",function(){
    stage7.style.border = "none";
    stage7Para.style.color = "white";
})




// Educational Background


var eduBack1 = document.getElementById("eduBack1");
var edushow1 = document.querySelector(".edushow1");

window.addEventListener("load",function(){
    // eduBack1.style.marginTop = "50px";
    // eduBack2.style.marginTop = "50px";
    // eduBack3.style.marginTop = "50px";
    // eduBack4.style.marginTop = "50px";

    eduBack1.style.display = "none";
    eduBack2.style.display = "none";
    eduBack3.style.display = "none";
    eduBack4.style.display = "none";

})

edushow1.addEventListener("mousemove",function(){

    // eduBack1.style.display = "block";
    eduBack1.classList.add("eduBack1Anim");
    
    setTimeout(()=>{

        
        eduBack1.style.display = "block";
        // eduBack2.style.display = "block";
        // eduBack3.style.display = "block";
        // eduBack4.style.display = "block";

    },100);
    // eduBack2.style.display = "block";
     eduBack2.classList.add("eduBack2Anim");
    setTimeout(()=>{

        
        eduBack2.style.display = "block";

    },200);
    // eduBack3.style.display = "block";
     eduBack3.classList.add("eduBack3Anim");
    setTimeout(()=>{

        
        eduBack3.style.display = "block";

    },300);
    // eduBack4.style.display = "block";
    eduBack4.classList.add("eduBack4Anim");
    setTimeout(()=>{

        
        eduBack4.style.display = "block";

    },400);
    
})































// eduButton.addEventListener("click",function(){
//     eduBack1.classList.add("eduBack1Anim");
// })

var eduBack2 = document.getElementById("eduBack2");

// eduButton.addEventListener("click",function(){
//     eduBack2.classList.add("eduBack2Anim");
// })

 var eduBack3 = document.getElementById("eduBack3");

// eduButton.addEventListener("click",function(){
//     eduBack3.classList.add("eduBack3Anim");
// })

var eduBack4 = document.getElementById("eduBack4");

// eduButton.addEventListener("click",function(){
//     eduBack4.classList.add("eduBack4Anim");
// })