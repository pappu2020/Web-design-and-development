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

