import {useSelector} from 'react-redux';

//importing necessary tools to utilize dispatch
import { useDispatch} from 'react-redux';
import { useEffect,useState } from 'react';



export default function TabsPage() {

    const tabs = useSelector((store) => store.tabs)

    
    const [name,setName] = useState('');
    const [url,setUrl] = useState('');
    const [photo,setPhoto] = useState('');

    const dispatch= useDispatch();

    const postTabs = () => {
        if (name !='' && name!='' && url!='' && photo!=''){
            dispatch({
                type: 'POST_TABS',
                payload: {
                    name:name,
                    url: url,
                    photo:photo
                }
            })
        }
    }

    useEffect(() =>{
        dispatch({
          type: 'FETCH_TABS'
        })
      }, []);

    return (
        <div>
            this is the tabs page
            <input
            type="text"
            name="name"
            placeholder='name'
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
             <input
            type="text"
            name="name"
            placeholder='url'
            required
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
             <input
            type="text"
            name="name"
            placeholder='photo_url'
            required
            value={photo}
            onChange={(event) => setPhoto(event.target.value)}
          />
          <button onClick={postTabs}>Submit</button>
          
        </div>
    )
}