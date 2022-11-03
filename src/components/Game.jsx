import React from 'react';
import {questions} from "../data/question";

const Game = ({step, question, onClickVariant}) => {
    const percent = Math.round(step/questions.length*100)

    return (

        <div>
            <div className="progress">
                <div style={{width: `${percent}%`}} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((text, index) => (
                    <li onClick={() => onClickVariant(index)} key={index}>{text}</li>
                ))}
            </ul>
        </div>

    );
};

export default Game;
