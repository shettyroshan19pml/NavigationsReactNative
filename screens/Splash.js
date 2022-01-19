import React from 'react';
import { View,Text,Button } from 'react-native';
import 'react-native-gesture-handler';

function Splash(props){
    console.log("splash");
    console.log(props);
    return (
        <View>
            <Text>
                Splash
            </Text>
            <Button title="go to login" onPress={()=> props.navigation.replace('Login')}/>
        </View>
    )
}

export default Splash