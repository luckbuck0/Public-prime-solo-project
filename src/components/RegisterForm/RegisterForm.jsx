import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';

import { Typography } from '@mui/joy';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState('')
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        email:email
      },
    });
  }; // end registerUser

  return (
    <div className='mainContainer' >
    <form className="formPanel" onSubmit={registerUser}>
    <Typography sx={{ mb: 2}} variant="h1" >Register </Typography>
    <Input color='primary'  size='md' variant="solid" className='textV' placeholder='Username'/>
    <Input color='primary' variant="solid"  className='inputV' placeholder='Password'/>
    <Input color='primary' variant="solid"  className='inputV' placeholder='Email'/>
    <Button variant="outlined" sx={{ mt: 2}} color='primary' type="submit">Submit</Button>
      {/* <h3 className='textValues'>Register User</h3>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div className='inputValues'>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div className='inputValues'>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          /> <br></br>
            Email:
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div> */}
    </form>
    </div>
  );
}

export default RegisterForm;
