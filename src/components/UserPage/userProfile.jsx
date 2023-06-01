import React from 'react';
import { useSelector } from 'react-redux';
import DisplaySpaces from './DisplayWorkspaces';
//importing necessary tools to utilize dispatch
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export default function UserProfile() {

    
    const dispatch = useDispatch();
    const workSpaces = useSelector((store) => store.workspaces)

    // values used to store the inputs of the user in the input html
    const [workspaceName, setWorkspaceName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')
    const [notes, setNotes] = useState('')
    const [istrue, setIsTrue] = useState(false)

// variable used to turn the value of setTrue to true in order to delegate renders
    const setTrue = () => {
        setIsTrue(true)
        
    }
        //function used to render either the plus button or 
    //the inputs depending on value of isTrue
    function showAddWorkspace() {
        if (istrue == true) {
            return (
                <div >
                    <div >
                        <input
                            type="text"
                            name="name"
                            placeholder='name'
                            required
                            
                            onChange={(event) => setWorkspaceName(event.target.value)} /> <br />
                        <input
                            type="text"
                            name="name"
                            placeholder='image_url'
                            required
                           
                            onChange={(event) => setImageUrl(event.target.value)} /> <br />
                        <textarea onChange={(event) => setNotes(event.target.value)}  ></textarea>
                    </div>
                    <select name="Category" id="category"  onChange={() => setSelectedCategory(event.target.value)}>
                        <option value="">Select an option</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Coding">Coding</option>
                        <option value="Architecture">Architecture</option>
                        <option value="Animations">Animations</option>
                    </select>
                    <button onClick={addWorkspace}>Submit</button>

                </div>
            );
        }
        else {
            return (
                <img className='plusButton' onClick={setTrue} src="https://i.ibb.co/42qBK9t/plus.png" alt="error" />
            );
        }
    }

// function that is connected to submit button in the return statement in displayworkspace
// its job is to send a dispatch to saga with a payload containing all of the input values
    const addWorkspace = () => {
        if (workspaceName != '' && imageUrl != '') {
            dispatch({
                type: 'ADD_WORKSPACES',
                payload: {
                    workspaceName: workspaceName,
                    imageUrl: imageUrl,
                    notes: notes,
                    category: selectedCategory
                }
            })
            setIsTrue(false)
            showAddWorkspace()
        }
    }

    return (
        <div className='workspaceDisplay'>


            {
                workSpaces.map((spaces) => {
                    return (
                        <div className='workspaceContainer' key={spaces.id}>
                            <DisplaySpaces
                                spaces={spaces}
                            />

                        </div>
                    )
                })
            }
            {showAddWorkspace()}
        </div>

    )
}