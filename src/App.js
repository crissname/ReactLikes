import './index.css';
import './question';
import {useState} from "react";
import {questions} from "./question";


function Result() {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
      <h2>Вы отгадали 3 ответа из 10</h2>
      <button>Попробовать снова</button>
    </div>
  );
}

function Game({question, onClickVariant}) {
  return (
    <>
      <div className="progress">
        <div style={{width: '20%'}} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={()=> onClickVariant(index)} key={index}>{text}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, useStep] = useState(0);
  const question = questions[step];
  const onClickVariant = (index) => {
    console.log(step, index);
  }
  return (
    <div className="App">
      <Game question={question} onClickVariant={onClickVariant}/>
      {/* <Result /> */}
    </div>
  );
}

export default App;
