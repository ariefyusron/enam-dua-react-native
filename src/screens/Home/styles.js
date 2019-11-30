import { StyleSheet } from 'react-native';

import { widthPercent } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 0.5,
    paddingHorizontal: 15,
    marginVertical: 10
  },
  image: {
    width: '100%',
    height: widthPercent(40) - 30,
    backgroundColor: '#d3d3d3',
    borderRadius: 5
  },
  flatList: {
    paddingVertical: 10
  },
  desc: {
    paddingVertical: 5
  },
  title: {
    fontWeight: 'bold'
  }
});

export default styles;
