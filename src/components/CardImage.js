import React from 'react';
import '../App.css';

function CardImage(props) {
  return(
    <div className="card-image" style={{backgroundImage: "url("+props.image+")"}}><img src={props.image} alt ="island"></img></div>
  );
}

export default CardImage;