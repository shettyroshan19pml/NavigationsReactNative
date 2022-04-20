import React from 'react';
import {useTheme} from '';
import {
  View,
  Text,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import Flatbutton from '../shared/button';

export default function PhoneLogin(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/Brand.png')} />
        <Image source={require('../assets/LoginMan.png')} />
      </View>
      <View style={styles.footer}>
        <Text>This is loginPhone</Text>
      </View>
    </View>
  );
}

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F9ED3',
  },
  header: {
    backgroundColor: '#1F9ED3',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: 'white',
    // backgroundColor: 'red',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
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
    height: 48,
    width: 328,
    left: 0,
    top: 0,
    padding: (12, 12),
    backgroundColor: '#1F9ED3',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#1F9ED3',
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
  iconContainer: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
