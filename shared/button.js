import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {IconX, ICON_TYPE} from '../src/store/icons/IconX';
import {SvgXml} from 'react-native-svg';
import {icons} from '../assets/icons';

function Flatbutton({
  text,
  onPress,
  styleButton,
  styleIcon,
  StyleText,
  disabled,
  iconOrigin,
  iconName,
  iconColor,
  iconsize,
  ...others
}) {
  // const iconInfo =;

  // const dynamicIcon =
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{...styles.button, ...styleButton}}
      {...others}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        {iconName ? (
          <SvgXml
            // color="white"
            stroke={iconColor}
            xml={icons[iconName]}
            style={{marginRight: 5}}
          />
        ) : null}

        <Text style={StyleText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Flatbutton;

const styles = StyleSheet.create({
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
  // create default styling for Icon and Text, give fonts
  text: {
    color: 'white',
    fontSize: 16,
    alignItems: 'center',
    height: 24,
  },
  icon: {
    marginRight: 10,
  },
});
