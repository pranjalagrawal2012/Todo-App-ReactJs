import React, { useState } from "react";
import { TextField, Button} from "@material-ui/core";
import "../style/Login.css";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import Alert from '@material-ui/lab/Alert';



function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <div className="login">
      <div className="loginbody">
        <h1>Log In</h1>
        {error && <Alert severity="error">{error}</Alert>}
        {currentUser && <Redirect to="/" /> }
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
              Sign in
            </Button>
          </div>
          <div className="loginforgetpass">
            <h4>forget</h4>
            <Link to='/forget-password'>password?</Link>
          </div>
          <div className="loginforgetpass">
            <h4>Need an account? </h4>
            <Link to="/register">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
