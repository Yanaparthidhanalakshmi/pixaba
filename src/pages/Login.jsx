import React from 'react';
import { Link } from "react-router-dom";
// import "../index.css"
export default function Login() {
    return (
        <>
            <form id="login-form">
                <label className="label-text" htmlFor="username">UserName:</label>
                <input className="input-field" type="text" id="username" />
                <label className="label-text" htmlFor="password">Password:</label>
                <input className="input-field" type="password" id="password" />
                <p id="login-button" onClick={valids}>Login</p>
                <Link to="/register" id="register-link">Register</Link>
            </form>
        </>
    )
}
function valids(){
    let uname=document.getElementById("username").value
    let pws=document.getElementById("password").value
    if(uname===window.localStorage.getItem("Username")&&pws===window.localStorage.getItem("Password")){
        window.open("/Search2")
    }
    else{
        alert("enter valid details")
    }
}