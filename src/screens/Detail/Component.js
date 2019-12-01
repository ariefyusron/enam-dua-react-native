import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';
import { getDetail } from '../../redux/actions';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { navigation } = this.props;
    this.props.getDetail(navigation.getParam('id'));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
      </View>
    );
  }
}

Detail.propTypes = {
  navigation: PropTypes.object.isRequired,
  getDetail: PropTypes.func.isRequired,
  detail: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  detail: state.detail
});

const mapDispatchToProps = {
  getDetail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
