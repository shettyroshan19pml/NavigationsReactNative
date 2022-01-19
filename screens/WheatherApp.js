import React from 'react';
import {View, Text, Button} from 'react-native';
import 'react-native-gesture-handler';


function WheatherApp(props) {
    console.log("WheatherApp");

    return (
        <View>
        <Text>
        WheatherApp
        </Text>
        {/* <Button title="go to To Do app" onPress={()=> props.navigation.navigate('ToDoScreen')}/> */}
    </View>
    )
}

export default WheatherApp;
