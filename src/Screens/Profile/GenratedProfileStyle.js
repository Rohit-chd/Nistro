import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const headerStyle = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('26%'),
    backgroundColor: 'white',
  },
  body: {
    height: hp('15%'),
    backgroundColor: '#cc0166',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  image: {
    width: 131,
    height: 131,
    alignSelf: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  bottomBG: {
    width: wp('35%'),
    height: hp('2%'),
    alignSelf: 'center',
  },
  backArrowContainer: {
    width: wp('100%'),
    height: hp('5%'),
    backgroundColor: '#cc0166',
    flexDirection: 'row',
  },
  backArrow: {
    width: wp('4%'),
    height: hp('4%'),
    marginLeft: hp('2%'),
    backgroundColor: '#cc0166',
    alignSelf: 'flex-start',
  },
  done: {
    width: wp('5%'),
    height: hp('5%'),
    marginRight: hp('2%'),
    backgroundColor: '#cc0166',
    alignSelf: 'flex-end',
  },

  backArrowTouch: {
    width: wp('6%'),
    height: hp('6%'),
    marginLeft: hp('2%'),
    alignSelf: 'flex-start',
  },
});

export default headerStyle;
