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

let number = document.getElementById("number");
let count = 0;

setInterval(() => {
    if (count == 65) {
        clearInterval();
    }

    else {
        count += 1;
        number.innerHTML = count + "%";
    }

}, 30);


