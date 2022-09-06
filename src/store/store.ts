/*
 * @Author: Tim Koepsel 
 * @Date: 2020-03-23 23:56:48 
 * @Last Modified by:   Tim Koepsel 
 * @Last Modified time: 2020-03-23 23:56:48 
 */
import { createStore } from 'redux';
import reducers from './reducers';

const Store = createStore(reducers);
export default Store;