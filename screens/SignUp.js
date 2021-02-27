import { TextInput } from "react-native-gesture-handler"
import {useState, useEffect} from 'react'
const SignUp = () =>{
    const [country, setCountry] = useState([])
     const [errors, setErrors] = useState([])
     const fetchearCountries = async () => {
         const APIcall = await fetch('https://restcountries.eu/rest/v2/all');
         const responseCountries = await APIcall.json();
         setCountry(responseCountries)
     }
     // Configure the useEffect
     useEffect(() => {
         fetchearCountries();
     }, [])
     const [newUser, setNewUser] = useState({})
     const readInput = e => {
         /* capturo valor del input */
         const value = e.target.value
         /* capturo nombre del campo del que recibo el valor del input */
         const name = e.target.name
         /* seteo el nuevo usuario */
         setNewUser({
             /* uso el spread operator para no sobre escribir el state */
             ...newUser,
             /* creo un objeto que va a tener el nombre y el valor */
             [name]: value
         })
     }
     console.log(errors)
     const validate = async e =>{
         e.preventDefault()
         if (newUser.userName === '' || newUser.email === '' || newUser.password === '' || newUser.repeatPassword === '' || newUser.name === '' || newUser.lastName === '' || newUser.urlPic === '' || newUser.country === ''){
             alert('Must complete every field')
             return false
         }
         if(newUser.password !== newUser.repeatPassword){
             alert('passwords don`t match')
             return false
         }
         const response = await props.newUser(newUser)
         if (response && !response.success){
             setErrors(response.errors)
         } else {
            swal({title:"Success",text:"New User Created", icon:"success",button:"Ok" })
         }

     }
     const responseGoogle = async (response) => {
        console.log(response)
        if (response.error) {
            swal({title:"Oops!",text:"Something went wrong", icon:"error",button:"Ok" })
        } else {
            const respuesta = await props.newUser({
                userName: response.profileObj.email,
                email: response.profileObj.email,
                password: response.profileObj.googleId,
                repeatPassword: response.profileObj.googleId,
                name: response.profileObj.givenName,
                lastName: response.profileObj.familyName,
                urlPic: response.profileObj.imageUrl,
                country: "Undefined"
            })
            if (respuesta && !respuesta.success) {
                setErrors(respuesta)
            } else {
                alert("New User Saved")
            }
        }
      }
    
    return(
        <Viev>
            <TextInput/>

        </Viev>
    
    
        )
} 
export default SignUp