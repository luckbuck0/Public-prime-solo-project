import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

//importing necessary tools to utilize dispatch
import { useDispatch} from 'react-redux';
import { useEffect,useState } from 'react';

function UserPage() {

  const [workspaceName, setWorkspaceName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  const addWorkspace = () =>{
    if (workspaceName!='' && imageUrl!=''){
      dispatch({
        type:'ADD_WORKSPACES',
        payload:{
          workspaceName:workspaceName,
          imageUrl:imageUrl
        }
      })
    }
  }

  const dispatch= useDispatch();

//reducer from redux that holds the value of the users profile img
const images= useSelector((store)=> store.images)

console.log('this is the images in userpage',images);

  const onLogin = (event) => {
    history.push('/login');
  };

  
// use effect with the dispatch that will be sent to the images.saga 
// to run a function
  useEffect(() =>{
    dispatch({
      type: 'FETCH_IMAGES'
    })
  }, []);
  useEffect(() =>{
    dispatch({
      type: 'FETCH_WORKSPACES'
    })
  }, []);

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <input
            type="text"
            name="name"
            placeholder='name'
            required
            value={workspaceName}
            onChange={(event) => setWorkspaceName(event.target.value)}
          />
          <input
            type="text"
            name="name"
            placeholder='image_url'
            required
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
          <button onClick={addWorkspace}>Submit</button>
     {
      images.map(img => {
        return (
          <div key={img.img_id}>
            <img src={img.photo_url} alt="fd" ></img>
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
