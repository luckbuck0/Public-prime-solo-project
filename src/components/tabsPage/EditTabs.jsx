import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function EditTabs() {
    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const editTab = useSelector(store => store.editTab)
    useEffect(() => {
        const idToEdit = params.id;

        dispatch({
            type: 'FETCH_TAB_TO_EDIT',
            payload: idToEdit
        })

    }, [])

    const handleNameEdit = (event) => {
        dispatch({
            type: 'MODIFY_NAME',
            payload: event.target.value,
        })
    }

    const handleUrlEdit = (event) => {
        dispatch({
            type: 'MODIFY_URL',
            payload: event.target.value,
        })
    }

    const handlePhotoEdit = (event) => {
        dispatch({
            type: 'MODIFY_PHOTO',
            payload: event.target.value,
        })
    }

console.log('this is workspace id in the tabs edit-->',editTab.workspace_id);
    const handleNotesEdit = (event) => {
        dispatch({
            type: 'MODIFY_NOTES',
            payload: event.target.value,
        })
    }
    const sendUpdate = () => {
        if (editTab.name != '' && editTab.photo != '' && editTab.url != '') {
           
            dispatch({
                type: 'UPDATE_TABS',
                payload: editTab
            })

        }
        history.push(`/tabs/${editTab.workspace_id}`)
    }

    return (
        <div >
            <div >
                <input
                    type="text"
                    name="name"


                    value={editTab.name}
                    onChange={handleNameEdit}
                />
                <input
                    type="text"
                    name="name"


                    value={editTab.url}
                    onChange={handleUrlEdit}
                />
                <input
                    type="text"
                    name="name"


                    value={editTab.photo}
                    onChange={handlePhotoEdit}
                />


                <textarea onChange={handleNotesEdit} value={editTab.notes} ></textarea>
                <button onClick={sendUpdate}>Submit</button> <br />
            </div>



        </div>
    )
}