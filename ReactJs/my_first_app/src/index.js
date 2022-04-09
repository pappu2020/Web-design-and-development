import React from 'react';
import ReactDOM from 'react-dom';

var name= "Pappu saha";
var id = 18;
var department = "cse";


// jsx expression


ReactDOM.render(
  <div>
    <p>Name: {name}</p>
    <p>id: {id}</p>
    <p>Department: {department}</p>
    <h1>{new Date().getDate()}</h1>
  </div>,
  document.getElementById('root')
);

