import React from "react";
import '../style/Header.css'
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import {
  Button,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core";

export default function ButtonAppBar() {
  const {  currentUser,logout } = useAuth();
  return (
    <div>
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Typography variant="h6" className="appbartitle">
            Todo
          </Typography>
          <Typography variant="p" >
          {currentUser?.email}
          </Typography>
          {
            currentUser && <Button color="inherit"><Link to='/login' onClick={logout} >Logout</Link></Button>
          }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
