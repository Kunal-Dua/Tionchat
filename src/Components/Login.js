import React from 'react';
import './CSS/Login.css';
import Button from '@mui/material/Button';
import logo from '../img/tionchat-logo.png';
import google_g_icon from '../img/google_g_icon.png';
import { auth, provider } from '../firebase';
import { useStateValue } from '../State Provider/StateProvider';

const Login = () => {
  const [{ user }, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: 'SET_USER',
          user: result.user,
        });
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };
  return (
    <div className='login'>
      <div className='login__container'>
        <img src={logo} />
        <h1>Tionchat</h1>
        <h3>Website name</h3>
        <Button onClick={signIn}>
          <img src={google_g_icon} alt='' />
          SIGN IN WITH GOOGLE
        </Button>
      </div>
    </div>
  );
};

export default Login;
