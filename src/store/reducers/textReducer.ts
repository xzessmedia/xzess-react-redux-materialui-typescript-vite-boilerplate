
const textReducer = (state = 0, action: any) => {
    switch (action.type) {
        case 'CHANGETEXT':
            return state = action.payload;
        default:
            return state;
    }
}

export default textReducer;