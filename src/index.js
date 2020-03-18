import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from "redux"
import {Provider} from "react-redux"
import UserReducer from "./Reducer/UserReducer.js"
//import ProductReducer from "./Reducer/ProductReducer.js"
//const mainReducer = combineReducers({User: UserReducer, Product: ProductReducer});
const store = createStore(UserReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
