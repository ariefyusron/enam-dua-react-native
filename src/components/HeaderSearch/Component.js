import React from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';
import { color } from '../../configs';
import { handleSearch } from '../../redux/actions';

const Component = ({ home, ...props }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={color.main} barStyle="light-content" />
    <View style={styles.wrapSearch}>
      <View style={styles.wrapTextInput}>
        <TextInput
          placeholder="Search"
          style={styles.textInput}
          placeholderTextColor="rgba(255,255,255,0.7)"
          value={home.search}
          onChangeText={text => props.handleSearch(text)}
        />
        {home.search !== '' && (
          <TouchableOpacity
            style={styles.buttonClear}
            activeOpacity={0.5}
            onPress={() => props.handleSearch('')}>
            <Icon name="close" color="#FFF" size={25} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  </SafeAreaView>
);

Component.propTypes = {
  home: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = {
  handleSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
