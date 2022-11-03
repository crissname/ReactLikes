import './index.css';
import './data/question';
import {useState} from "react";
import {questions} from "./data/question";
import Game from "./components/Game";
import Result from "./components/Result";





function App() {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0)


  const question = questions[step];


  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step+1)
    if (index === question.correct) {
      setCounter(counter + 1)
    }
  }
  return (
    <div className="App">
      {step != questions.length
        ? (
          <Game step={step} question={question} onClickVariant={onClickVariant}/>
        )
        : (
          <Result counter={counter}/>
        )
      }


    </div>
  );
}

export default App;
