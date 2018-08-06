import EStyleSheet from 'react-native-extended-stylesheet';

export default (tabbarStyles = EStyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1
  },
  tabItemActive: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ec6453',
    borderBottomWidth: 2
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 2
  },
  textActive: {
    color: '#ec6453',
    fontSize: 13
  },
  text: {
    color: '#aba2a2',
    fontSize: 13
  }
}));