
const workspaces = (state = [], action) => {
    switch (action.type){
        case 'SET_WORKSPACES': return action.payload;
        default: return state;
    }
}

export default workspaces;