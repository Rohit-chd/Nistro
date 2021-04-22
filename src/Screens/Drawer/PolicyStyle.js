import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const headerStyle = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('12%'),
    backgroundColor: 'white',
  },
  body: {
    height: hp('5%'),
    backgroundColor: '#cc0166',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: 'center',
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
    height: hp('6%'),
    paddingTop: 10,
    backgroundColor: '#cc0166',
    flexDirection: 'row',
  },
  backArrow: {
    width: wp('4%'),
    height: hp('4%'),
    marginLeft: hp('2%'),
    //sbackgroundColor: '#cc0166',
    alignSelf: 'flex-start',
  },
  backArrowTouch: {
    width: wp('8%'),
    height: hp('4%'),
    //marginLeft: hp('2%'),
    alignSelf: 'flex-start',
    //backgroundColor: 'black',
  },
});

export default headerStyle;
