import React from 'react';
import './QuestionCard.css';

export default function QuestionCard({ question }){

    return(
        <div className="QuestionCard__container">
          <div className="QuestionCard__content">
            <div className="QuestionCard__front">
              <p>{question.question}</p>
            </div>
            <div className="QuestionCard__back">
              <p>{question.answer}</p>
            </div>
          </div>
        </div>
    )
}
  