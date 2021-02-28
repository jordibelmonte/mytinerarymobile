import 'react-native-gesture-handler'
import React from 'react'
import Navigator from './Navigator'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import authReducer from './redux/reducers/authReducer'

const store = createStore(authReducer, applyMiddleware(thunk))

const  App = () => {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  )
}
export default App

