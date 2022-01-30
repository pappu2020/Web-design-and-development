var fname = document.querySelector("input[name=fname]");

fname.addEventListener("change",firstName);

var submit = document.getElementById("submit");
submit.addEventListener("change",submit);
var sabmitValue;

    




function firstName(e){
    var fnameValue = e.target.value;

    document.getElementById("firstName").innerText = fnameValue;
}


var admitquery = document.querySelectorAll("input[name=admit_before]");

Array.from(admitquery).map((admit_before) =>{

    admit_before.addEventListener("change",eventHandler);


});

function eventHandler(e){
    if(e.target.checked){
        
        var output = e.target.value;
        document.getElementById("admitHere").innerText = output;
    }
}


var courseSelects = document.querySelector("#courseSelect");

courseSelects.addEventListener("change",cousreEventHandler);

function cousreEventHandler(e){
    document.getElementById("Course").innerText = e.target.value;
}



var Address = document.querySelector("textarea");

Address.addEventListener("keyup",function(e){
    document.getElementById("addressOutput").innerText = e.target.value;
})







