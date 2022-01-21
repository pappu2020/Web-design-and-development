var countWin=0;
var countLose=0;

for(var i=0;i<5;i++){
    var input = parseInt(prompt("Enter the number: "));
    var randomNumber;

    randomNumber = Math.floor(Math.random()*5)+1;

    if(input == randomNumber){
        document.write("Random number is: "+randomNumber+" ");
        document.write("Guessing number is: "+input+" ");
        document.write("<br>");

        document.write("Well done!!! You have Won.");
        countWin++;
        document.write("<br>");
    }

    else{
        document.write("Random number is: "+randomNumber+" ");
        document.write("Guessing number is: "+input+" ");
        document.write("<br>");
        document.write("oops!! You have lost.");
        countLose++;
        document.write("<br>");
    }
}


document.write("You have won total"+" "+countWin+""+" times");
document.write("<br>");
document.write("You have Lose total"+" "+countLose+" "+" times");
