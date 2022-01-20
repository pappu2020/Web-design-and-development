var name1 = ["pappu saha"];
var education = ["jsc","ssc","hsc","Bsc"];
document.write(name1);
document.write("<br>");
document.write(education);

var concat_array = name1.concat(education);
document.write("<br>");
document.write(concat_array);
document.write("<br>");

education.push("Msc");
document.write(education);
document.write("<br>");

education.pop();
document.write(education);

