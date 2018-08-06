import EStyleSheet from 'react-native-extended-stylesheet';

const skyBlue = '#F5FCFF';

export default (treecounterStyles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: skyBlue
  },
  svgStyle: {
    width: 400,
    height: 400
  },
  cloudStyle: {
    flex: 1,
    width: 420,
    height: 420,
    elevation: 2,
    position: 'absolute',
    top: -12,
    left: -10
  },
  potStyle: {
    flex: 1,
    width: 420,
    height: 420,
    elevation: 4,
    position: 'absolute',
    top: -12,
    left: -10
  },
  circleStyle: {
    flex: 1,
    width: 400,
    height: 400,
    elevation: 5,
    position: 'absolute',
    top: 0
  },
  imageStyle: {
    overflow: 'visible',
    width: 400,
    height: 400,
    flex: 1,
    top: 190,
    left: 0
  },
  svgTextContainer: {
    elevation: 6,
    top: -280,
    left: 0,
    width: 190,
    flexDirection: 'column'
  },
  svgTextRow: {
    flexDirection: 'row'
  },
  svgColumn1: {
    width: 30,
    height: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  svgColumn2: {
    flex: 2
  },
  divider: {
    height: 3,
    width: 70,
    backgroundColor: '$primary',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center'
  },
  svgTitleText: {
    fontSize: 10,
    color: '#686060'
  },
  svgTextValue: {
    fontSize: 16,
    color: '#686060',
    fontWeight: '600'
  }
}));