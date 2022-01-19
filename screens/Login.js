import React from 'react';
import {View, Text,Button} from 'react-native';
import 'react-native-gesture-handler';


function Login(props){
    console.log("Login");
    return (
        <View>
        <Text>
        Login
        </Text>
        <Button title="go to home screen" onPress={()=> props.navigation.navigate('Home')}/>
    </View>
    )
}

export default Login
