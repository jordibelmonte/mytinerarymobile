import {View, Text, TextInput} from 'react-native'


const SignIn = () =>{
    return(
        <View>
            <Text>Sign In</Text>
            <TextInput placeholder="Enter your email" value={email} name={}/>
        </View>
    )
} 
export default SignIn