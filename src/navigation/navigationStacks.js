import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {screens} from './constants';

const Stack = createStackNavigator();

export const MainStack = () => {
  const {superheroesList, superheroDetails} = screens;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={superheroesList.title}
        component={superheroesList.component}
      />
      <Stack.Screen
        name={superheroDetails.title}
        component={superheroDetails.component}
      />
    </Stack.Navigator>
  );
};
