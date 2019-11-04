import EStyleSheet from 'react-native-extended-stylesheet';

import { Dimensions } from 'react-native';

const Layout = {
  window: {
    height: Dimensions.get('window').height - (56 + 70 + 20),
    width: Dimensions.get('window').width
  }
};

export default EStyleSheet.create({
  primaryButton: {
    height: 50,
    backgroundColor: '#89b53a',
    borderColor: '#89b53a',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  primaryButtonText: {
    fontSize: 25,
    color: 'white'
  },
  secondaryButton: {
    backgroundColor: '$colorPrimaryAccent',
    borderColor: '$colorPrimaryAccent'
  },
  followingButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$colorPrimaryAccent',
    height: 30,
    width: 100,
    marginRight: 10,
    padding: 5
  },
  followButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$primary',
    height: 30,
    width: 80,
    marginRight: 10,
    padding: 5
  },
  followButtonText: {
    color: '#ffffff',
    fontSize: 15
  },
  textContainer: {
    // width: '100%',
    flexDirection: 'row'
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  image: {
    height: 30,
    width: 30
  },
  actionButtonTouchable: {
    width: '88%',
    marginLeft: '6%',
    position: 'absolute',
    top: '86%'
  },
  actionButtonView: {
    borderRadius: 100,
    backgroundColor: '#89b53a',
    height: 52,
    justifyContent: 'center'
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0.21,
    textAlign: 'center',
    color: '#ffffff'
  },
  actionButtonSmallTouchable: {
    backgroundColor: '#89b53a',
    height: 54,
    width: 54,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '82%',
    left: '82%'
  },
  actionButtonSmallImage: { height: 32, width: 32 },
  plusButton: {
    backgroundColor: '#89b53a',
    height: 54,
    width: 54,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '13%',
    left: '80%'
  },
  plusButtonIcon: { fontSize: 30, color: '#fff' },
  dualActionButtonTouchable1: {
    width: Layout.window.width * 0.4,
    position: 'absolute',
    top: '86%',
    left: '6%'
  },
  dualActionButtonTouchable2: {
    width: Layout.window.width * 0.4,
    right: '6%',
    position: 'absolute',
    top: '86%'
  },
  dualActionButtonView1: {
    borderRadius: 6,
    backgroundColor: '#3498db',
    height: 52,
    justifyContent: 'center'
  },
  dualActionButtonText1: {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0.21,
    textAlign: 'center',
    color: '#ffffff'
  },
  dualActionButtonView2: {
    borderRadius: 6,
    backgroundColor: '#ecf0f1',
    height: 52,
    justifyContent: 'center'
  },
  dualActionButtonText2: {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0.21,
    textAlign: 'center',
    color: '#e74c3c'
  }
});
