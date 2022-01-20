function Addition(){
    var sum=0;
    var sum_array = new Array();
    for(var i=0;i<=sum_array.length;i++){
        sum_array[i] = parseFloat(prompt("Enter the Number: "));
        sum = sum+sum_array[i];

        if(sum_array[i] == 0){
            break;
        }
    }
    document.write("Your input value are: "+sum_array);
    document.write("<br>");
    document.write("Addition is: "+sum);
}

function Subtraction(){
    var sub = 0;
    var num1= parseFloat (prompt("Enter the First Number: "));
    var num2= parseFloat (prompt("Enter the Second Number: "));

    sub=num1-num2;
    document.write("Your input value are: "+num1+", "+num2);
    document.write("<br>");
    document.write("subtraction is: "+sub);
}

function multiplication(){
    var mul=1;
    var mul_array = new Array();
    for(var i=0;i<=mul_array.length;i++){
        mul_array[i] = parseFloat(prompt("Enter the Number: "));
        mul = mul*mul_array[i];

        if(mul_array[i] == 1){
            break;
        }
    }
    document.write("Your input value are: "+mul_array);
    document.write("<br>");
    document.write("Multiplication is: "+mul);
}

function Division(){
    var div = 0;
    var num1= parseFloat (prompt("Enter the First Number: "));
    var num2= parseFloat (prompt("Enter the Second Number: "));

    div=num1 / num2;
    document.write("Your input value are: "+num1+", "+num2);
    document.write("<br>");
    document.write("Division is: "+div);
}

var input = prompt("Enter Your Choice From Menu: ");

if(input == 1){
    Addition();
}

if(input == 2){
    Subtraction();
}

if(input == 3){
    multiplication();
}

if(input == 4){
    Division();
}