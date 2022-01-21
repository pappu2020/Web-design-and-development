function student(Name,id,cgpa,contact){
    this.Name=Name;
    this.id=id;
    this.cgpa=cgpa;
    this.contact=contact;

    this.display = function(){
        document.write("Name: "+this.Name);
        document.write("ID: "+this.id);
        document.write("CGPA: "+this.cgpa);
        document.write("Contact: "+this.contact);
    }
    
}


var student1 = new student("pappu saha ",36339,"<br>",3.51 ,0145454545,);
var student2 = new student("Anup saha ",18-36339-1 ,3.51 ,0145454545,);
var student3 = new student("Akash saha ",18-36339-1 ,3.51 ,0145454545,);


student1.display();
document.write("<br>");
student2.display();
document.write("<br>");
student3.display();

