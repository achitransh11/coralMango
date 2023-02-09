import React, { useContext, useState } from 'react'
import './Login.scss';
import { UserContext } from "../../../Context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    if (newEntry.email === "demo@coralmango.com" && newEntry.password === "demo123") {
      console.log("Home page!!");
      setUser(true);
      setAuthError(false);
    }
    else {
      setAuthError(true);
    }
  }

  return (
    <div className="login">

      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <input
            type="email"
            name="email"
            id="passsword"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button className="loginButton" type="submit">Sign In</button>
          {authError ? <span className="warn">Wrong User Credentials</span> : ""}
          <span>New to CoralMango? <b>Sign up now.</b></span>
          <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>learn more</b>.</small>
        </form>
      </div>
    </div>
  )
}

export default Login 