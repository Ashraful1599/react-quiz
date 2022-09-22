import React from 'react'
import Logo from "../logo.svg"
import { NavLink } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";



export default function Header() {

    const {currentUser, logout} = useAuth();
    //console.log(currentUser.displayName);

  return (
    <div>
        <nav className="nav">
        <ul>
            <li>
                <NavLink className="brand" to="/">
                    <img src={Logo} alt="Learn with Sumit Logo" />
                </NavLink>
       
            
            </li>
        </ul>
        <div className="account">
            <span className="material-icons-outlined" title="Account">
            account_circle
            </span>
            <NavLink to="/register">{currentUser && currentUser.displayName? currentUser.displayName: "Signup"}</NavLink>
            <span className="material-icons-outlined" title="Logout" onClick={()=>logout()}> logout </span>
        </div>
        </nav>
    </div>
  )
}
