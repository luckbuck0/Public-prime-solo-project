import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/joy';
function LoginPage() {
  const history = useHistory();

  return (
    <div className='loginArea'>
      <LoginForm />

      <center>
        <Button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/home');
          }}
          sx={{mt:10}}
        >
          Home
        </Button> <br />
        <img className='loginImage'  src="https://i.ibb.co/NnmwkJ5/zentab-Logo1.png" alt="" srcset="" />
        
      </center>
    </div>
  );
}

export default LoginPage;
