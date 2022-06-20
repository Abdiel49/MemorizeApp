import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ChooseDifficulty from '../screens/ChooseDifficulty';

import {screenNames} from './screenName';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screenNames.chooseDifficulty}
          component={ChooseDifficulty}
          options={{
            title: 'Memory app',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
