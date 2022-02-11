//"use strict"  //strict mode

// x=10;
// y=20;
// var sum = x+y;
// var y; //hoisting

// document.write(`sum = ${sum}`); //template literals

// document.write("<br>");
// //default parameter

// function defaultParameter(text="My name is Pappu saha"){
//     document.write(text);
// }

// defaultParameter();

// //rest parameter

// // function sum(x,y, ...z){
    
// //     document.write(x);
// // }

// // sum(10,20,20,20,20,30,30,30,30,30,30);


// //spread operator

// function addition(x,y,z){
//     return x+y+z;
// }

// let array = [1,2,3];
// document.write("<br>");
// document.write("Sum is: " + addition(...array));

// document.write("<br>");

// let array2 = [2,5,5,9, ...array];

// document.write(array2);

// document.write("<br>");

// let p1 = {
//     Name:"Pappu saha",
//     Department:"CSE",
//     University:"AIUB"
// }

// let p2 = {
//     ID:18
// }

// let p ={...p1, ...p2};
// console.log(p);



//object literals

// function myName(firstName,lastname){
//     return {
//         firstName,lastname
//     }
// };

// console.log(myName("Pappu","saha"));

// let name ={
//     myName(){
//         return "My name is pappu saha"
//     }
// }
// console.log(name.myName());


// for of/ for in

let array = [1,2,3,4,5,6];

for(var x of array){
    document.write(x);
}

document.write("<br>");

let profile = {
    Name: "Pappu saha",
    ID:18,
    Address: "Dhaka"
}

for(let y in profile){
    document.write(`${y} : ${profile[y]}`);
    document.write("<br>");
}


