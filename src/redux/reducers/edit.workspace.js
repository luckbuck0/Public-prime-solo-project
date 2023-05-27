
const editWorkspace = (state={},action) => {
    if (action.type === 'SET_EDITED_WORKSPACES') {
        return action.payload[0]
    } else if (action.type ==='MODIFY_NAME') {
        return {...state,name:action.payload}
    }
    else if (action.type ==='MODIFY_IMAGE') {
        return {...state,image_url:action.payload}
    }
    else if (action.type ==='MODIFY_NOTES') {
        return {...state,notes:action.payload}
    }
    else if (action.type ==='MODIFY_CATEGORY') {
        return {...state,category:action.payload}
    }
    return state;
}

export default editWorkspace