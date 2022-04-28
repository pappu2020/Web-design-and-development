
// props and destructuring
// function Card(props){
//     return <div className='MyCard1'>
//       <h1 className='card_title'>{props.name}</h1>
//       <div className='card_body'>{props.address}</div>
//       <p className='card_footer'>{props.id}</p>
//       </div>
//   }

//destructuring
  function Card(props){
    const{name,address,id}=props;
    return <div className='MyCard1'>
      <h1 className='card_title'>{name}</h1>
      <div className='card_body'>{address}</div>
      <p className='card_footer'>{id}</p>
      </div>
  }





  export default Card;

