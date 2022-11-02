import './index.css';
import {useState} from "react";

function App() {

  const [number,setNumber] = useState(0)


  const getIncrement = () => {
    setNumber(number + 1)

  }
  const getDecrement = () => {
    number <= 0 ? setNumber(number) : setNumber(number - 1)
    
  }


  return (
    <div className="App">
      <div>
        <h2>You have:</h2>
        <h1>{number}</h1>
        <h2>Likes</h2>
        <button onClick={getDecrement} className="minus">DisLike</button>
        <button onClick={getIncrement} className="plus">Like</button>
      </div>
    </div>
  );
}

export default App;
