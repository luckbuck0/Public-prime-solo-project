import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams,useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { Typography } from '@mui/joy';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Textarea from '@mui/joy/Textarea';



export default function EditPage () {
    const params =useParams()
    const dispatch = useDispatch()
    const history =useHistory()

    const sendUpdate = () => {
        if (editWorkspace.name != '' && editWorkspace.category != '' && editWorkspace.image_url != '') {

            dispatch({
                type: 'UPDATE_WORKPLACE',
                payload: editWorkspace
                
            })
            history.push(`/user/`)
        }
    }

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
console.log('this is the params id',params.id);
const editWorkspace= useSelector(store => store.editWorkspace)

    useEffect(() => {
        const idToEdit = params.id;
        dispatch({
          type: 'FETCH_WORKSPACE_TO_EDIT',
          payload: params.id
        
        })
    
      }, [])

    return (
    //     <div>
    //     <div>
    //         <input
    //             type="text"
    //             name="name"
               
    //             required
    //             value={editWorkspace.name}
    //             onChange={handleNameEdit} /> <br />
    //         <input
    //             type="text"
    //             name="name"
               
    //             required
    //             value={editWorkspace.image_url}
    //             onChange={handleImageEdit} /> <br />
    //         <textarea onChange={handleNotesEdit}  value={editWorkspace.notes} ></textarea>
    //     </div>
    //     <select onChange={handleCategoryEdit}  name="Category"  id="category" >
    //         <option >{editWorkspace.category}</option>
    //         <option value="Graphic Design">Graphic Design</option>
    //         <option value="Coding">Coding</option>
    //         <option value="Architecture">Architecture</option>
    //         <option value="Animations">Animations</option>
    //     </select>
    //     <button onClick={sendUpdate}>Submit</button>
    // </div> 
    <div>
          <img className='logoEditPage' src="https://i.ibb.co/NnmwkJ5/zentab-Logo1.png" alt="" srcset="" />
    <div className="editPageContainer">
       
    
    <div className='editPage'>
    <div  className='editWorkspace'  >
      <Input
        type="text"
        name="name"
        placeholder='Name'
        required
        value={editWorkspace.name}
         onChange={handleNameEdit} /> <br />
      <Input
        type="text"
        name="name"
        placeholder='image_url'
        required
        value={editWorkspace.image_url}
        onChange={handleImageEdit} /> <br />
      <Textarea  minRows={3} onChange={handleNotesEdit} value={editWorkspace.notes}   >{editWorkspace.notes}</Textarea>
      <Select sx={{height:30, mr:3}}  onChange={handleCategoryEdit}   id="category"  >
    <MenuItem value={editWorkspace.category}>{editWorkspace.category}</MenuItem> 
   <MenuItem value="Architecturw">Architecture</MenuItem>
    <MenuItem value="Design">Design</MenuItem>
    <MenuItem value="Coding">Coding</MenuItem>
    <MenuItem value="Animation">Animation</MenuItem>
    <MenuItem value="Fashion">Fashion</MenuItem>
  </Select>
          <Button size='sm' sx={{mt:2}} onClick={sendUpdate}>Submit</Button>
       
    </div>
    </div>
    </div>
    </div>
    )
}