import {StyleSheet, View} from 'react-native';
import React from 'react';

import AButton from '../components/atoms/AButton';
import AText from '../components/atoms/AText';

import normalize from '../helpes/normalizeDimentions';
import {colors} from '../styles/colors';

const ChooseDifficulty = () => {
  return (
    <View style={styles.main}>
      <AText label="Choose a difficulty" style={styles.difficultySelected} />
      <View style={styles.container}>
        <AButton label="Easy - (4x4)" style={styles.difficultyItem} />
        <AButton label="Medium - (4x6)" style={styles.difficultyItem} />
        <AButton label="Hard - (5x6)" style={styles.difficultyItem} />
      </View>
    </View>
  );
};

export default ChooseDifficulty;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.purple,
    justifyContent: 'center',
  },
  container: {
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(20),
  },
  difficultySelected: {
    position: 'absolute',
    textAlign: 'center',
    top: normalize(30),
    left: 0,
    right: 0,
    fontSize: normalize(28),
    textTransform: 'capitalize',
  },
  difficultyItem: {
    marginVertical: normalize(10),
  },
});
