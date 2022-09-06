import { combineReducers } from 'redux';
import numReducer from './numReducer';
import textReducer from './textReducer';

const reducers = combineReducers({
    number: numReducer,
    text: textReducer
});

export default reducers;
