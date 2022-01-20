function gradeCalculate(input){
if(input >= 90){
    document.getElementById('letter_grade_result').innerHTML="A+";
    document.getElementById('grade_point_result').innerHTML="4.00";
}

else if(input >= 85){
    document.getElementById('letter_grade_result').innerHTML="A";
    document.getElementById('grade_point_result').innerHTML="3.75";
}

else if(input >= 80){
	document.getElementById('letter_grade_result').innerHTML="B+";
	document.getElementById('grade_point_result').innerHTML="3.50";
}

else if(input >= 75){
	document.getElementById('letter_grade_result').innerHTML="B";
	document.getElementById('grade_point_result').innerHTML="3.25";
}

else if(input >= 70){
	document.getElementById('letter_grade_result').innerHTML="C+"; 
	document.getElementById('grade_point_result').innerHTML="3.00";
}

else if(input >= 65){
	document.getElementById('letter_grade_result').innerHTML="C";
	document.getElementById('grade_point_result').innerHTML="2.75";
}
else if(input >= 60){
	document.getElementById('letter_grade_result').innerHTML="D+";
	document.getElementById('grade_point_result').innerHTML="2.50";
}
else if(input >= 50){
	document.getElementById('letter_grade_result').innerHTML="D";
	document.getElementById('grade_point_result').innerHTML="2.25";
}
else{
	document.getElementById('letter_grade_result').innerHTML="F";
	document.getElementById('grade_point_result').innerHTML="0.00";
	
}


}