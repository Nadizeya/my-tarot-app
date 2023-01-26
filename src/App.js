import './App.css';
import Card from './components/card';
import carddata from './carddata';
import Cardholder from './components/card-holder';
import React from 'react';

function App() {

  const [readingarray, setReadingArray] = React.useState([]);

  function Cardknow(){

    const cardarrays = carddata.datas
    const found = cardarrays.find(card => card.name == props.name);
    // console.log(index)
    console.log(found);
    setReadingArray(readingarray => 
      [...readingarray, found]
    );
    // const index = cardarrays.indexOf(found)  ; 
    // // console.log(readingarray);
    // // console.log(cardarrays);
    // cardarrays.splice(index,1);     
    
    };  


  const  addingcards = carddata.datas.map(card => {
    return(
     <Card
      id= {card.id}
      name= {card.name}
      value= {card.value}
      handleclick = {Cardknow}
     />)    
  })

  return (
    <div className="App">
      <div className='leftHeaderItems'>
        {addingcards}
      </div>
      <Cardholder/>
      
    </div>
  );
  }

export default App;
