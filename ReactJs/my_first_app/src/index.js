import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

// var name= "Pappu saha";
// var id = 18;
// var department = "cse";


// jsx expression

//Add Css style


// const headerStyle = {
//   color:"red",
//   bagroundColor: "black",
  
//   padding:"20px"
// }


ReactDOM.render(
  // <div>
  //   <h1 style={headerStyle}>Pappu saha</h1>
  //   <p className='subheading2'>Style from Source folder(style.css)</p>
  //   <p className='subHeading'>Style from Public folder(style.css)</p>
  //   <p>Name: {name}</p>
  //   <p>id: {id}</p>
  //   <p>Department: {department}</p>
  //   <h1>{new Date().getDate()}</h1>
    
  // </div>,

  <div className='MyCard'>
  <div className='MyCard1'>
    <h1 className='card_title'>Pappu saha</h1>
    <div className='card_body'><img src='img/pappu.jpg' className='cardImage'></img></div>
    <p className='card_footer'>My Name is Pappu saha. I live in Dhaka.</p>


  </div>

  <div className='MyCard2'>
    <h1 className='card_title'>Pappu saha</h1>
    <div className='card_body'><img src='img/pappu.jpg' className='cardImage'></img></div>
    <p className='card_footer'>My Name is Pappu saha. I live in Dhaka.</p>


  </div>

  <div className='MyCard3'>
    <h1 className='card_title'>Pappu saha</h1>
    <div className='card_body'><img src='img/pappu.jpg' className='cardImage'></img></div>
    <p className='card_footer'>My Name is Pappu saha. I live in Dhaka.</p>


  </div>
  </div>,
  document.getElementById('root')
);


