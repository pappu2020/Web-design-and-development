var photos = ["img/mango.jpg","img/coco.jpg","img/ora.jpg","img/jack.jpg"];
var getId = document.getElementById("image");
var count = 0;


function next(){
    count++;

    if(count>= photos.length){
        count = 0;
        getId.src=photos[count];
    }

    else{
        getId.src = photos[count];
    }
}


function prev(){
    count--;

    if(count<0){
        count = photos.length-1;
        getId.src=photos[count];
    }

    else{
        getId.src = photos[count];
    }
}