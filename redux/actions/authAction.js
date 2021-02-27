import axios from 'axios'


const authActions = {
    newUser: (newUser) => {
        return async (dispatch, getState) =>{
           try{
               const response = await axios.post("http://localhost:4000/api/user/signup", newUser)
           if (!response.data.success){
               return response.data
           }
           dispatch({type: 'NEW_USER', payload: response.data})
       }catch(err){
        alert(err)
       }
    } 
    }, 
    logOut: () => {
        
        return (dispatch, getState) => {
            dispatch({type: 'LOG_OUT'})
        }           
    
        
    },
    logInFromLS: (token) => {
        return async (dispatch, getState) => {
          try{
            const response = await axios.post('http://localhost:4000/api/login/ls', {token}, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            dispatch({type: 'LOG_IN', payload: {response: {...response.data.response}}})
            console.log(response)
          }catch(err){
            if(err.response.status === 401) {
              return true
            }
          }
        }
      },
    logIn : (logUser) => {
        return async(dispatch, getState) => {
            const response = await axios.post("http://localhost:4000/api/user/signin", logUser)
            if (!response.data.success){
                return response.data
            }
            dispatch({type: 'LOG_IN', payload: response.data})
        }

    }
}

export default authActions