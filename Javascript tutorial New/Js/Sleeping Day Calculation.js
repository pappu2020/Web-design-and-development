
var year = parseInt(year,10);
var hour = parseInt(hour,10);

var year_result = parseInt(year_result,10);
var total_slept_hour = parseInt(hour_result,10);
var hour_lived = parseInt(hour_lived,10);
var total_slept_day = parseInt(total_slept_day,10);



function SleptDays(year){

  year_result = (year*365);
  document.getElementById("year_lived").innerText=year_result +" days";
  hour_lived = (year_result*24);
  document.getElementById("hour_lived").innerText=hour_lived +" hours";

}

function slept(hour){
    total_slept_hour = (year_result*hour);
   document.getElementById("hour_slept").innerText=total_slept_hour +" hours"+" between "+hour_lived+ " hours";

   total_slept_day = (total_slept_hour/24);
   
   
   document.getElementById("day_slept").innerText=total_slept_day +" days"+" between "+year_result+ " days";


}