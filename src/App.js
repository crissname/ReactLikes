import './index.css';
import {useState} from "react";

function App() {
  const [open, setOpen] = useState(false)


  return (
    <div className="App">

      <button  onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>

      <div onClick={()=> setOpen((false))} className={`overlay animated ${open ? 'show' : '' }`}>
        <div className="modal">
          <form>
            <input className="input" placeholder="Введіть email"/>
            <input className="input" placeholder="Ввкдіть пароль"/>
            <input className="input" placeholder="Номер телефону"/>
          </form>

        </div>
      </div>
    </div>
  );
}

export default App;
