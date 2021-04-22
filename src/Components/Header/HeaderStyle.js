import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const headerStyle = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('30%'),
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
    width: wp('42%'),
    height: hp('20%'),
    marginTop: hp('15%'),
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
  backArrowTouch: {
    width: wp('6%'),
    height: hp('6%'),
    marginLeft: hp('2%'),
    alignSelf: 'flex-start',
  },
});

export default headerStyle;
