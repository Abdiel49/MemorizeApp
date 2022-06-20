import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import AppContext from '../context/AppContext';
import AButton from '../components/atoms/AButton';
import AText from '../components/atoms/AText';

import {ReducerTypes} from '../reducer/reducerTypes';
import {RootStackParams} from '../navigation/RootStackParams';
import normalize from '../helpes/normalizeDimentions';
import {colors} from '../styles/colors';

type NavigationProp = StackNavigationProp<RootStackParams, 'BoardGame'>;

const ChooseDifficulty = () => {
  const {dispatch} = React.useContext(AppContext);
  const navigation = useNavigation<NavigationProp>();

  const handleChangeDifficulty = (difficulty: string) => {
    dispatch({type: ReducerTypes.CHOSSEDIFFICULTY, payload: difficulty});
    navigation.navigate('BoardGame');
  };

  return (
    <View style={styles.main}>
      <AText label="Choose a difficulty" style={styles.difficultySelected} />
      <View style={styles.container}>
        <AButton
          label="Easy - (4x4)"
          style={styles.difficultyItem}
          onPress={() => handleChangeDifficulty('Easy')}
        />
        <AButton
          label="Medium - (4x6)"
          style={styles.difficultyItem}
          onPress={() => handleChangeDifficulty('Medium')}
        />
        <AButton
          label="Hard - (5x6)"
          style={styles.difficultyItem}
          onPress={() => handleChangeDifficulty('Hard')}
        />
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
