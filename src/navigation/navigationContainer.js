import React from 'react';
import {NavigationContainer as AppNavigation} from '@react-navigation/native';
import {MainStack} from './navigationStacks';

export const NavigationContainer = () => {
  return (
    <AppNavigation>
      <MainStack />
    </AppNavigation>
  );
};
