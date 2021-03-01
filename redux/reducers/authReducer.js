import {Alert} from 'react-native'
const initialState = {
    loggedUser: null
}


/* el reducer recibe el state y las actions */
const authReducer = (state = initialState, action) => {
    
    /* según el caso va a caer en los distintos tipos de actions */
    switch (action.type){
        case 'NEW_USER':
            if(!action.payload.success){
                Alert.alert('error')
                return state
            }
            return {
                ...state,
                loggedUser: action.payload.response
            }
        case 'LOG_OUT':
            
            return{
                ...state,
                loggedUser: null
            }
        case 'LOG_IN':
            if(!action.payload.success){
                Alert.alert('error')
                return state
            }

            return{
                ...state,
                loggedUser: action.payload.response
            }
        default:
            return state
    }
}

module.exports = authReducer