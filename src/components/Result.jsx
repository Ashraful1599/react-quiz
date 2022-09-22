import React from 'react'
import resultimg from "../images/success.png"

export default function Result() {
  return (
    <div>
            <main className="main">
    
      <div className="container">
        <div className="summary">
          <div className="point">

            <p className="score">
              Your score is <br />
              5 out of 10
            </p>
          </div>

          <div className="badge">
            <img src={resultimg} alt="Success" />
          </div>
        </div>

        <div className="analysis">
          <h1>Question Analysis</h1>
          <h4>You answerd 5 out of 10 questions correctly</h4>

          <div className="question">
            <div className="qtitle">
              <span className="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>
            <div className="answers">
      
              <label className="answer" htmlFor="option1"> A New Hope 1 </label>

     
              <label className="answer" htmlFor="option2"> A New Hope 1 </label>


              <label className="answer" htmlFor="option3"> A New Hope 1 </label>

           
              <label className="answer wrong" htmlFor="option4"> <span>A New Hope 1</span><span>Your answer</span> </label>

   
              <label className="answer" htmlFor="option5"> A New Hope 1 </label>

   
              <label className="answer" htmlFor="option6"> A New Hope 1 </label>

      
              <label className="answer correct" htmlFor="option7"> <span>A New Hope 1</span><span>Correct answer</span> </label>

             
              <label className="answer" htmlFor="option8"> A New Hope 1 </label>


              <label className="answer" htmlFor="option9"> A New Hope 1 </label>


              <label className="answer" htmlFor="option10"> A New Hope 1 </label>
            </div>
          </div>

          <div className="question">
            <div className="qtitle">
              <span className="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>
            <div className="answers">
   
              <label className="answer" htmlFor="option1"> A New Hope 1 </label>

   
              <label className="answer" htmlFor="option2"> A New Hope 1 </label>

        
              <label className="answer" htmlFor="option3"> A New Hope 1 </label>

            
              <label className="answer wrong" htmlFor="option4"> <span>A New Hope 1</span><span>Your answer</span> </label>

          
              <label className="answer" htmlFor="option5"> A New Hope 1 </label>

 
              <label className="answer" htmlFor="option6"> A New Hope 1 </label>


              <label className="answer correct" htmlFor="option7"> <span>A New Hope 1</span><span>Correct answer</span> </label>


              <label className="answer" htmlFor="option8"> A New Hope 1 </label>


              <label className="answer" htmlFor="option9"> A New Hope 1 </label>


              <label className="answer" htmlFor="option10"> A New Hope 1 </label>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}
