var my_array = [1,2,1,2,1,3,15,5];
var max=my_array[0];
for(var i=1; i<my_array.length;i++){
    if(max<my_array[i]){
        max = my_array[i];
    }
}

document.write("Maximum value is:"+max);



