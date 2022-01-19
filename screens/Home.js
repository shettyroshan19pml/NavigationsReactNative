import React from 'react';
import {View, Text, Button} from 'react-native';
import 'react-native-gesture-handler';


function Home(props) {
    console.log("Home");

    return (
        <View>
        <Text>
        Welcome Home
        </Text>
        <Button title="go to To Do app" onPress={()=> props.navigation.navigate('ToDoScreen')}/>
    </View>
    )
}

export default Home;
