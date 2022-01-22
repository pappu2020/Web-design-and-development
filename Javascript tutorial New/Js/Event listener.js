var link = document.getElementById("head");
link.addEventListener("mouseover", add);



var link2 = document.getElementById("head");
link2.addEventListener("pointerleave", remove);








function add(){
    link.classList.add("heading");
}

function remove(){
    link2.classList.remove("heading");
}