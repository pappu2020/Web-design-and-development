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

// let array = [1,2,3,4,5,6];

// for(var x of array){
//     document.write(x);
// }

// document.write("<br>");

// let profile = {
//     Name: "Pappu saha",
//     ID:18,
//     Address: "Dhaka"
// }

// for(let y in profile){
//     document.write(`${y} : ${profile[y]}`);
//     document.write("<br>");
// }


//foreach

// var array = [1,2,3,4,5,6];
// var square = [];

// array.forEach(function(x){
//     square.push(x*x);
// })
// document.write(square);


// var array = [1,2,3,4,5,6];
// document.write(array);
// document.write("<br>");

// array.forEach(function(x,index,arr){
//     arr[index]=x+10;
// })
// document.write(array);


// //map 

// var array = [1,5,6,7,8,9,7,3,4,9,5,3,4,5,6,7,8,9,2];
// document.write("Number List: "+array);

// document.write("<br>");
// var square=array.map(function(x){
//     return x*x;
// })

// document.write("Square value: "+square);

// document.write("<br>");

// //filter function

// var filter = square.filter(function(x){
//     return x<30;
// })

// document.write("Under number 30: "+filter);


//Arrow Function

// let message = () => "my name is pappu saha";

// document.write(message());

// let sum = (num1,num2)=> num1+num2;
// document.write("<br>");

// document.write("Sum is: "+sum(1,2));

//traditional Function

// let result = [
//     {
//         Name:"Pappu saha",
//         ID:"18-36339-1",
//         Cgpa:"3.51"
//     },
//     {
//         Name:"Anup saha",
//         ID:"18-36345-1",
//         Cgpa:"3.12"
//     },
//     {
//         Name:"Akash saha",
//         ID:"18-36999-1",
//         Cgpa:"2.56"
//     },
//     {
//         Name:"Arup saha",
//         ID:"18-39339-1",
//         Cgpa:"2.89"
//     },

//     {
//         Name:"Aru saha",
//         ID:"18-39439-1",
//         Cgpa:"3.47"
//     },

//     {
//         Name:"bindu saha",
//         ID:"18-32339-1",
//         Cgpa:"3.67"
//     },

//     {
//         Name:"akhi saha",
//         ID:"18-29339-1",
//         Cgpa:"3.25"
//     },

//     {
//         Name:"ashish saha",
//         ID:"18-34339-1",
//         Cgpa:"2.86"
//     },

//     {
//         Name:"bindas saha",
//         ID:"18-49339-1",
//         Cgpa:"2.49"
//     },

//     {
//         Name:"goindia saha",
//         ID:"18-33339-1",
//         Cgpa:"2.45"
//     }
// ];
// var input1 = prompt("Enter the First value: ");

// var input1 = parseInt(input1,10);

// var input2 = prompt("Enter the Second value: ");

// var input2 = parseInt(input2,10);
// function studentNames(){
//     return result.filter(function(x){
//         return x.Cgpa>input1 && x.Cgpa<input2;
//     }).map(function(y){
//         return y.Name;
//     });
// }

// document.write(studentNames());


//Array destructure

// let number = [1,2,3,4,5,6,7];

// let[n1,n2,n3,n4,n5,n6,n7] = number;


// document.write(n5);

//Swap variables

// let a= 10;
// let b=3;

// [a,b] = [b,a];

// document.write(b);

//objct destructure

// const name={
//     name1: "Pappu saha",
//     id:18,
//     cgpa:3
// };

// const {name1,id} = name

// console.log(id);


//nested object destructure

// let profile = {
//     name: "Pappu",
//     id: 18,
//     Language:{
//         first:"bangla",
//         second:"English"
//     }
// }

// let {name,Language} = profile;

// document.write(Language.second);


//destructing function parameter

// let My = ({name1,id})=>{
//    document.write(`Name: ${name1},id: ${id}`);
// }

// const name={
//         name1: "Pappu saha",
//         id:18,
//          cgpa:3
//         };
// My(name);

//Find Function

let number = [27,4,6,23,44,55,66,77,88];

 

var result =number.find(function(x){
        return x%2===0;
})

document.write(result);