import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

var name= "Pappu saha";
var id = 18;
var department = "cse";


// jsx expression

//Add Css style


const headerStyle = {
  color:"red",
  bagroundColor: "black",
  
  padding:"20px"
}


ReactDOM.render(
  <div>
    <h1 style={headerStyle}>Pappu saha</h1>
    <p className='subheading2'>Style from Source folder(style.css)</p>
    <p className='subHeading'>Style from Public folder(style.css)</p>
    <p>Name: {name}</p>
    <p>id: {id}</p>
    <p>Department: {department}</p>
    <h1>{new Date().getDate()}</h1>
    
  </div>,

  document.getElementById('root')
);


