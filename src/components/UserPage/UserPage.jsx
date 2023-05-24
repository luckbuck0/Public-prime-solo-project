import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

//importing necessary tools to utilize dispatch
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import UserProfile from './userProfile';

function UserPage() {



  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({
      type: 'FETCH_IMAGES'
    })
  }, []);




  const dispatch = useDispatch();


  //reducer from redux that holds the value of the users profile img
  const images = useSelector((store) => store.images)

  const workSpace = useSelector((store) => store.workspaces)
  console.log('this is the workSpace in userpage', workSpace);
  console.log('this is the images in userpage', images);

  const onLogin = (event) => {
    history.push('/login');
  };



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
                <img className='profileImg' src={img.photo_url} alt="fd" ></img>
                <h2>Welcome, <br />{user.username}!</h2>

                <LogOutButton className="btn" />
              </div>
            </div>
          )
        })
      }

      <UserProfile />

      <div>

      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
