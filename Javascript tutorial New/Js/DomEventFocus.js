const capital = document.querySelectorAll(".design");

Array.from(capital).map((design)=>{
    design.addEventListener("blur",function(e){
    design.value = e.target.value.toUpperCase();

    });
});


const style = document.querySelectorAll(".design2");

Array.from(style).map((design2)=>{
    design2.addEventListener("focus",function(){
        design2.style.backgroundColor = "black";
        design2.style.color = "white";
        design2.style.padding = "5px";


    });
});

const style2 = document.querySelectorAll(".design");

Array.from(style2).map((design3)=>{
    design3.addEventListener("focus",function(){
        design3.style.backgroundColor = "black";
        design3.style.color = "white";
        design3.style.padding = "5px";

    });
});

Array.from(style2).map((design3)=>{
    design3.addEventListener("focusout",function(){
        design3.style.backgroundColor = "white";
        design3.style.color = "black";
       

    });
});

Array.from(style).map((design2)=>{
    design2.addEventListener("focusout",function(){
        design2.style.backgroundColor = "white";
        design2.style.color = "black";

    });
});



