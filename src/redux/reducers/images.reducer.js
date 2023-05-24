// images reducer that is set using the images saga set images put command
const images = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGES': return action.payload;
        default: return state;
    }
}

export default images;