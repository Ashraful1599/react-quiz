import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate,useLocation  } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import useQuestions from "../hooks/useQuestions"


const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      return state;
  }
};






export default function Quiz() {
  let { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);
 // console.log(qna);

  const { currentUser } = useAuth();
  const history = useNavigate();

  const location = useLocation();
  
  //const { location } = history;
 //  console.log(location)
   const { state } = location;
   const { videoTitle } = state;

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  // handle when user clicks the next button to get the next question
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }

  // handle when user clicks the prev button to get back to the previous question
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  // submit quiz
  async function submit() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    history.push({
      pathname: `/result/${id}`,
      state: {
        qna,
      },
    });
  }

  // calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  
  return (
    <div>
    <main className="main">
      <div className="container">
        <h1>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>

        <div className="answers">

          <label className="answer" htmlFor="option1">
            <input type="checkbox" id="option1" />
            A New Hope 1
          </label>

  
          <label className="answer" htmlFor="option2">
            <input type="checkbox" id="option2" />
            A New Hope 1
          </label>


          <label className="answer" htmlFor="option3">
            <input type="checkbox" id="option3" />
            A New Hope 1
          </label>


          <label className="answer wrong" htmlFor="option4">
            <input type="checkbox" id="option4" />
            A New Hope 1
          </label>

     
          <label className="answer" htmlFor="option5">
            <input type="checkbox" id="option5" />
            A New Hope 1
          </label>

         
          <label className="answer" htmlFor="option6">
            <input type="checkbox" id="option6" />
            A New Hope 1
          </label>

 
          <label className="answer correct" htmlFor="option7">
            <input type="checkbox" id="option7" />
            A New Hope 1
          </label>

   
          <label className="answer" htmlFor="option8">
            <input type="checkbox" id="option8" />
            A New Hope 1
          </label>

          <label className="answer" htmlFor="option9">
            <input type="checkbox" id="option9" />
            A New Hope 1
          </label>

   
          <label className="answer" htmlFor="option10">
            <input type="checkbox" id="option10" />
            A New Hope 1
          </label>
        </div>

        <div className="progressBar">
          <div className="backButton">
            <span className="material-icons-outlined"> arrow_back </span>
          </div>
          <div className="rangeArea">
            <div className="tooltip">24% Cimplete!</div>
            <div className="rangeBody">
              {/* <div className="progress" style="width: 20%"></div> */}
            </div>
          </div>
          <NavLink to="/result">
            <button className="button next">
              <span>Next Question</span>
              <span className="material-icons-outlined"> arrow_forward </span>
            </button>
       
          </NavLink>
        </div>

        <div className="miniPlayer floatingBtn">
          <span className="material-icons-outlined open"> play_circle_filled </span>
          <span className="material-icons-outlined close"> close </span>
          <img src="./images/3.jpg" alt="" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
      </div>
    </main>
    </div>
  )
}
