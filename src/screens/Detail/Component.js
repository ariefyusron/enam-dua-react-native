import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import styles from './styles';
import { getDetail } from '../../redux/actions';
import { widthPercent } from '../../utils';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageActive: 0
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { navigation } = this.props;
    this.props.getDetail(navigation.getParam('id'));
  }

  onSwipe(e) {
    this.setState({
      imageActive:
        e.nativeEvent.contentOffset.x === 0
          ? 0
          : Math.ceil(e.nativeEvent.contentOffset.x / widthPercent(100))
    });
  }

  renderItem = ({ item }) => (
    <View style={styles.wrapImage}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  render() {
    const { detail } = this.props;
    const { imageActive } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={detail.isLoading}
              onRefresh={() => this.getData()}
            />
          }>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            data={detail.data.photos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}
            onMomentumScrollEnd={e => this.onSwipe(e)}
          />
          <View style={styles.wrapIndicator}>
            {detail.data.photos.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  imageActive === index && styles.indicatorActive
                ]}
              />
            ))}
          </View>
          <View style={styles.wrapTable}>
            <View style={styles.table}>
              <View style={styles.rowTable1}>
                <Text>{detail.data.review_count}</Text>
                <Text style={styles.font12}>Reviews</Text>
              </View>
              <View style={styles.rowTable2}>
                <View style={[styles.col, styles.col2]}>
                  <Text>{detail.data.rating}</Text>
                  <Icon name="star-border" size={16} style={styles.iconStar} />
                </View>
                <View style={styles.col}>
                  <Text>$$$$</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
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
