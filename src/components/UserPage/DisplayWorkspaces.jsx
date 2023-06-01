import { Button, Typography } from "@mui/joy"
import { display } from '@mui/system';
import { Box } from "@mui/material";
import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function DisplaySpaces(props) {

//---------------IMPORTS NEEDED FOR DISPLAY PAGE------------------------

    let workSpace = props.spaces
    const dispatch = useDispatch()
    const history = useHistory()
// console.log('this is workspace id in the display spaces-->',workSpace.id);
    const [istrue, setIsTrue] = useState(false)

//---------------REDUX VARIABLES NEEDED FOR THIS PAGE------------------------

    const [workspaceName, setWorkspaceName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')
    const [notes, setNotes] = useState('')

//---------------USE EFFECT USED TO RETRIEVE SPECIFIC WORKSPACE------------------------

    useEffect(() => {
        const idToEdit = workSpace.id;
    
        dispatch({
          type: 'FETCH_WORKSPACE_TO_EDIT',
          payload: workSpace.id
        
        })
    
      }, [])

   
//---------------FUNCTION USED TO SEND USERS TO EDIT PAGE------------------------

    const ifTrue = () => {
        const idToEdit = workSpace.id;
        history.push(`/edit/${workSpace.id}`)
        // console.log('this is the current workspace id-->',idToEdit);
        // dispatch({
        //     type: 'FETCH_WORKSPACE_TO_EDIT',
        //     payload: workSpace.id
        //   })
        // setIsTrue(true)
       
        // updateWorkspace()
       
       
    }

//---------------FUNCTION TO UPDATE REDUX VALUES------------------------

// previously used to send updates to editWorkplace value but because
// of bug stated in tabs it is now turned off.

// // console.log('this is edit workspace in client side--->',editWorkspace);
//     const handleNameEdit = (event) => {
//         dispatch({
//             type:'MODIFY_NAME',
//             payload:event.target.value,
//         })
//     }
//     const handleImageEdit = (event) => {
//         dispatch({
//             type:'MODIFY_IMAGE',
//             payload:event.target.value,
//         })
//     }
//     const handleNotesEdit = (event) => {
//         dispatch({
//             type:'MODIFY_NOTES',
//             payload:event.target.value,
//         })
//     }
//     const handleCategoryEdit = (event) => {
//         dispatch({
//             type:'MODIFY_CATEGORY',
//             payload:event.target.value,
//         })
//     }

//---------------FUNCTION TO SEND USER TO Tabs PAGE------------------------

    const toWorkspace = () => {
        history.push(`/tabs/${workSpace.id}`)
    }
    const editWorkspace= useSelector(store => store.editWorkspace)

//---------------FUNCTION TO DELETE WORKSPACES------------------------

    const deleteWorkspace = () => {
        dispatch({
            type: 'DELETE_WORKSPACE',
            payload: {
                id: workSpace.id
            }
        })
    }

//---------------FUNCTION TO DISPATCH THE UPDATED EDIT WORKSPACE TO SAGE------------------------

    const sendUpdate = () => {
        if (editWorkspace.name != '' && editWorkspace.category != '' && editWorkspace.image_url != '') {
            console.log('these are all the values', workspaceName, selectedCategory, imageUrl, notes);
            dispatch({
                type: 'UPDATE_WORKPLACE',
                payload: editWorkspace
                
            })
            setIsTrue(false)
            updateWorkspace()
        }
    }

//---------------FUNCTION TO RENDER DOM BASED ON IF EDIT BUTTON WAS CLICKED------------------------

    // const updateWorkspace = () => {
    //     if (istrue == true) {
    //        console.log('this is editworkspace in the update workspace function',editWorkspace.name); 
    //         return (
    //             <div>
    //                 <div>
    //                     <input
    //                         type="text"
    //                         name="name"
                           
    //                         required
    //                         value={editWorkspace.name}
    //                         onChange={handleNameEdit} /> <br />
    //                     <input
    //                         type="text"
    //                         name="name"
                           
    //                         required
    //                         value={editWorkspace.image_url}
    //                         onChange={handleImageEdit} /> <br />
    //                     <textarea onChange={handleNotesEdit}  value={editWorkspace.notes} ></textarea>
    //                 </div>
    //                 <select onChange={handleCategoryEdit}  name="Category"  id="category" >
    //                     <option >{editWorkspace.category}</option>
    //                     <option value="Graphic Design">Graphic Design</option>
    //                     <option value="Coding">Coding</option>
    //                     <option value="Architecture">Architecture</option>
    //                     <option value="Animations">Animations</option>
    //                 </select>
    //                 <button onClick={sendUpdate}>Submit</button>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div className="workspaceContent">
    //                 <p>Name:{workSpace.name} Category:{workSpace.category}</p>
    //                 <img onClick={toWorkspace}  className="displayImage" src={workSpace.image_url} alt="" />
    //                 <p>{workSpace.notes}</p>
    //                 <span onClick={ifTrue} >🖊</span><span onClick={deleteWorkspace} className="text">🪣</span>
    //             </div>
    //         )
    //     }
    // }

//---------------RETURN THAT RETURNS THE ATTRIBUTES OF WORKSPACE IN HTML------------------------

    return (
        // updateWorkspace()
        <div >
        <div className="workSpaceContainer" >
            <div >
                <br />
            <Typography  color="primary" sx={{fontSize:15}} component='h3' > <p>{workSpace.name}</p> </Typography>
            <Typography color="primary" sx={{fontSize:15}}  > {workSpace.category}</Typography>
        <img className="displayWorkspace" onClick={toWorkspace} src={workSpace.image_url} alt="" />
        <Typography color="primary" sx={{height:50, mt:2, fontSize:15, width:200, ml:3}} component="h4" className='notes'>{workSpace.notes}</Typography>
        
            </div>
        
        <Button variant="outlined" sx={{mt:3}} onClick={ifTrue} >🖊</Button><Button variant="outlined" sx={{ml:10}}  onClick={deleteWorkspace} className="text">❌</Button>
    </div>
    <div>
        
    </div>
    </div>
    )
}