import React from "react";
import "../css/LoginSignup.css";
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

function LoginSignup() {
  return (
    <div className="container">
      <div className="container--l">
        <XIcon />
      </div>
      <div className="container--r">
        <h1>Happening now</h1>
        <h2>Join today.</h2>
        <div className="container--buttons">
          <Button className="container--button1"><GoogleIcon className="googleIcon" />Sign up with Google</Button>
          <Button className="container--button1"><AppleIcon className='appleIcon' />Sign up with Apple</Button>
          <div className="lines">
            <div className="line"></div><p>or</p><div className="line"></div>
          </div>
          <Button className="container--button2">Create account</Button>
          <h3>Already have an account?</h3>
          <Button component={Link} to="/home" variant="outlined" className="container--button3">Sign in</Button>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
