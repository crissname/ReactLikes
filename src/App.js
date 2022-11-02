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
        <button onClick={getDecrement} ><svg  height="48" width="48" fill='#E63946FF'><path d="M12.1 6h22.2v25.6L20.4 46l-1.95-1.55q-.3-.25-.45-.7-.15-.45-.15-1.1v-.5L20.1 31.6H5.15q-1.2 0-2.1-.9-.9-.9-.9-2.1v-4.1q0-.35-.075-.725t.075-.725l6.3-14.5q.45-1.05 1.475-1.8Q10.95 6 12.1 6Zm19.2 3H11.45l-6.3 14.95v4.65H23.8l-2.65 12.45 10.15-10.7Zm0 21.35V9Zm3 1.25v-3h6.65V9H34.3V6h9.65v25.6Z"/></svg></button>
        <button onClick={getIncrement}><svg  height="48" width="48" fill='#16A3DEFF'><path d="M35.8 42H13.6V16.4L27.5 2l1.95 1.55q.3.25.45.7.15.45.15 1.1v.5L27.8 16.4h14.95q1.2 0 2.1.9.9.9.9 2.1v4.1q0 .35.075.725t-.075.725l-6.3 14.5q-.45 1.05-1.475 1.8Q36.95 42 35.8 42Zm-19.2-3h19.85l6.3-14.95V19.4H24.1l2.65-12.45-10.15 10.7Zm0-21.35V39Zm-3-1.25v3H6.95V39h6.65v3H3.95V16.4Z"/></svg></button>
      </div>
    </div>
  );
}

export default App;
