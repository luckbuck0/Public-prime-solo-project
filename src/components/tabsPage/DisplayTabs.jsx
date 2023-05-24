import { useState } from "react"
import { useDispatch } from "react-redux"

export default function DisplayTabs (props) {

    const [isTrue,setIsTrue]=useState(false)
    const [name,setName] = useState('');
    const [url,setUrl] = useState('');
    const [photo,setPhoto] = useState('');
    const [notes,setNotes] = useState('')

    const tabs =props.tabs
    const workSpaceId= props.workSpaceId

    console.log('this is workSpaceId-->',workSpaceId);
    
    const dispatch = useDispatch()

    const ifTrue = () => {
        setIsTrue(true)
        updateTabs()
    }

    const sendUpdate = () => {
        if (name != '' && photo != '' && url != '') {
            console.log('these are all the values', name, photo, url, notes);
            dispatch({
                type: 'UPDATE_TABS',
                payload: {
                    id: workSpaceId,
                    name: name,
                    url: url,
                    photo: photo,
                    notes: notes
                }

            })
            setIsTrue(false)
            updateTabs()
        }



    }


    const updateTabs = () => {
        if (isTrue == true) {
            return (
                <div >
                <div >
                <input
        type="text"
        name="name"
        placeholder={tabs.name}
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
         <input
        type="text"
        name="name"
        placeholder={tabs.url}
        required
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
         <input
        type="text"
        name="name"
        placeholder={tabs.photo}
        required
        value={photo}
        onChange={(event) => setPhoto(event.target.value)}
      />
      
      
                    <textarea placeholder={tabs.notes} onChange={(event) => setNotes(event.target.value)} value={notes} ></textarea>
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
                <span onClick={ifTrue} >🖊</span><span  className="text">🪣</span>
            </div>
            )
        }
    }

    
    return (
        updateTabs()
    )
}