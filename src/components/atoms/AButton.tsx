import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../styles/colors';
import normalize from '../../helpes/normalizeDimentions';

interface Props {
  label: string;
  onPress?: () => void;
  style?: {};
  labelStyle?: {};
}

const AButton = ({label, onPress, style, labelStyle}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.6}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default AButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    borderWidth: 1,
    borderColor: colors.blue_light,
    borderRadius: normalize(25),
    paddingHorizontal: normalize(30),
    paddingVertical: normalize(20),
    flexDirection: 'row',
    flexGrow: 1,
    margin: normalize(5),
  },
  label: {
    color: colors.white,
    fontSize: normalize(16),
  },
});
