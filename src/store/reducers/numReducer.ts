
const numReducer = (state = 0, action:any) => {
    switch (action.type) {
        case 'ADDNUMBER':
            return state += action.payload;
        default:
            return state;
    }
}

export default numReducer;