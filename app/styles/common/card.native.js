import EStyleSheet from 'react-native-extended-stylesheet';

export default (buttonStyles = EStyleSheet.create({
  cardContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowRadius: 12,
    margin: 10,
    padding: 5
  }
}));
