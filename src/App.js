import './index.css';
import {useState} from "react";

function App() {

  const [cardList, setCardList] = useState([
    {id: 1, order: 1, name: 'Card 1'},
    {id: 2, order: 2, name: 'Card 2'},
    {id: 3, order: 3, name: 'Card 3'},
    {id: 4, order: 4, name: 'Card 4'},
  ])

  const [currentCard, setCurrentCard] = useState(null)

  function handlerDragStart(e, card) {

    setCurrentCard(card)

  }


  function handlerDragLeave(e) {
    e.target.style.background = 'transparent'
    e.target.style.color = 'skyblue'
    e.target.style.borderColor = 'skyblue'
  }

  function handlerDragEnd(e) {
    e.target.style.background = 'transparent'
    e.target.style.color = 'skyblue'
    e.target.style.borderColor = 'skyblue'
  }

  function handlerDragOver(e) {
    e.preventDefault()
    e.target.style.background = 'skyblue'
    e.target.style.color = '#2a3641'
    e.target.style.borderColor = 'black'
  }


  function handlerDrop(e, card) {
    e.preventDefault()
    setCardList(cardList.map(c => {
      if (c.id === card.id) {
        return {...c, order: currentCard.order}
      }
      if (c.id === currentCard.id) {
        return {...c, order: card.order}
      }
      return c
    }))
    e.target.style.background = 'transparent'
    e.target.style.color = 'skyblue'
    e.target.style.borderColor = 'skyblue'
  }

  function sortCards(a, b) {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <div className="App">
      {cardList.sort(sortCards).map((card) => (
        <div
          onDragStart={(e) => handlerDragStart(e, card)}
          onDragLeave={(e) => handlerDragLeave(e)}
          onDragEnd={(e) => handlerDragEnd(e)}
          onDragOver={(e) => handlerDragOver(e)}
          onDrop={(e) => handlerDrop(e, card)}
          key={card.id}
          className='card'
          draggable={true}
        >{card.name}</div>
      ))}
    </div>
  );
}

export default App;
