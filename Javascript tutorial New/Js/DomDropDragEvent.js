const para = document.getElementById("para");
const div = document.getElementById("div");


para.addEventListener("dragstart",function(e){
   e.dataTransfer.setData("Text",e.target.id);
});


div.addEventListener("dragover", function(e){
   e.preventDefault();
});

div.addEventListener("drop",function(e){
    let output = e.dataTransfer.getData("Text");
    div.appendChild(document.getElementById(output));
    e.preventDefault();
});