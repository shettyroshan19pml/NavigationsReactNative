import React from 'react';
import {Button, Text, View} from 'react-native';

function Signup(props) {
  console.log('Signup');
  return (
    <View>
      <Text>Signup</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate('HomeDrawer')}></Button>
    </View>
  );
}

// Signup.propTypes = {};

export default Signup;
