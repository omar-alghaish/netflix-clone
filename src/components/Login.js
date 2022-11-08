import React, { useState } from "react";
import "../style/login.css";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";

function Login() {
  const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          onClick={() => navigate("/")}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          className="loginScreen_logo"
        />

        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignUp />
        ) : (
          <div>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch: Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => {
                    setSignIn(true);
                    console.log(signIn);
                  }}
                  className="loginScreen_getStarted"
                >
                  START
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Login;
