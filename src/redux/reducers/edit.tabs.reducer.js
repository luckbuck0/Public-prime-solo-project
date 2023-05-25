
const editTab = (state={},action) => {
    if (action.type === 'SET_EDITED_TABS') {
        return action.payload[0]
    } else if (action.type ==='MODIFY_NAME') {
        return {...state,name:action.payload}
    }
    else if (action.type ==='MODIFY_URL') {
        return {...state,url:action.payload}
    }
    else if (action.type ==='MODIFY_PHOTO') {
        return {...state,photo:action.payload}
    }
    else if (action.type ==='MODIFY_NOTES') {
        return {...state,notes:action.payload}
    }
    return state;
}

export default editTab