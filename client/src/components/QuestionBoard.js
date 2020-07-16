import React from 'react';
import QuestionCard from './QuestionCard.js';
import './QuestionBoard.css';

const QuestionBoard = ({ questions }) => {
   
    return (
        <div className="QuestionBoard__headline">
            <h1>Test your FullStack developer knowledge</h1>

            <div className="QuestionBoard__wrapper">
                {questions.map(question => (
                    <QuestionCard
                        question={question}
                        key={question.id}
                    /> ))}
            </div>
        </div>
    )
}

export default QuestionBoard;