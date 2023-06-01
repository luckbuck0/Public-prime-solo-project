import { useSelector } from 'react-redux';

//importing necessary tools to utilize dispatch
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import DisplayTabs from './DisplayTabs';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Typography } from '@mui/joy';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Textarea from '@mui/joy/Textarea';
import Link from '@mui/material/Link';

export default function TabsPage() {

   const history = useHistory()

      const user = useSelector((store) => store.user);

      

    const tabs = useSelector((store) => store.tabs)

//---------------REDUX VARIABLES TO CONTAIN INPUT HTML------------------------

    const [isTrue, setIsTrue] = useState(false)
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [photo, setPhoto] = useState('');
    const [notes, setNotes] = useState('')

//---------------IMPORT VALUES NEEDED FOR TABS PAGE------------------------
    const params = useParams()
    const workSpaceId = params.id
    const dispatch = useDispatch();
    const editTab = useSelector(store => store.editTab)

    const sendHome = () => {
        history.push('/user');
    }
    
    useEffect(() => {
        dispatch({
          type: 'FETCH_IMAGES'
        })
      }, []);
      const img = useSelector((store) => store.images)

    console.log('this is edit tab in the tabs.jsx file', editTab);
    const setTrue = () => {
        setIsTrue(true)
    }
    

//---------------FUNCTION TO DISPATCH REDUX VALUES TO SAGA------------------------

    const postTabs = () => {
        if (name != '' && name != '' && url != '' && photo != '') {
            dispatch({
                type: 'POST_TABS',
                payload: {
                    name: name,
                    url: url,
                    photo: photo,
                    notes: notes,
                    id: workSpaceId
                }
            })
        }
        setIsTrue(false)
        showTabs()
    }

//---------------USE EFFECT TO RETRIEVE ALL TABS NEEDED------------------------
    
    useEffect(() => {
        dispatch({
            type: 'FETCH_TABS',
            payload: {
                id: workSpaceId
            }
        })
    }, []);

//---------------FUNCTION TO EVENT DELEGATE THE PLUS BUTTON BEING CLICK------------------------

    function showTabs() {
        if (isTrue == true) {
            return (
                <div >
                    <div >
                        <Input
                            type="text"
                            name="name"
                            placeholder='name'
                            required
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <Input
                            type="text"
                            name="name"
                            placeholder='url'
                            required
                            value={url}
                            onChange={(event) => setUrl(event.target.value)}
                        />
                        <Input
                            type="text"
                            name="name"
                            placeholder='photo_url'
                            required
                            value={photo}
                            onChange={(event) => setPhoto(event.target.value)}
                        />


                        <Textarea onChange={(event) => setNotes(event.target.value)} value={notes} ></Textarea>
                        <Button onClick={postTabs}>Submit</Button> <br />
                    </div>



                </div>
            );
        }
        else {
            return (
               <Button> 
                
               </Button>
            );
        }
    }

//---------RETURN THAT CONTAINS MAP THAT PASSES INDIVIDUAL TABS INTO A COMPONENT------------------

    return (
        <div className='profileArea' >
                  
                  {
                img.map((img) => {
                    return (
                        <div className='tabsProfileContainer'>
                        <div className='tabsImageContainer'>
                          <img className='profileImg' src={img.photo_url} alt="fd" ></img>
                          <Typography color='primary' sx={{ fontSize: 30, textAlign: 'center', mt: -2, ml: 0, fontWeight: 'bold' }}> <p className='welcomeText'>TABS <br />You're <br />It {user.username.toUpperCase()}!</p></Typography>
                          <Button variant='outlined' sx={{mb:2}} onClick={sendHome}>HOME</Button>
                          <Button variant='outlined' onClick={setTrue} >ADD NEW TABS</Button>
                          <LogOutButton className="btn" />
                        </div>
                      </div>
                    )
                })
            }
      
      


        <div className="tabsArea">
              
                
            {
                tabs.map((tab) => {
                    return (
                        <div key={tab.id}>
                            
                            <DisplayTabs
                                tabs={tab}
                                workSpaceId={workSpaceId}
                                images={img}
                                user={user}
                            />

                        </div>
                    )
                })
            }
            {/* {showTabs()} */}

        </div>
        </div>

        
    )
}





