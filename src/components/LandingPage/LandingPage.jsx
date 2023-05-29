import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import LoginForm from '../LoginForm/LoginForm';

import { Typography } from '@mui/joy';
import Button from '@mui/joy/Button';



// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { func } from 'prop-types';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  //intitializing tools to use for dispatch


  return (
    <div className='FirstPage'>
    <div className="container">
      {/* <h2>{heading}</h2> */}
      <div className='frontPage'>
        <LoginForm />
          <div className='loginPage'>
            
            {/* <p className='getOrganized'>GET <br /> ORGANIZED </p> */}
            <Typography  sx={{ mb: 2 ,fontSize:50, textAlign:'center', ml:5, mr:5, mt:7,fontWeight:20}}  variant="h1" >
              GET <br /> ORGANIZED 
              </Typography>
            <div className='buttonsFront'>
     
            <Button variant='outlined' sx={{mt:30, ml:-21}} className='registrationButton'>Login</Button>
            <Button variant='outlined' sx={{mt:30, ml:-25}} className='registrationButton'>Register</Button>
            </div>

          </div>
        <RegisterForm />
      </div>

      <div className="grid">
        <div className="grid-col grid-col_8">
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra lacus
            ut ex molestie blandit. Etiam et turpis sit amet risus mollis
            interdum. Suspendisse et justo vitae metus bibendum fringilla sed
            sed justo. Aliquam sollicitudin dapibus lectus, vitae consequat odio
            elementum eget. Praesent efficitur eros vitae nunc interdum, eu
            interdum justo facilisis. Sed pulvinar nulla ac dignissim efficitur.
            Quisque eget eros metus. Vestibulum bibendum fringilla nibh a
            luctus. Duis a sapien metus.
          </p>

          <p>
            Praesent consectetur orci dui, id elementum eros facilisis id. Sed
            id dolor in augue porttitor faucibus eget sit amet ante. Nunc
            consectetur placerat pharetra. Aenean gravida ex ut erat commodo, ut
            finibus metus facilisis. Nullam eget lectus non urna rhoncus
            accumsan quis id massa. Curabitur sit amet dolor nisl. Proin
            euismod, augue at condimentum rhoncus, massa lorem semper lacus, sed
            lobortis augue mi vel felis. Duis ultrices sapien at est convallis
            congue.
          </p>

          <p>
            Fusce porta diam ac tortor elementum, ut imperdiet metus volutpat.
            Suspendisse posuere dapibus maximus. Aliquam vitae felis libero. In
            vehicula sapien at semper ultrices. Vivamus sed feugiat libero. Sed
            sagittis neque id diam euismod, ut egestas felis ultricies. Nullam
            non fermentum mauris. Sed in enim ac turpis faucibus pretium in sit
            amet nisi.
          </p> */}
        </div>
        <div className="grid-col grid-col_4">



          <center>
            <Typography sx={{ mb: 2 , fontSize:30, textAlign:'center', ml:5, mr:5, mt:0}}>What We Offer</Typography>
          <div className='offers'>
         
            <div className="offerPanel">
            <img className='imgOffer' src="https://i.ibb.co/mSrrFzf/zentab3.png" alt="" srcset="" />
            <Typography sx={{mt:-40, fontSize:25}}>Organization</Typography>
            </div>

            <div className="offerPanel">
            <img className='imgOffer' src="https://i.ibb.co/YBvZJPW/zentab2.png" alt="" srcset="" />
            <Typography sx={{mt:-40, fontSize:25}}>Organization</Typography>
            </div>

            <div className="offerPanel">
            <img  src="https://i.ibb.co/WVVnQp2/10.png" alt="" srcset="" />
            <Typography sx={{mt:-30, fontSize:25}}>Organization</Typography>
            </div>
          

            
  

         
           
          </div>
            
          </center>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
