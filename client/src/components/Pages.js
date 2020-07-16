import React from 'react';
import './Pages.css';

const Pages = ({ questionsOnPage, allQuestions, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(allQuestions / questionsOnPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="Pages__content">
           <ul className="Pages__list">
               {pageNumbers.map(number => {
                   return <li key={number} className="Pages__page">
                       <a onClick={() => paginate(number)} href="!#" className="Pages__href">
                           {number}
                       </a>
                   </li>
               })}
           </ul> 
        </div>
    )
}

export default Pages;