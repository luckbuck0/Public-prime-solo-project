import {useSelector} from 'react-redux';

//importing necessary tools to utilize dispatch
import { useDispatch} from 'react-redux';
import { useEffect,useState } from 'react';

import DisplayTabs from './DisplayTabs';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function TabsPage() {

    const tabs = useSelector((store) => store.tabs)

    const [isTrue,setIsTrue]=useState(false)
    const [name,setName] = useState('');
    const [url,setUrl] = useState('');
    const [photo,setPhoto] = useState('');
    const [notes,setNotes] = useState('')

    const params = useParams()
    const workSpaceId= params.id
    console.log('this is work space id --->',workSpaceId);
    const dispatch= useDispatch();

    const setTrue = () => {
      setIsTrue(true)
    }

    const postTabs = () => {
        if (name !='' && name!='' && url!='' && photo!=''){
            dispatch({
                type: 'POST_TABS',
                payload: {
                    name:name,
                    url: url,
                    photo:photo,
                    notes:notes,
                    id:workSpaceId
                }
            })
        }
        setIsTrue(false)
        showTabs()
    }

    useEffect(() =>{
        dispatch({
          type: 'FETCH_TABS',
          payload: {
            id:workSpaceId
          }
        })
      }, []);

      function showTabs() {
        if (isTrue == true) {
            return (
                <div >
                    <div >
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
          
          
                        <textarea onChange={(event) => setNotes(event.target.value)} value={notes} ></textarea>
                        <button onClick={postTabs}>Submit</button> <br />
                    </div>
                    
                    

                </div>
            );
        }
        else {
            return (
                <img className='plusButton' onClick={setTrue} src="https://i.ibb.co/42qBK9t/plus.png" alt="error" />
            );
        }
    }

    return (
        <div>
            
            {
                tabs.map((tab) => {
                    return (
                        <div className='workspaceContainer' key={tab.id}>
                            <DisplayTabs
                                tabs={tab}
                                workSpaceId={workSpaceId}
                            />

                        </div>
                    )
                })
            }
           {showTabs()}
          
        </div>
    )
}