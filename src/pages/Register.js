import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "../style/Register.css";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import Alert from '@material-ui/lab/Alert';


function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
    } catch {
      setError("Failed to Create an Account");
    }
    setLoading(false);
  }

  return (
    
    <div className="login">
    {currentUser && <Redirect to="/login" /> }
      <div className="loginbody">
        <h1>Sign Up</h1>
        {error && <Alert severity="error">{error}</Alert>}
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className="loginemail">
            <h4>Email</h4>
            <TextField
              id="outlined-email-input"
              label="Enter email"
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              autoComplete="current-email"
              variant="outlined"
            />
          </div>
          <div className="loginpassword">
            <h4>Password</h4>
            <TextField
              id="outlined-password-input"
              label="Enter password"
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              autoComplete="current-password"
              variant="outlined"
            />
          </div>
          <div className="loginbutton">
            <Button type="submit" variant="contained" color="primary" disableElevation disabled={Loading}>
              Sign up
            </Button>
          </div>
          <div className="loginforgetpass">
            <h4>Aldready registered?</h4>
            <Link to="/login">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
