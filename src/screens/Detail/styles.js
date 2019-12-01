import { StyleSheet } from 'react-native';

import { widthPercent } from '../../utils';

const colorTable = '#efefef';
const lineTable = 2;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapImage: {
    padding: 15,
    width: widthPercent(100)
  },
  image: {
    width: '100%',
    height: widthPercent(60) - 30,
    borderRadius: 5,
    backgroundColor: '#d3d3d3'
  },
  wrapIndicator: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15
  },
  indicator: {
    width: '5%',
    height: 5,
    borderRadius: 5,
    backgroundColor: '#e2e2e2',
    marginHorizontal: '2%'
  },
  indicatorActive: {
    backgroundColor: '#585858'
  },
  wrapTable: {
    paddingHorizontal: 15
  },
  table: {
    borderWidth: lineTable,
    borderColor: colorTable,
    borderRadius: 5
  },
  rowTable1: {
    borderBottomWidth: lineTable,
    borderBottomColor: colorTable,
    paddingVertical: 10,
    alignItems: 'center'
  },
  rowTable2: {
    flexDirection: 'row'
  },
  col: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5
  },
  col2: {
    borderRightWidth: lineTable,
    borderRightColor: colorTable
  },
  font12: {
    fontSize: 12
  },
  iconStar: {
    marginLeft: 2
  }
});

export default styles;
