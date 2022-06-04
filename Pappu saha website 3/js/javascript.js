var workCountSectionStartId = document.getElementById("workCountSectionStartId");

var workCountId1 = document.getElementById("workCountId1");
var workCountId2 = document.getElementById("workCountId2");
var workCountId3 = document.getElementById("workCountId3");


window.addEventListener("scroll", () => {
    let contentPositionworkCountSectionStartId = workCountSectionStartId.getBoundingClientRect().top;
    let screenPositionForworkCountSectionStartId = window.innerHeight;


    if (contentPositionworkCountSectionStartId < screenPositionForworkCountSectionStartId) {
    
        let countCompleteProject = 0;
        let countuniversityProject = 0;
        let CountCourseCertification= 0;


        setInterval(() => {
            if (countCompleteProject == 14) {
                clearInterval();
            }

            else {
                countCompleteProject += 1;

                workCountId1.innerHTML = countCompleteProject +" "+" ";

            }




            if (countuniversityProject == 10) {
                clearInterval();
            }

            else {
                countuniversityProject += 1;
                workCountId2.innerHTML = countuniversityProject + " " + " ";
            }




            if (CountCourseCertification == 9) {
                clearInterval();
            }

            else {
                
                CountCourseCertification += 1;
                workCountId3.innerText = CountCourseCertification + " " + " ";
            }





        }, 35);

    
    
    
    
    
    
    
    
    }

})






// About Section


window.addEventListener("scroll", () => {
    let aboutMeSectionContainerId = document.getElementById("aboutMeSectionContainerId");

   

    let contentPositionaboutMeSectionContainerId = aboutMeSectionContainerId.getBoundingClientRect().top;

  

    let screenPositionForaboutMeSectionContainerId = window.innerHeight;

    if (contentPositionaboutMeSectionContainerId < screenPositionForaboutMeSectionContainerId) {
        aboutMeSectionContainerId.classList.add("active");
        


    }

    else {
        aboutMeSectionContainerId.classList.remove("active");
       
    }


})


//Vedio Section

window.addEventListener("scroll", () => {
    let vedioResumePartContainerId = document.getElementById("vedioResumePartContainerId");



    let contentPositionvedioResumePartContainerId = vedioResumePartContainerId.getBoundingClientRect().top;



    let screenPositionForvedioResumePartContainerId = window.innerHeight;

    if (contentPositionvedioResumePartContainerId < screenPositionForvedioResumePartContainerId) {
        vedioResumePartContainerId.classList.add("active");



    }

    else {
        vedioResumePartContainerId.classList.remove("active");

    }


})




//Services Section

window.addEventListener("scroll", () => {
    let myServicesCard1 = document.getElementById("myServicesCard1");

    let contentPositionmyServicesCard1 = myServicesCard1.getBoundingClientRect().top;


    let screenPositionmyServicesCard1 = window.innerHeight;


    if (contentPositionmyServicesCard1 < screenPositionmyServicesCard1) {
        myServicesCard1.classList.add("active1");
    }

    else {
        myServicesCard1.classList.remove("active1");
    }
})



window.addEventListener("scroll", () => {
    let myServicesCard2 = document.getElementById("myServicesCard2");

    let contentPositionmyServicesCard2 = myServicesCard2.getBoundingClientRect().top;


    let screenPositionmyServicesCard2 = window.innerHeight;


    if (contentPositionmyServicesCard2 < screenPositionmyServicesCard2) {
        myServicesCard2.classList.add("active1");
    }

    else {
        myServicesCard2.classList.remove("active1");
    }
})


window.addEventListener("scroll", () => {
    let myServicesCard3 = document.getElementById("myServicesCard3");

    let contentPositionmyServicesCard3 = myServicesCard3.getBoundingClientRect().top;


    let screenPositionmyServicesCard3 = window.innerHeight;


    if (contentPositionmyServicesCard3 < screenPositionmyServicesCard3) {
        myServicesCard3.classList.add("active1");
    }

    else {
        myServicesCard3.classList.remove("active1");
    }
})



window.addEventListener("scroll", () => {
    let myServicesCard4 = document.getElementById("myServicesCard4");

    let contentPositionmyServicesCard4 = myServicesCard4.getBoundingClientRect().top;


    let screenPositionmyServicesCard4 = window.innerHeight;


    if (contentPositionmyServicesCard4 < screenPositionmyServicesCard4) {
        myServicesCard4.classList.add("active1");
    }

    else {
        myServicesCard4.classList.remove("active1");
    }
})


window.addEventListener("scroll", () => {
    let myServicesCard5 = document.getElementById("myServicesCard5");

    let contentPositionmyServicesCard5 = myServicesCard5.getBoundingClientRect().top;


    let screenPositionmyServicesCard5 = window.innerHeight;


    if (contentPositionmyServicesCard5 < screenPositionmyServicesCard5) {
        myServicesCard5.classList.add("active1");
    }

    else {
        myServicesCard5.classList.remove("active1");
    }
})






//skills section

// let numberHtml = document.getElementById("numberHtml");
// let count = 0;

// setInterval(() => {
//     if (count == 65) {
//         clearInterval();
//     }

//     else {
//         count += 1;
//         numberHtml.innerHTML = count + "%";
//     }

// }, 30);





window.addEventListener("scroll", () => {
    let skillsMyAnimation = document.getElementById("skillsMyAnimation");
    let htmlAnimationDiv = document.querySelector(".htmlAnimationDiv");
    let cssAnimationDiv = document.querySelector(".cssAnimationDiv");
    let BootstrapAnimationDiv = document.querySelector(".BootstrapAnimationDiv");

    // let JSAnimationDiv = document.querySelector(".JSAnimationDiv");
    // let PhpAnimationDiv = document.querySelector(".PhpAnimationDiv");
    // let JavaAnimationDiv = document.querySelector(".JavaAnimationDiv");
    


    let contentPositionskillsMyAnimation = skillsMyAnimation.getBoundingClientRect().top;



    let screenPositionForskillsMyAnimation = window.innerHeight;

    if (contentPositionskillsMyAnimation < screenPositionForskillsMyAnimation) {

        // JSAnimationDiv.classList.add("JSAnimationDiv1");
        // PhpAnimationDiv.classList.add("PhpAnimationDiv1");
        // JavaAnimationDiv.classList.add("JavaAnimationDiv1");


        htmlAnimationDiv.classList.add("htmlAnimationDiv1");
        cssAnimationDiv.classList.add("cssAnimationDiv1");
        BootstrapAnimationDiv.classList.add("BootstrapAnimationDiv1");
        


        let numberJs = document.getElementById("numberJs");
        let numberPhp = document.getElementById("numberPhp");
        let numberJava = document.getElementById("numberJava");



        let numberC = document.getElementById("numberC");
        let numberMotion = document.getElementById("numberMotion");
        let numberWord = document.getElementById("numberWord");


        let numberJsSmall = document.querySelector(".numberJsSmall");
        let numberPhpSmall = document.querySelector(".numberPhpSmall");
        let numberJavaSmall = document.querySelector(".numberJavaSmall");



        let numberCSmall = document.querySelector(".numberCSmall");
        let numberMotionSmall = document.querySelector(".numberMotionSmall");
        let numberWordSmall = document.querySelector(".numberWordSmall");


        let numberHtml = document.getElementById("numberHtml");
        let numberCss = document.getElementById("numberCss");
        let numberBootstrap = document.getElementById("numberBootstrap");
        

        let countnumberHtml = 0;
        let countnumberCss = 0;
        let CountnumberBootstrap = 0;



        let countnumberJs = 0;
        let countnumberPhp = 0;
        let CountnumberJava = 0;


        let countnumberc = 0;
        let countnumberMotion = 0;
        let CountnumberWord = 0;


        let countnumberJsSmall = 0;
        let countnumberPhpSmall = 0;
        let CountnumberJavaSmall = 0;


        let countnumbercSmall = 0;
        let countnumberMotionSmall = 0;
        let CountnumberWordSmall = 0;
       

        setInterval(() => {
            if (countnumberHtml == 85) {
                clearInterval();
            }

            else {
                countnumberHtml += 1;

                numberHtml.innerHTML = countnumberHtml + "%";

            }




            if (countnumberCss == 80) {
                clearInterval();
            }

            else {
                countnumberCss += 1;
                numberCss.innerHTML = countnumberCss + "%";
            }




            if (CountnumberBootstrap == 85) {
                clearInterval();
            }

            else {
                CountnumberBootstrap += 1;
                numberBootstrap.innerHTML = CountnumberBootstrap + "%";
            }



           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
            if (CountnumberJava == 85 || CountnumberJavaSmall == 85 ) {
                clearInterval();
            }

            else {
                CountnumberJava += 1;
                CountnumberJavaSmall += 1;
                numberJava.innerHTML = CountnumberJava + "%";
                numberJavaSmall.innerHTML = CountnumberJava + "%";
            }


            
            
            
            if (countnumberJs == 75 || countnumberJsSmall == 75) {                                         
                clearInterval();
            }

            else {
                countnumberJs += 1;
                numberJs.innerHTML = countnumberJs + "%";
                countnumberJsSmall += 1;
                numberJsSmall.innerHTML = countnumberJs + "%";
            }


            
            
            
            
            
            if (countnumberPhp == 85 || countnumberPhpSmall == 85) {
                clearInterval();
            }

            else {
                countnumberPhp += 1;
                numberPhp.innerHTML = countnumberPhp + "%";

                countnumberPhpSmall += 1;
                numberPhpSmall.innerHTML = countnumberPhp + "%";
            }





            if (countnumberc == 78 || countnumbercSmall == 78) {
                clearInterval();
            }

            else {
                countnumberc += 1;
                numberC.innerHTML = countnumberc + "%";

                countnumbercSmall += 1;
                numberCSmall.innerHTML = countnumberc + "%";
            }





            if (countnumberMotion == 65 || countnumberMotionSmall == 65 ) {
                clearInterval();
            }

            else {
                countnumberMotion += 1;
                numberMotion.innerHTML = countnumberMotion + "%";

                countnumberMotionSmall += 1;
                numberMotionSmall.innerHTML = countnumberMotion + "%";
            }







            if (CountnumberWord == 85 || CountnumberWordSmall == 85) {
                clearInterval();
            }

            else {
                CountnumberWord += 1;
                numberWord.innerHTML = CountnumberWord + "%";

                CountnumberWordSmall += 1;
                numberWordSmall.innerHTML = CountnumberWord + "%";
            }






        }, 28);



    }

    else {

        let numberHtml = document.getElementById("numberHtml");
        let numberCss = document.getElementById("numberCss");
        let numberBootstrap = document.getElementById("numberBootstrap");


        let countnumberHtml = 0;
        let countnumberCss = 0;
        let CountnumberBootstrap = 0;

        let countnumberJs = 0;
        let countnumberPhp = 0;
        let CountnumberJava = 0;


        let countnumberc = 0;
        let countnumberMotion = 0;
        let CountnumberWord = 0;


        let countnumberJsSmall = 0;
        let countnumberPhpSmall = 0;
        let CountnumberJavaSmall = 0;


        let countnumbercSmall = 0;
        let countnumberMotionSmall = 0;
        let CountnumberWordSmall = 0;


        setInterval(() => {
            if (countnumberHtml == 85) {
                clearInterval();
            }

            else {
                countnumberHtml += 1;

                numberHtml.innerHTML = countnumberHtml + "%";

            }




            if (countnumberCss == 80) {
                clearInterval();
            }

            else {
                countnumberCss += 1;
                numberCss.innerHTML = countnumberCss + "%";
            }




            if (CountnumberBootstrap == 85) {
                clearInterval();
            }

            else {
                CountnumberBootstrap += 1;
                numberBootstrap.innerHTML = CountnumberBootstrap + "%";
            }



            if (CountnumberJava == 85 || CountnumberJavaSmall == 85) {
                clearInterval();
            }

            else {
                CountnumberJava += 1;
                CountnumberJavaSmall += 1;
                numberJava.innerHTML = CountnumberJava + "%";
                numberJavaSmall.innerHTML = CountnumberJava + "%";
            }





            if (countnumberJs == 75 || countnumberJsSmall == 75) {
                clearInterval();
            }

            else {
                countnumberJs += 1;
                numberJs.innerHTML = countnumberJs + "%";
                countnumberJsSmall += 1;
                numberJsSmall.innerHTML = countnumberJs + "%";
            }







            if (countnumberPhp == 85 || countnumberPhpSmall == 85) {
                clearInterval();
            }

            else {
                countnumberPhp += 1;
                numberPhp.innerHTML = countnumberPhp + "%";

                countnumberPhpSmall += 1;
                numberPhpSmall.innerHTML = countnumberPhp + "%";
            }





            if (countnumberc == 78 || countnumbercSmall == 78) {
                clearInterval();
            }

            else {
                countnumberc += 1;
                numberC.innerHTML = countnumberc + "%";

                countnumbercSmall += 1;
                numberCSmall.innerHTML = countnumberc + "%";
            }





            if (countnumberMotion == 65 || countnumberMotionSmall == 65) {
                clearInterval();
            }

            else {
                countnumberMotion += 1;
                numberMotion.innerHTML = countnumberMotion + "%";

                countnumberMotionSmall += 1;
                numberMotionSmall.innerHTML = countnumberMotion + "%";
            }







            if (CountnumberWord == 85 || CountnumberWordSmall == 85) {
                clearInterval();
            }

            else {
                CountnumberWord += 1;
                numberWord.innerHTML = CountnumberWord + "%";

                CountnumberWordSmall += 1;
                numberWordSmall.innerHTML = CountnumberWord + "%";
            }







        }, 28);



        htmlAnimationDiv.classList.remove("htmlAnimationDiv1");
        cssAnimationDiv.classList.remove("cssAnimationDiv1");
        BootstrapAnimationDiv.classList.remove("BootstrapAnimationDiv1");
      
    }


})





// portfolio section start 


var myAllPortfolio1 = document.querySelector(".myAllPortfolio1");
var portfolioHideDivId = document.getElementById("portfolioHideDivId");

myAllPortfolio1.addEventListener("mouseenter",function(){
    portfolioHideDivId.style.display="block";

});


myAllPortfolio1.addEventListener("mouseleave", function () {
    portfolioHideDivId.style.display = "none";

});






