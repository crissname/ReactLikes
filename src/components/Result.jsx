import React from 'react';
import {questions} from "../data/question";

const Result = ({counter}) => {
    return (
        <div className="result">
            <img className='result-img' src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
            <h2 className='result-h2'>Ви відповіли правильно {counter} із {questions.length}</h2>
            <a href='/'>
                <button className='result-btn'>Попробовать снова</button>
            </a>
        </div>
    );
};

export default Result;
