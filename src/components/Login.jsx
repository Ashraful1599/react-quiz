import React from 'react'
import { NavLink } from 'react-router-dom'
import signupimg from "../images/signup.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {

  const [state, setState] = useState({
    email: '',
    password: '',
  })

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  const inputHandle = (e) =>{
    setState({
      ...state,
      [e.target.name] : e.target.value,
    })
    
  }

  const {username, email, password, confirmPassword, agree} = state;

  async function handleSubmit(e) {
    e.preventDefault();
    //console.log(e);
    // do validation

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }



  return (
    <div>
    <main className="main">
      <div className="container">
        <h1>Login to your account</h1>
        <div className="column">
          <div className="illustration">
          <img src={signupimg} alt="Signup" />
          </div>
          <form className="login form" onSubmit={handleSubmit}>
            <div className="textInput">
              <input value={email} name="email" onChange={inputHandle} type="text" placeholder="Enter email" />
              <span className="material-icons-outlined"> alternate_email </span>
            </div>

            <div className="textInput">
              <input value={password} name="password" onChange={inputHandle} type="password" placeholder="Enter password" />
              <span className="material-icons-outlined"> lock </span>
            </div>

            <button disabled={loading} type='submit' className="button">
              <span>Submit now</span>
            </button>
            <p>{error}</p>

            <div className="info">Don't have an account? <NavLink to="/register">Register</NavLink> instead.</div>
          </form>
        </div>
      </div>
    </main>
    </div>
  )
}
