import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

import { Typography } from '@mui/joy';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Textarea from '@mui/joy/Textarea';
//importing necessary tools to utilize dispatch
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import UserProfile from './userProfile';
import DisplaySpaces from './DisplayWorkspaces';

function UserPage() {



  const user = useSelector((store) => store.user);

  const [istrue, setIsTrue] = useState(false)

  const [workspaceName, setWorkspaceName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    dispatch({
      type: 'FETCH_IMAGES'
    })
  }, []);


  const addWorkspace = () => {
    if (workspaceName != '' && imageUrl != '') {
      dispatch({
        type: 'ADD_WORKSPACES',
        payload: {
          workspaceName: workspaceName,
          imageUrl: imageUrl,
          notes: notes,
          category: selectedCategory
        }
      })
      setIsTrue(false)
      showAddWorkspace()
    }
  }

  const dispatch = useDispatch();


  //reducer from redux that holds the value of the users profile img
  const images = useSelector((store) => store.images)

  const workSpace = useSelector((store) => store.workspaces)
  console.log('this is the workSpace in userpage', workSpace);
  console.log('this is the images in userpage', images);

  const onLogin = (event) => {
    history.push('/login');
  };

  const setTrue = () => {
    setIsTrue(true)
    showAddWorkspace()
  }

  const setFalse = () => {
    setIsTrue(false)
    showAddWorkspace()
  }

  function showAddWorkspace() {
    if (istrue == true) {
      return (
        <div className='newWorkspaceContainer'>
          <div  className='newWorkspace'  >
            <Input
              type="text"
              name="name"
              placeholder='Name'
              required
              onChange={(event) => setWorkspaceName(event.target.value)} />
               <br />
            <Input
              type="text"
              name="name"
              placeholder='image_url'
              required
              onChange={(event) => setImageUrl(event.target.value)} /> 
              <br />
            <Textarea  minRows={3} onChange={(event) => setNotes(event.target.value)}  ></Textarea>
          </div>
          {/* <Select name="Category" id="category" onChange={() => setSelectedCategory(event.target.value)}>
            <MenuItem >Select an option<MenuItem>
            <MenuItem >Graphic Design<MenuItem>
            <MenuItem >Coding<MenuItem>
            <MenuItem >Architecture<MenuItem>
            <MenuItem>Animations<MenuItem>
          <Select> */}
            <Select sx={{height:30, mr:3}} onChange={() => setSelectedCategory(event.target.value)} >
    <MenuItem value="Architecturw">Architecture</MenuItem>
    <MenuItem value="Design">Design</MenuItem>
    <MenuItem value="Coding">Coding</MenuItem>
    <MenuItem value="Animation">Animation</MenuItem>
    <MenuItem value="Fashion">Fashion</MenuItem>
  </Select>
          <Button size='sm' sx={{mt:2}} onClick={addWorkspace}>Submit</Button>
          <Button size='sm' sx={{ml:2}} onClick={setFalse}>Cancel</Button>
        </div>
      );
    }

  }

  // use effect with the dispatch that will be sent to the images.saga 
  // to run a function
  useEffect(() => {
    dispatch({
      type: 'FETCH_IMAGES'
    })
  }, []);

  // use effect with the dispatch that will be sent to the workspace.saga 
  // to run a function
  useEffect(() => {
    dispatch({
      type: 'FETCH_WORKSPACES'
    })
  }, []);

  // this component doesn't do much to start, just renders some user reducer info to the DOM

  return (
    <div className="container">




      {
        images.map(img => {
          return (
            <div key={img.img_id}>

              <div className='profileArea' >



                <div className='profileContainer'>
                  <div className='imgContainer'>
                    <img className='profileImg' src={img.photo_url} alt="fd" ></img>
                    <Typography color='primary' sx={{ fontSize: 30, textAlign: 'center', mt: -2, ml: 0, fontWeight: 'bold' }}> <p className='welcomeText'> WELCOME<br /> BACK <br />{user.username.toUpperCase()}!</p></Typography>
                    <Button variant='outlined' onClick={setTrue}>ADD NEW WORKSPACE</Button>
                    <Button sx={{mt:2}} variant='outlined' >CONTACT</Button> <br />
                    <LogOutButton className="btn" />
                  </div>
                </div>

                <div className='workspaceDisplay'>


                  {
                    workSpace.map((spaces) => {
                      return (
                        <div className='workspaceContainer' key={spaces.id}>
                          <DisplaySpaces
                            spaces={spaces}
                          />
                         
                        </div>
                      )
                    })
                  }
                   {showAddWorkspace()}
                   
                  
                </div>


              </div>
            </div>
          )
        })
      }



      <div>

      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
