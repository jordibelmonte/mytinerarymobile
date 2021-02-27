import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import authReducer from './redux/reducers/authReducer';
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from "redux"


/* aplico el middleware thunk para que mi store soporte funciones y pedidos asíncronos del dispatch */
const myStore = createStore(authReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,

);
