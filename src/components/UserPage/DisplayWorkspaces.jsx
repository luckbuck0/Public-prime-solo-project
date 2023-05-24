import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function DisplaySpaces(props) {
    let workSpace = props.spaces
    const dispatch = useDispatch()
    const history = useHistory()

    const [istrue, setIsTrue] = useState(false)
    
    const [workspaceName, setWorkspaceName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')
    const [notes, setNotes] = useState('')

    const ifTrue = () => {
        setIsTrue(true)
        updateWorkspace()
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
        if (workspaceName != '' && selectedCategory != '' && imageUrl != '') {
            console.log('these are all the values', workspaceName, selectedCategory, imageUrl, notes);
            dispatch({
                type: 'UPDATE_WORKPLACE',
                payload: {
                    id: workSpace.id,
                    name: workspaceName,
                    category: selectedCategory,
                    image_url: imageUrl,
                    notes: notes
                }

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
                            placeholder={workSpace.name}
                            required
                            value={workspaceName}
                            onChange={(event) => setWorkspaceName(event.target.value)} /> <br />
                        <input
                            type="text"
                            name="name"
                            placeholder={workSpace.image_url}
                            required
                            value={imageUrl}
                            onChange={(event) => setImageUrl(event.target.value)} /> <br />
                        <textarea onChange={(event) => setNotes(event.target.value)} placeholder={workSpace.notes} value={notes} ></textarea>
                    </div>
                    <select name="Category" placeholder={workSpace.category} id="category" value={selectedCategory} onChange={() => setSelectedCategory(event.target.value)}>
                        <option value="">Select an option</option>
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
                <div onClick={toWorkspace} className="workspaceContent">
                    <p>Name:{workSpace.name} Category:{workSpace.category}</p>
                    <img className="displayImage" src={workSpace.image_url} alt="" />
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