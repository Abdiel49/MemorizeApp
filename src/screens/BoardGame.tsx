import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContext from '../context/AppContext';

const BoardGame = () => {
  const {state} = React.useContext(AppContext);

  React.useEffect(() => {
    console.log('BoardGame state: ', state);
  }, [state]);

  return (
    <View style={styles.container}>
      <Text>BoardGame</Text>
    </View>
  );
};

export default BoardGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
