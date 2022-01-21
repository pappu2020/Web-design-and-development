var name1 = ["Pappu","Anu","Sajib","Anupoma","zahid","karim","Akash"];
document.write(name1);
document.write("<br>");

name1.splice(2,0,"Aporbo");
document.write(name1);
document.write("<br>");

name1.splice(1,2);
document.write(name1);
document.write("<br>");

var newName = name1.slice(1);
document.write(newName);
document.write("<br>");


nameSorted = name1.sort();
document.write(nameSorted); 