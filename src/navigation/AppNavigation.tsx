import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ChooseDifficulty from '../screens/ChooseDifficulty';

import AppProvider from '../context/AppProvider';
import BoardGame from '../screens/BoardGame';
import {RootStackParams} from './RootStackParams';

const Stack = createStackNavigator<RootStackParams>();

const AppNavigation = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'ChosseDifficulty'}
            component={ChooseDifficulty}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'BoardGame'}
            component={BoardGame}
            options={{
              title: '',
              headerShown: false,
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default AppNavigation;
