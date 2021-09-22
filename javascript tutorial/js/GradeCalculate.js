function gradeCalculate(result) {

if(result>=90){
	document.getElementById('result_ouput').innerHTML="A+";
	document.getElementById('wish').innerHTML="Congratulations!!";
	document.getElementById('grade').innerHTML="Grade point: 4.00";
	
}

else if(result>=85){
	document.getElementById('result_ouput').innerHTML="A";
    document.getElementById('grade').innerHTML="Grade point: 3.75";
	
}

else if(result>=80){
	document.getElementById('result_ouput').innerHTML="B+";
	document.getElementById('grade').innerHTML="Grade point: 3.50";
}

else if(result>=75){
	document.getElementById('result_ouput').innerHTML="B";
	document.getElementById('grade').innerHTML="Grade point: 3.25";
}

else if(result>=70){
	document.getElementById('result_ouput').innerHTML="C+"; 
	document.getElementById('grade').innerHTML="Grade point: 3.00";
}

else if(result>=65){
	document.getElementById('result_ouput').innerHTML="C";
	document.getElementById('grade').innerHTML="Grade point: 2.75";
}
else if(result>=60){
	document.getElementById('result_ouput').innerHTML="D+";
	document.getElementById('grade').innerHTML="Grade point: 2.50";
}
else if(result>=50){
	document.getElementById('result_ouput').innerHTML="D";
	document.getElementById('grade').innerHTML="Grade point: 2.25";
}
else{
	document.getElementById('result_ouput').innerHTML="F";
	document.getElementById('grade').innerHTML="Grade point: 0.00";
	
}


}


$("input").focus(function(){
	$(this).css("background-color","#ddd");
});



$("input").blur(function(){
	$(this).css("background-color","white");
});