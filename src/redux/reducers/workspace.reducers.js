// workspace reducer that is set by the workspaces saga set workspaces command
const workspaces = (state = [], action) => {
    switch (action.type) {
        case 'SET_WORKSPACES': return action.payload;
        default: return state;
    }
}

export default workspaces;