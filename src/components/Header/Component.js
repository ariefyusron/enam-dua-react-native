import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import { color } from '../../configs';

const Component = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={color.main} barStyle="light-content" />
    <View style={styles.wrapHeader}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}>
        <Icon name="arrow-back" size={25} color="#FFF" />
      </TouchableOpacity>
      <Text style={styles.title}>{navigation.getParam('title')}</Text>
    </View>
  </SafeAreaView>
);

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Component;
