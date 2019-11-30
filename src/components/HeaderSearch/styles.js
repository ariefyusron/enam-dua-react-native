import { StyleSheet } from 'react-native';

import { color } from '../../configs';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.main
  },
  wrapSearch: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  wrapTextInput: {
    backgroundColor: '#416499',
    borderRadius: 5,
    flexDirection: 'row'
  },
  textInput: {
    paddingLeft: 10,
    paddingVertical: 8,
    color: '#FFF',
    flex: 1
  },
  buttonClear: {
    paddingHorizontal: 10,
    justifyContent: 'center'
  }
});

export default styles;
