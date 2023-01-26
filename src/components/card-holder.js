import '../App.css';
import Card from './card';

function Cardholder(props) {
  return (
    <div className='cardholder'>
        <h1 className='reading-title'>{props.title}</h1>
        <div className='card-placer'>

        </div>       
    </div>
  );
}

export default Cardholder;