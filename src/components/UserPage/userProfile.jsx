import React from 'react';
import {useSelector} from 'react-redux';
import DisplaySpaces from './DisplayWorkspaces';
//importing necessary tools to utilize dispatch
import { useDispatch} from 'react-redux';
import { useEffect,useState } from 'react';

export default function UserProfile () {
    
    const dispatch= useDispatch();
    const workSpaces = useSelector((store) => store.workspaces)
    
    const [workspaceName, setWorkspaceName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [selectedCategory,setSelectedCategory] = useState('')
    const [istrue,setIsTrue]= useState(false)

    const setTrue = () => {
        setIsTrue(true)

    }

    function showAddWorkspace() {
        if (istrue == true) {
            return (
                <div>

                    <input
                        type="text"
                        name="name"
                        placeholder='name'
                        required
                        value={workspaceName}
                        onChange={(event) => setWorkspaceName(event.target.value)} />
                    <input
                        type="text"
                        name="name"
                        placeholder='image_url'
                        required
                        value={imageUrl}
                        onChange={(event) => setImageUrl(event.target.value)} />
                    <select name="Category" id="category" value={selectedCategory} onChange={() => setSelectedCategory(event.target.value)}>
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

  const addWorkspace = () =>{
    if (workspaceName!='' && imageUrl!=''){
      dispatch({
        type:'ADD_WORKSPACES',
        payload:{
          workspaceName:workspaceName,
          imageUrl:imageUrl,
          selectedCategory:selectedCategory
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