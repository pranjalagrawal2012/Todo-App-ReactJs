import React, { useState } from "react";
import { TextField, Button} from "@material-ui/core";
import "../style/Login.css";
import { useAuth } from "../contexts/authContext";
import Alert from '@material-ui/lab/Alert';
import { Link } from "react-router-dom";



function ForgetPassword() {
  const [email, setEmail] = useState('')
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [Loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        setMessage('')
      setError("");
      setLoading(true);
    await resetPassword(email)
    setMessage('Check your inbox for furthur instructions')
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <div className="login">
      <div className="loginbody">
        <h1>Password Reset</h1>
        {error && <Alert severity="error">{error}</Alert>}
        {message && <Alert severity="success">{message}</Alert>}

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
          <div className="loginbutton">
            <Button type="submit" variant="contained" color="primary" disableElevation disabled={Loading}>
              Reset Password 
            </Button>
          </div><br></br>
          <div className="loginforgetpass">
            <Link to='/login'>Login</Link>
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

export default ForgetPassword;
