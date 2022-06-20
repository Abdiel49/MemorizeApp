import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../styles/colors';

const ChooseDifficulty = () => {
  return (
    <View style={styles.container}>
      <Text>ChooseDifficulty</Text>
    </View>
  );
};

export default ChooseDifficulty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
});
