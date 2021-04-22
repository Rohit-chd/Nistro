import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const headerStyle = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('8%'),
    backgroundColor: 'white',
  },
  globalFlex: {
    flex: 1,
  },

  body: {
    height: hp('3%'),
    backgroundColor: '#cc0166',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 131,
    height: 131,
    alignSelf: 'center',
  },
  image: {
    //width: wp('35%'),
    //height: hp('20%'),
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
    height: 40,
    backgroundColor: '#cc0166',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatbackArrowContainer: {
    width: wp('100%'),
    height: 40,
    backgroundColor: '#cc0166',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backArrow: {
    width: wp('4%'),
    height: hp('4%'),
    marginLeft: hp('2%'),
    backgroundColor: '#cc0166',
    alignSelf: 'flex-start',
  },
  close: {
    width: 14,
    height: 14,
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
