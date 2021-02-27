const initialState = {
    loggedUser: null
}


/* el reducer recibe el state y las actions */
const authReducer = (state = initialState, action) => {
    
    /* según el caso va a caer en los distintos tipos de actions */
    switch (action.type){
        case 'NEW_USER':
            if(!action.payload.success){
                alert('error')
                return state
            }
           /*  localStorage.setItem('name', action.payload.response.name)
            localStorage.setItem('urlPic', action.payload.response.urlPic)
            localStorage.setItem('token', action.payload.response.token) */
            return {
                ...state,
                loggedUser: action.payload.response
            }
        case 'LOG_OUT':
            localStorage.clear()
            
            return{
                ...state,
                loggedUser: null
            }
        case 'LOG_IN':
            if(!action.payload.success){
                alert('error')
                return state
            }
/*             localStorage.setItem('name', action.payload.response.name)
            localStorage.setItem('urlPic', action.payload.response.urlPic)
            localStorage.setItem('token', action.payload.response.token) */
            return{
                ...state,
                loggedUser: action.payload.response
            }
        default:
            return state
    }
}
/* los reducers se expotan como modulos */
module.exports = authReducer