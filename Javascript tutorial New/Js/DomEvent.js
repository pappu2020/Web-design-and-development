var select  = document.querySelector("#department");

select.addEventListener("change",eventHandle);


function eventHandle(e){
    var output = e.target.value;

    document.getElementById("heading").innerText = output;

    
}
