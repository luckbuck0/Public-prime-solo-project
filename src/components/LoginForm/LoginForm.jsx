
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';

import { Typography } from '@mui/joy';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
 
  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    
    <div className='mainContainer'>


    <form className="formPanel" onSubmit={login}>
      <div className='loginContainer'>
      <Typography sx={{ mb: 2, mt:20}} variant="h1"  >Login </Typography>
    <Input 
    onChange={(event) => setUsername(event.target.value)} 
    color='primary' size='md'
     variant="solid" 
     className='textV' 
     placeholder='Username'/>
    <Input  
    onChange={(event) => setPassword(event.target.value)} 
    color='primary' variant="solid"  
    className='inputV' 
    placeholder='Password'/>
    <Button onClick={login}  sx={{ mt: 2}} className='submitbutton' color="primary" variant="outlined" type="submit">Submit</Button>
      </div>

    </form>
    </div>
  );
}

export default LoginForm;
