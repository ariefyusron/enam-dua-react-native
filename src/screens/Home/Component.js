import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';
import { getData } from '../../redux/actions';
import { KeyboardAvoidingView } from '../../components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.props.getData();
  }

  renderItem = ({ item }) => (
    <View style={styles.row}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          this.props.navigation.navigate('Detail', {
            id: item.id,
            title: item.name
          })
        }>
        <Image source={{ uri: item.image_url }} style={styles.image} />
        <View style={styles.desc}>
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.review_count} Reviews</Text>
          <Text>{item.rating} Stars</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  render() {
    const { home } = this.props;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <FlatList
            keyboardShouldPersistTaps="handled"
            data={home.data}
            numColumns={2}
            style={styles.flatList}
            keyExtractor={(item, index) => index.toString()}
            refreshControl={
              <RefreshControl
                refreshing={home.isLoading}
                onRefresh={() => this.getData()}
              />
            }
            renderItem={this.renderItem}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
  home: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = {
  getData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
