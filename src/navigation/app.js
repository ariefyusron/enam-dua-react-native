import React from 'react';
import {
  createStackNavigator,
  StackViewTransitionConfigs
} from 'react-navigation-stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';

import { HeaderSearch, Header } from '../components';

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: <HeaderSearch />
      }
    },
    Detail: {
      screen: Detail,
      navigationOptions: props => ({
        header: <Header {...props} />
      })
    }
  },
  {
    headerMode: 'screen',
    transitionConfig: () => ({
      transitionSpec: 200,
      screenInterpolator:
        StackViewTransitionConfigs.SlideFromRightIOS.screenInterpolator
    })
  }
);
