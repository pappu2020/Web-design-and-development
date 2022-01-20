var input = prompt("Enter the number:");
var input = parseFloat(input,10);
document.write("Multiplication Table of "+ input+":");
document.write("<br>");

for(i=1;i<=10;i++){
    document.write(input+"*"+i+"="+i*input);
    document.write("<br>");
}

