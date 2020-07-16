import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import QuestionBoard from './components/QuestionBoard.js';
import Header from './components/Header.js';
import Pages from './components/Pages.js';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [questionsOnPage, setQuestionsOnPage] = useState(8);
  
  useEffect(() => {
    const fetchQuestions = async() => {
    const res = await axios.get('/questions');
      setQuestions(res.data.questions)
    }
    fetchQuestions();
  }, []);

  // Get current questions
  const lastQuestion = page * questionsOnPage;
  const firstQuestion = lastQuestion - questionsOnPage;
  const displayedQuestions = questions.slice(firstQuestion, lastQuestion);

  // Change page
  const paginate = pageNumber => setPage(pageNumber);

  // componentDidMount() {
  //   axios.get('/questions')
  //      .then(res => this.setState({ questions: res.data.questions }))
  //      .catch(err => console.log(err));
  // }

  // handleClick = (e, number) => {
  //   e.preventDefault();
  //   axios.get(`/questions/${number}`)
  //   // axios.get('/questions/2')
  //      .then(res => this.setState({ questions: res.data.questions }))
  //      .catch(err => console.log(err));
  // }

  // render () {
  return (
    <div className="App">
        <Header />
        <QuestionBoard questions={displayedQuestions} /> 
        <Pages questionsOnPage={questionsOnPage} allQuestions={questions.length} paginate={paginate}/>
    </div>
    );
  // }

}

export default App;
