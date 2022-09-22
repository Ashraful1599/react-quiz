import React from "react";
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import Result from "./components/Result";
import Error from "./components/Error";
import './sass/main.scss'
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {




  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />

          <Route  path="/quiz" element={<Quiz />} >
            <Route path=":id" element={<Quiz />} />  
          </Route>



          <Route exact path="/result" element={<Result /> } />
          <Route path="*" element={<Error />} />

        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
