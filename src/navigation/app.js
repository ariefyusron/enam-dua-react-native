import React from 'react';
import {
  createStackNavigator,
  StackViewTransitionConfigs
} from 'react-navigation-stack';

import Home from '../screens/Home';
import Setting from '../screens/Setting';

import { HeaderSearch } from '../components';

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => <HeaderSearch />
      }
    },
    Setting
  },
  {
    transitionConfig: () => ({
      transitionSpec: 200,
      screenInterpolator:
        StackViewTransitionConfigs.SlideFromRightIOS.screenInterpolator
    })
  }
);
