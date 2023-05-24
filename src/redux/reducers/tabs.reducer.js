// a reducer for the tabs that is set by the saga tabs file in set tabs
const tabs = (state = [], action) => {
    switch (action.type) {
        case 'SET_TABS': return action.payload;
        default: return state;
    }
}

export default tabs