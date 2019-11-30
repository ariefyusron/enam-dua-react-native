import { StyleSheet } from 'react-native';

import { color } from '../../configs';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.main
  },
  button: {
    padding: 15
  },
  wrapHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: '#FFF',
    flex: 1
  }
});

export default styles;
