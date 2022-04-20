import React from 'react';
import {View, Text, Button, Dimensions, Image, StyleSheet} from 'react-native';
// import {ToggleButton} from 'react-native-paper';

function Transactions() {
  const [value, setValue] = React.useState('left');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <ToggleButton.Group
          onValueChange={value => setValue(value)}
          value={value}>
          <ToggleButton icon="format-align-left" value="left" />
          <ToggleButton icon="format-align-right" value="right" />
        </ToggleButton.Group> */}
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}

export default Transactions;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F9ED3',
  },
  header: {
    backgroundColor: '#1F9ED3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: 'white',
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
    borderRadius: 50,
    padding: (12, 12),
    backgroundColor: '#1F9ED3',
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
