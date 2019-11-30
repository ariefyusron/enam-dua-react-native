import React from 'react';
import {
  createStackNavigator,
  StackViewTransitionConfigs
} from 'react-navigation-stack';

import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Detail from '../screens/Detail';

import { HeaderSearch } from '../components';

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => <HeaderSearch />
      }
    },
    Setting,
    Detail: {
      screen: Detail,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    transitionConfig: () => ({
      transitionSpec: 200,
      screenInterpolator:
        StackViewTransitionConfigs.SlideFromRightIOS.screenInterpolator
    })
  }
);
