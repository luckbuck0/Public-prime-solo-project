import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function DisplayTabs (props) {

    const [isTrue,setIsTrue]=useState(false)
    const [name,setName] = useState('');
    const [url,setUrl] = useState('');
    const [photo,setPhoto] = useState('');
    const [notes,setNotes] = useState('')
const editTab = useSelector(store => store.editTab)
    const tabs =props.tabs
    const workSpaceId= props.workSpaceId
    console.log('this is tabs.id--->',tabs.id);
    console.log('this is workSpaceId-->',workSpaceId);
    
    const dispatch = useDispatch()
   

      function tabToEdit (tabId) {
        useEffect(() => {
            const idToEdit = tabs.id;
        
            dispatch({
              type: 'FETCH_TAB_TO_EDIT',
              payload: workSpaceId
            })
        
          }, [])
      }

      console.log('this is edittab in client side',editTab);
    const handleNameEdit = (event) => {
        dispatch({
            type:'MODIFY_NAME',
            payload:event.target.value,
        })
    }

    const handleUrlEdit = (event) => {
        dispatch({
            type:'MODIFY_URL',
            payload:event.target.value,
        })
    }

    const handlePhotoEdit = (event) => {
        dispatch({
            type:'MODIFY_PHOTO',
            payload:event.target.value,
        })
    }


    const handleNotesEdit = (event) => {
        dispatch({
            type:'MODIFY_NOTES',
            payload:event.target.value,
        })
    }
    
    const ifTrue = () => {
        setIsTrue(true)
        updateTabs()
    }

    const sendUpdate = () => {
        if (editTab.name != '' && editTab.photo != '' && editTab.url != '') {
            console.log('these are all the values', name, photo, url, notes);
            dispatch({
                type: 'UPDATE_TABS',
                payload: editTab
            })
            setIsTrue(false)
            updateTabs()
        }

    }

    const deleteTabs = () => {
        dispatch({
            type: 'DELETE_TABS',
            payload: {
                id:tabs.id,
                workSpaceId:workSpaceId
            }
        })
    }


    const updateTabs = () => {
        if (isTrue == true) {
            return (
                <div >
                <div >
                <input
        type="text"
        name="name"
        
        required
        value={editTab.name}
        onChange={handleNameEdit}
      />
         <input
        type="text"
        name="name"
       
        required
        value={editTab.url}
        onChange={handleUrlEdit}
      />
         <input
        type="text"
        name="name"
        
        required
        value={editTab.photo}
        onChange={handlePhotoEdit}
      />
      
      
                    <textarea onChange={handleNotesEdit} value={editTab.notes} ></textarea>
                    <button onClick={sendUpdate}>Submit</button> <br />
                </div>
                
                

            </div>
            )
        } else {
            return (
                <div className="workspaceContent">
                <p>Name:{tabs.name} </p>
                <p>Url: <br />{tabs.url}</p>
                <img className="displayImage" src={tabs.photo} alt="" />
                <p>Notes <br />{tabs.notes}</p>
                <span onClick={ifTrue} >🖊</span><span onClick={deleteTabs}  className="text">🪣</span>
            </div>
            )
        }
    }

    
    return (
        updateTabs()
    )
}