import React, { useState } from 'react'
import '../App.css';
import carddata from '../carddata';

function Card(props) {

   
  return (
    <div className="card" onClick={props.handleclick} >
      
    </div>
  );
}

export default Card; 