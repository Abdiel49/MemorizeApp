import {StyleSheet, Text} from 'react-native';
import React from 'react';
import normalize from '../../helpes/normalizeDimentions';

interface Props {
  label: string;
  style?: {};
}

const AText = ({label, style}: Props) => {
  return <Text style={[styles.label, style]}>{label}</Text>;
};

export default AText;

const styles = StyleSheet.create({
  label: {
    color: '#fff',
    fontSize: normalize(16),
  },
});
