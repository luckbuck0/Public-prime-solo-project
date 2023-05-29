
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
<Typography sx={{ mb: 2}} variant="h1"  >Login </Typography>
     
    <Input color='primary' size='md' variant="solid" className='textV' placeholder='Username'/>
    <Input color='primary' variant="solid"  className='inputV' placeholder='Password'/>
    <Button sx={{ mt: 2}} className='submitbutton' color="primary" variant="outlined" type="submit">Submit</Button>
      {/* <h3 className='textValues'>Login</h3> <br />
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div className='inputValues'>
        <label htmlFor="username">
        <p className='textV'>Username:</p>
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div className='inputValues' >
        <label   htmlFor="password">
            <h5 className='textV'>password:</h5>
          <input className='inputV'
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input  type="submit" name="submit" value="Log In" />
      </div> */}
    </form>
    </div>
  );
}

export default LoginForm;
