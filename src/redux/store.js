import {createStore, applyMiddleware} from 'redux'
// import { adjust } from './reducers/count'
import thunk from 'redux-thunk'
import reducer from "./reducers";

console.log('reducer', reducer)
export default createStore(reducer, applyMiddleware(thunk))