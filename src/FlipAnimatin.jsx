import React, { useState } from "react";
import "./assets/component/LogIn.css";

function LoginPage() {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleLogIn = () => {
    alert("Log In submitted!");
    window.location.href = "/Form";
  };

  const handleSignUp = () => {
    alert("Sign Up submitted!");
    window.location.href = "/Form";
  };

  return (
    <div className="containeForm">
      <div className={`form-box ${isFlipped ? "flip" : ""}`}>
        {/* Front - Log In */}
        <div className="form-front">
          <div className="header-sign-up">
            <h1>Login</h1>
            <button onClick={() => setIsFlipped(true)}>Sign Up</button>
          </div>
          <div className="column">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="submit" onClick={handleLogIn}>
              Log In
            </button>
          </div>
        </div>

        {/* Back - Sign Up */}
        <div className="form-back">
          <div className="header-sign-up">
            <h1>Sign Up</h1>
            <button onClick={() => setIsFlipped(false)}>Log In</button>
          </div>

          <div className="column">
            <div className="row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="submit" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>

          <div className="footer">
            <label>
              <input type="checkbox" /> I agree to terms
            </label>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
