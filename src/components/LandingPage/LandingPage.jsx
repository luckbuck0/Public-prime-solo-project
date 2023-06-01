import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import LoginForm from '../LoginForm/LoginForm';
import { useSelector,useDispatch } from 'react-redux';



import { Typography } from '@mui/joy';


    

import Button from '@mui/joy/Button';
import { Box } from '@mui/material';
import Input from '@mui/joy/Input';

import RegisterForm from '../RegisterForm/RegisterForm';
import { func } from 'prop-types';
// CUSTOM COMPONENTS


function LandingPage() {


      const [loginUsername, setUsername] = useState('');
    const [loginPassword, setPassword] = useState('');
    const errors = useSelector(store => store.errors);
    const dispatch = useDispatch();

    const login = (event) => {
      event.preventDefault();
  
      if (loginUsername && loginPassword) {
        dispatch({
          type: 'LOGIN',
          payload: {
            username: loginUsername,
            password: loginPassword,
          },
        });
      } else {
        dispatch({ type: 'LOGIN_INPUT_ERROR' });
      }
    };


  const displayLogin = () => {

    if (clicklogin==true) {


      return (
        <div className='mainContainer'>


        <form className="formPanel">
          <div className='loginContainer'>
          <Typography color='primary' sx={{ mb: 2, mt:20,mt:21, fontSize:30}} variant="h1"  >Login </Typography>
        <Input 
        color='primary'
         size='md' 
         variant="solid" 
         className='textV' 
         placeholder='Username'
         value={loginUsername}
         onChange={(event) => setUsername(event.target.value)}
         />
        <Input 
        color='primary' 
        variant="solid"  
        className='inputV' 
        placeholder='Password'
        value={loginPassword}
         onChange={(event) => setPassword(event.target.value)}
        />
        <Button onClick={login} sx={{ mt: 2}} className='submitbutton' color="primary" variant="outlined" type="submit">Submit</Button>
          </div>
    
        </form>
        </div>
      )
    } else {
      return (
        <div className='mainContainer' >
        <form className="formPanel" >
          <Typography color='warning' sx={{ mb: 2 ,fontSize:40, textAlign:'center',  mt:7,fontWeight:20}}  variant="h2" >
                 COMMUNITY
                  </Typography>
            <img src="https://i.ibb.co/PZkJ5MF/01.png" alt="" srcset="" />
             <Typography color='warning' sx={{ mb: 2 ,fontSize:40, textAlign:'center', mt:7,fontWeight:20}}  variant="h1" >
               TEMPLATES
                  </Typography>
            </form>
        </div>
      )
    }
  }

  const [username, setRegisterUsername] = useState('');
      const [password, setRegisterPassword] = useState('');
      const [email,setEmail] = useState('')
    

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
      };
 
  const displayRegistration = () => {
    if (clickedRegister===true) {

      

      return (
           <div className='mainContainer' >
    <form className="formPanel" onSubmit={registerUser}>
    <Typography color='primary' sx={{ mb: 2,mt:19, fontSize:30}} variant="h2" >Register </Typography>
    <Input 
    value={username}
    color='primary' 
    size='md' 
    variant="solid" 
    className='textV' 
    placeholder='Username'
    required
    onChange={(event) => setRegisterUsername(event.target.value)}
    />
    <Input
     color='primary' 
     variant="solid" 
     className='inputV'
     placeholder='Password'
     value={password}
     onChange={(event) => setRegisterPassword(event.target.value)}
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
    <div className="formPanel" >
      <Typography color='warning' sx={{ mb: 2 ,fontSize:40, textAlign:'center',  mt:7,fontWeight:20}}  variant="h2" >
             TAILORED
              </Typography>
        <img src="https://i.ibb.co/4tLp8vn/7.png" alt="" srcset="" />
         <Typography color='warning' sx={{ mb: 2 ,fontSize:40, textAlign:'center', mt:7,fontWeight:20}}  variant="h1" >
           WORKSPACES
              </Typography>
        </div>
    </div>
      )
    }
  }



  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();
  const [clickedRegister,setClickedRegister] =useState(false);
  const [clicklogin,setClickLogin] = useState(false)
  //intitializing tools to use for dispatch

const registerClicked = () => {
  setClickedRegister(true)
  displayRegistration()
}


const loginClicked = () => {
  setClickLogin(true)
  displayLogin()
}
  return (
    <div className='FirstPage'>
    <div className="container">
      {/* <h2>{heading}</h2> */}
      <div className='frontPage'>
       {
        displayLogin()
       }
          <div className='loginPage'>
            
            {/* <p className='getOrganized'>GET <br /> ORGANIZED </p> */}
            <Typography color='primary' sx={{ mb: 2 ,fontSize:60, textAlign:'center', ml:5, mr:5, mt:0,fontWeight:10,  }}  variant="h1" >
               <p className='heroText'> THE FUTURE <br /> OF TAB <br /> MANAGEMENT</p>
              </Typography>
            <div className='buttonsFront'>
            <Button onClick={registerClicked} variant='outlined' sx={{mt:30, ml:-25}} className='registrationButton'>Register</Button>
            <Button  onClick={loginClicked} variant='outlined' sx={{mt:45, ml:-29}} className='loginButton'>Login</Button>
            
            </div>
           
          </div>
        {
          displayRegistration()
        }
      </div>

      {/* <div className="grid">
        <div className="grid-col grid-col_8">
        
        </div>
        <div className="grid-col grid-col_4">



          <center>
            <Typography color='primary' sx={{ mb: 2 , fontSize:30, justifyContent:'center', textAlign:'center', ml:5, mr:5, mt:-15}}>What We Offer</Typography>
          <div className='offers'>
         
            <div className="offerPanel">
            <img className='imgOffer' src="https://i.ibb.co/mSrrFzf/zentab3.png" alt="" srcset="" />
            <Typography color='primary' sx={{mt:-10, fontSize:25}}>Organization</Typography>
          
            </div>

            <div className="offerPanel">
            <img className='imgOffe' src="https://i.ibb.co/YBvZJPW/zentab2.png" alt="" srcset="" />
            <Typography color='primary' sx={{mt:-8, fontSize:25}}>Efficiency</Typography>
            </div>
            
            <div className="offerPanel">
            <img className='imgOffe' src="https://i.ibb.co/NmrGyFX/03.png" alt="" srcset="" />
            <Typography  color='primary' sx={{mt:-8,overflow: 'hidden', fontSize:25}}>Discovery</Typography>
            </div>
            
          </div>
          <Typography sx={{width:1300, mt:10,fontSize:19}}>
              The app designed to bring order to the wide variety
              of resources on the web. It aims to provide you with an
              organized and efficient way to store your tabs. Say goodbye to 
              cluttered screens and hello to a streamlined browsing experience.
            </Typography>
          </center>
        </div>
      </div> */}
    </div>
    </div>
  );
}

export default LandingPage;
