import React from "react";
import signupimg from "../images/signup.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";




export default function Register() {

  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: ''
  })

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
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
    if (state.password !== state.confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
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
          <h1>Create an account</h1>
          <div className="column">
            <div className="illustration">
              <img src={signupimg} alt="Signup" />
            </div>
            <form className="signup form" onSubmit={handleSubmit}>
              <div className="textInput">
                <input name="username" onChange={inputHandle} value={username} type="text" placeholder="Enter name" />
                <span className="material-icons-outlined"> person </span>
              </div>

              <div className="textInput">
                <input name="email" onChange={inputHandle} value={email} type="text" placeholder="Enter email" />
                <span className="material-icons-outlined"> alternate_email </span>
              </div>

              <div className="textInput">
                <input name="password" onChange={inputHandle} value={password} type="password" placeholder="Enter password" />
                <span className="material-icons-outlined"> lock </span>
              </div>

              <div className="textInput">
                <input name="confirmPassword" onChange={inputHandle} value={confirmPassword} type="password" placeholder="Confirm password" />
                <span className="material-icons-outlined"> lock_clock </span>
              </div>

              <label>
                <input name="agree" onChange={inputHandle} value={agree} type="checkbox" />
                <span>I agree to the Terms & Conditions</span>
              </label>

              <button disabled={loading} className="button" type="submit">
                <span>Submit now</span>
              </button>
              <p>{error}</p>

              <div className="info">
                Already have an account? <NavLink to="/login">Login</NavLink> instead.
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
