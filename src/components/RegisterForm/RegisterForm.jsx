import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';

import { Typography } from '@mui/joy';

function RegisterForm(props) {
  console.log('this is registeredClicked:',props.clickedRegister);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState('')
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  let clickedRegister = props.clickedRegister
  let setClickedRegister = props.setClickedRegister
  const display = () => {
    if (clickedRegister===true) {
      return (
           <div className='mainContainer' >
    <form className="formPanel" onSubmit={registerUser}>
    <Typography sx={{ mb: 2,mt:20}} variant="h1" >Register </Typography>
    <Input 
    value={username}
    color='primary' 
    size='md' 
    variant="solid" 
    className='textV' 
    placeholder='Username'
    required
            onChange={(event) => setUsername(event.target.value)}
    />
    <Input
     color='primary' 
     variant="solid" 
     className='inputV'
     placeholder='Password'
     value={password}
     onChange={(event) => setPassword(event.target.value)}
     />
    <Input 
    color='primary' 
    variant="solid"  
    className='inputV' 
    placeholder='Email'
    value={email}
    onChange={(event) => setEmail(event.target.value)}
    />
    <Button variant="outlined" sx={{ mt: 2}} color='primary' type="submit">Submit</Button>
      
    </form>
    </div>
      )
    } else {
      return (
          <div className='mainContainer' >
    <form className="formPanel" onSubmit={registerUser}>
      <Typography color='primary' sx={{ mb: 2 ,fontSize:40, textAlign:'center',  mt:7,fontWeight:20}}  variant="h2" >
             TAILORED
              </Typography>
        <img src="https://i.ibb.co/4tLp8vn/7.png" alt="" srcset="" />
         <Typography color='primary' sx={{ mb: 2 ,fontSize:40, textAlign:'center', mt:7,fontWeight:20}}  variant="h1" >
           WORKSPACES
              </Typography>
        </form>
    </div>
      )
    }
  }
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
  
    <div>
      
    </div>
  
  );
}

export default RegisterForm;
