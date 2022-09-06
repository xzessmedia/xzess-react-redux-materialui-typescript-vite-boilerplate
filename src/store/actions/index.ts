/** Dispatches */
export const changeText = (text: string) => {
    return {
        type: 'CHANGETEXT',
        payload: text
    };
};

export const addNumber = (num: number) => {
    return {
        type: 'ADDNUMBER',
        payload: num
    };
};