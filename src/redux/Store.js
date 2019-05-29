import {createStore} from 'redux';
import Reducer from './Reducer';

const Store= createStore(Reducer);
const state=Store.getState();

export default Store;