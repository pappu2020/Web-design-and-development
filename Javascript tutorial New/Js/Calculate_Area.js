
var choice = prompt("Please enter your choice from menu: ")
var Circle_area;
var Ractangle_length;
var Ractangle_width;
var Triangle_base;
var Triangle_height;
var Square_area;

choice = parseInt(choice,10);
if(choice == 1){
    Circle_area = prompt("Please, Enter the area of circle: ");
    Circle_area = parseFloat(Circle_area,10);
    var area_of_circle = (3.1416*Circle_area*Circle_area);
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("Area of circle: "+ area_of_circle);
}

 if(choice == 2){
    Ractangle_length = prompt("Please, Enter the length of Ractangle: ");
    Ractangle_length = parseFloat(Ractangle_length,10);

    Ractangle_width = prompt("Please, Enter the width of Ractangle: ");
    Ractangle_width = parseFloat(Ractangle_width,10);

    var area_of_ractangle = (Ractangle_length*Ractangle_width);
    
    
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("Area of Ractangle: "+ area_of_ractangle);
}

if(choice == 3){
    Triangle_base= prompt("Please, Enter the base of triangle: ");
    Triangle_base = parseFloat(Triangle_base,10);

    Triangle_height = prompt("Please, Enter the height of triangle: ");
    Triangle_height = parseFloat(Triangle_height,10);

    var area_of_triangle = (0.5*Triangle_base*Triangle_height);
    
    
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("Area of Triangle: "+ area_of_triangle);
}

if(choice == 4){
    Square_area = prompt("Please, Enter the side of square: ");
    Square_area = parseFloat(Square_area,10);
    var area_of_square = (Square_area*Square_area);
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("Area of Square: "+ area_of_square);
}
