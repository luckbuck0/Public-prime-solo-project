import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import LogOutButton from "../LogOutButton/LogOutButton";

import { Typography } from '@mui/joy';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Textarea from '@mui/joy/Textarea';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';

export default function DisplayTabs(props) {

    const [isTrue, setIsTrue] = useState(false)
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [photo, setPhoto] = useState('');
    const [notes, setNotes] = useState('')

    const setTrue = () => {
        setIsTrue(true)
    }
    const backToTabs = () => {
        history.push(`/tabs/${tab.id}`)
    }

    const postTabs = () => {
        if (name != '' &&  url != '' && photo != '') {
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

    function showTabs() {
        if (isTrue == true) {
            return (
                <div >
              
                <div className='newTabsContainer' >
                    <div className='newTabs'  >
                        <Input
                            sx={{mt:2}}
                            type="text"
                            name="name"
                            placeholder='Name'
                            required
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <Input
                            sx={{mt:2}}
                            type="text"
                            name="name"
                            placeholder='Web Url'
                            required
                            value={url}
                            onChange={(event) => setUrl(event.target.value)}
                        />
                        <Input
                            sx={{mt:2}}
                            type="text"
                            name="name"
                            placeholder='Photo Url'
                            required
                            value={photo}
                            onChange={(event) => setPhoto(event.target.value)}
                        />


                        <Textarea 
                        placeholder="Notes" 
                        onChange={(event) => setNotes(event.target.value)} 
                        value={notes} 
                        sx={{mt:2}}
                        >

                        </Textarea>
                        
                        <Button sx={{mt:2}} onClick={postTabs}>Submit</Button> <br />
                    </div>



                </div>
                </div>
            );
        }
       
    }

    const history = useHistory()
    // const [isTrue,setIsTrue]=useState(false)
    // const [name,setName] = useState('');
    // const [url,setUrl] = useState('');
    // const [photo,setPhoto] = useState('');
    // const [notes,setNotes] = useState('')

//---------------FUNCTION TO SEND USER TO EDIT PAGE------------------------

    const editTab = useSelector(store => store.editTab)
    const tabs = props.tabs
    const [tab, setTab] = useState(tabs)
    const workSpaceId = props.workSpaceId
    const img= props.images[0]
    const user = props.user
    console.log('this is tabs.id--->', tabs.id);
    console.log('this is workSpaceId-->', workSpaceId);
    console.log('this is images-->', img);

    const dispatch = useDispatch()

    

    useEffect(() => {
        const idToEdit = tabs.id;

        dispatch({
            type: 'FETCH_TAB_TO_EDIT',
            payload: idToEdit
        })

    }, [])

    console.log('this is edittab in client side', editTab);

//---------------FUNCTIONS TO UPDATE REDUX EDITTABS -----------------------F
    // const handleNameEdit = (event) => {
    //     dispatch({
    //         type:'MODIFY_NAME',
    //         payload:event.target.value,
    //     })
    // }

    // const handleUrlEdit = (event) => {
    //     dispatch({
    //         type:'MODIFY_URL',
    //         payload:event.target.value,
    //     })
    // }

    // const handlePhotoEdit = (event) => {
    //     dispatch({
    //         type:'MODIFY_PHOTO',
    //         payload:event.target.value,
    //     })
    // }


    // const handleNotesEdit = (event) => {
    //     dispatch({
    //         type:'MODIFY_NOTES',
    //         payload:event.target.value,
    //     })
    // }

//---------------FUNCTION TO SEND USER TO EDIT PAGE------------------------
// previously used to send dispatch with a payload of the tab.id to be
// retrieved but because of bug this was moved to edit page
    const ifTrue = () => {

        history.push(`/EditTabs/${tabs.id}`)
        //     const idToEdit = tabs.id;

        //     dispatch({
        //       type: 'FETCH_TAB_TO_EDIT',
        //       payload: idToEdit
        //     })


        // setIsTrue(true)
        // updateTabs()
    }

//---------------FUNCTION TO SEND UPDATED EDITTAB REDUX VALUE------------------------
// and also update dom by setting the value of istrue to false and running updateTabs

    // const sendUpdate = () => {
    //     if (editTab.name != '' && editTab.photo != '' && editTab.url != '') {
    //         console.log('these are all the values', name, photo, url, notes);
    //         dispatch({
    //             type: 'UPDATE_TABS',
    //             payload: editTab
    //         })
    //         setIsTrue(false)
    //         updateTabs()
    //     }

    // }

//---------------FUNCTION TO DELETE TABS------------------------

    const deleteTabs = () => {
        dispatch({
            type: 'DELETE_TABS',
            payload: {
                id: tabs.id,
                workSpaceId: workSpaceId
            }
        })
    }

//---------------FUNCTION TO RENDER DOM ON CLICK OF EDIT BUTTON------------------------

// if the edit button is clicked isTrue is change to true this is run and then the input
// html is shown on the screen allow user to edit but because of bug that would run if
// two edits were clicked which changed both previous values to the one thats clicked
// I had to make a edit page 

    // const updateTabs = () => {
    //     if (isTrue == true) {
    //         return (
    //             <div >
    //             <div >
    //             <input
    //     type="text"
    //     name="name"


    //     value={editTab.name}
    //     onChange={handleNameEdit}
    //   />
    //      <input
    //     type="text"
    //     name="name"


    //     value={editTab.url}
    //     onChange={handleUrlEdit}
    //   />
    //      <input
    //     type="text"
    //     name="name"


    //     value={editTab.photo}
    //     onChange={handlePhotoEdit}
    //   />


    //                 <textarea onChange={handleNotesEdit} value={editTab.notes} ></textarea>
    //                 <button onClick={sendUpdate}>Submit</button> <br />
    //             </div>



    //         </div>
    //         )
    //     } else {
    //         return (
    //             <div className="workspaceContent">
    //             <p>Name:{tabs.name} </p>
    //             <p>Url: <br />{tabs.url}</p>
    //             <img className="displayImage" src={tabs.photo} alt="" />
    //             <p>Notes <br />{tabs.notes}</p>
    //             <span onClick={ifTrue} >🖊</span><span onClick={deleteTabs}  className="text">🪣</span>
    //         </div>
    //         )
    //     }
    // }

//---------------RETURN THAT RETUNS THE TABS ATTRIBUTES------------------------

    return (
        // updateTabs() 
    
        <div className="tabsContainer">
            <div className="tabContent">
            <Typography color="primary" sx={{fontSize:15,mt:2}} component='h3'>{tabs.name} </Typography>
            <Link className="url" target="_blank" rel="noreferrer" href={tabs.url}  underline="none" color="primary" sx={{fontSize:15,mt:2}} >
                 <br /> <Typography color="primary" className="url" sx={{width:200,ml:2 ,mr:1}}>{tabs.url}</Typography> 
            </Link> 
            <img className="displayTabs" src={tabs.photo} alt="" />
            <Typography color="primary" sx={{height:50,  fontSize:13, width:200, ml:2}} component="h4" className='notes'>Notes <br />{tabs.notes}</Typography>
            <Button variant="outlined" sx={{mt:7}} onClick={ifTrue} >🖊</Button><Button variant="outlined" sx={{ml:10}}   className="text" onClick={deleteTabs} >❌</Button>
        </div>
       
       
        </div>
       
       
       
     
    
        
    )
}