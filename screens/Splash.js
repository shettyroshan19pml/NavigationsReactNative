import React from 'react';
import {View, Text, Button, Dimensions, Image, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

function Splash(props) {
  console.log('splash');
  console.log(props);
  setTimeout(() => {
    props.navigation.navigate('Login');
  }, 3000);
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
      <View style={styles.header}>
        <Image
          style={{height: 200, width: 200}}
          source={require('../assets/briixlogoGIF.gif')}
        />
      </View>

      {/* <View style={styles.footer}>
        <Button
          title="go to login"
          onPress={() => props.navigation.replace('Login')}
        />
        <Button
          title="go to Signup"
          onPress={() => props.navigation.replace('Signup')}
        />
      </View> */}
    </View>
  );
}

export default Splash;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});