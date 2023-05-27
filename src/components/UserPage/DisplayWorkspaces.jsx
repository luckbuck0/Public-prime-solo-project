import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function DisplaySpaces(props) {
    let workSpace = props.spaces
    const dispatch = useDispatch()
    const history = useHistory()
console.log('this is workspace id in the display spaces-->',workSpace.id);
    const [istrue, setIsTrue] = useState(false)
    
    const [workspaceName, setWorkspaceName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')
    const [notes, setNotes] = useState('')

    useEffect(() => {
        const idToEdit = workSpace.id;
    
        dispatch({
          type: 'FETCH_WORKSPACE_TO_EDIT',
          payload: {
            id:idToEdit
        }
        })
    
      }, [])

    const ifTrue = () => {
        setIsTrue(true)
        updateWorkspace()
    }

    const editWorkspace= useSelector(store => store.editWorkspace)
console.log('this is edit workspace in client side--->',editWorkspace);
    const handleNameEdit = (event) => {
        dispatch({
            type:'MODIFY_NAME',
            payload:event.target.value,
        })
    }
    const handleImageEdit = (event) => {
        dispatch({
            type:'MODIFY_IMAGE',
            payload:event.target.value,
        })
    }
    const handleNotesEdit = (event) => {
        dispatch({
            type:'MODIFY_NOTES',
            payload:event.target.value,
        })
    }
    const handleCategoryEdit = (event) => {
        dispatch({
            type:'MODIFY_CATEGORY',
            payload:event.target.value,
        })
    }

    const toWorkspace = () => {
        history.push(`/tabs/${workSpace.id}`)
    }

    const deleteWorkspace = () => {
        dispatch({
            type: 'DELETE_WORKSPACE',
            payload: {
                id: workSpace.id
            }
        })
    }

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

    const updateWorkspace = () => {
        if (istrue == true) {
            return (
                <div>
                    <div>
                        <input
                            type="text"
                            name="name"
                           
                            required
                            value={editWorkspace.name}
                            onChange={handleNameEdit} /> <br />
                        <input
                            type="text"
                            name="name"
                           
                            required
                            value={editWorkspace.image_url}
                            onChange={handleImageEdit} /> <br />
                        <textarea onChange={handleNotesEdit}  value={editWorkspace.notes} ></textarea>
                    </div>
                    <select onChange={handleCategoryEdit}  name="Category"  id="category" >
                        <option >{editWorkspace.category}</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Coding">Coding</option>
                        <option value="Architecture">Architecture</option>
                        <option value="Animations">Animations</option>
                    </select>
                    <button onClick={sendUpdate}>Submit</button>
                </div>
            )
        } else {
            return (
                <div className="workspaceContent">
                    <p>Name:{workSpace.name} Category:{workSpace.category}</p>
                    <img onClick={toWorkspace}  className="displayImage" src={workSpace.image_url} alt="" />
                    <p>{workSpace.notes}</p>
                    <span onClick={ifTrue} >🖊</span><span onClick={deleteWorkspace} className="text">🪣</span>
                </div>
            )
        }
    }

    return (
        updateWorkspace()
    )
}