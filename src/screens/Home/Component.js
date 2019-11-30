import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image:
            'https://doyanresep.com/wp-content/uploads/2016/06/resep-soto-lamongan-1.jpg',
          title: 'Soto',
          reviews: 0,
          star: 1
        },
        {
          image:
            'https://doyanresep.com/wp-content/uploads/2016/06/resep-soto-lamongan-1.jpg',
          title: 'Soto',
          reviews: 0,
          star: 1
        },
        {
          image:
            'https://doyanresep.com/wp-content/uploads/2016/06/resep-soto-lamongan-1.jpg',
          title: 'Soto',
          reviews: 0,
          star: 1
        },
        {
          image:
            'https://doyanresep.com/wp-content/uploads/2016/06/resep-soto-lamongan-1.jpg',
          title: 'Soto',
          reviews: 0,
          star: 1
        },
        {
          image:
            'https://doyanresep.com/wp-content/uploads/2016/06/resep-soto-lamongan-1.jpg',
          title: 'Soto',
          reviews: 0,
          star: 1
        }
      ]
    };
  }

  renderItem = ({ item }) => (
    <View style={styles.row}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => this.props.navigation.navigate('Detail')}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.desc}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.reviews} Reviews</Text>
          <Text>{item.star} Stars</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          numColumns={2}
          style={styles.flatList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Home;
