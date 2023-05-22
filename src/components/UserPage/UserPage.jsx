import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

//importing necessary tools to utilize dispatch
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';

function UserPage() {

  const dispatch= useDispatch();

const images= useSelector((store)=> store.images)

console.log('this is images--->',images);
  const onLogin = (event) => {
    history.push('/login');
  };

  useEffect(() =>{
    dispatch({
      type: 'FETCH_IMAGES'
    })
  }, []);

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
