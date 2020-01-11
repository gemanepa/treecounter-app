import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 50
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  widgetContainer: {
    alignItems: 'center',
    marginVertical: 20,
    flex: 1,
    borderWidth: 1,
    borderColor: 'red'
  },
  image: {
    // width: 100,
    // height: 100
  },
  widgetTitleContainer: {
    backgroundColor: 'white',
    borderColor: '#4d5153',
    borderWidth: 1,
    // paddingHorizontal: 20,
    // paddingVertical: 5,
    borderRadius: 20,
    marginTop: -13,
    width: 111,
    height: 32,
    zIndex: 1,
    justifyContent: 'center'
    // flex: 1,
  },
  widgetTitle: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: '#4d5153',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center'
  }
});
