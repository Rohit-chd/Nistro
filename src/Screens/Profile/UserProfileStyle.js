import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const YourProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  body: {
    height: hp('12%'),
    backgroundColor: '#cc0166',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  logo: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  image: {
    width: 240,
    height: 290,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  imageOverLay: {
    width: 240,
    height: 290,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  userProfileView: {
    width: '100%',
    height: 290,
    //marginTop: hp('2%'),
    alignItems: 'center',
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
  backArrowTouch: {
    width: wp('6%'),
    height: hp('6%'),
    marginLeft: hp('2%'),
    alignSelf: 'flex-start',
  },

  userNameStyle: {
    fontWeight: 'normal',
    color: 'white',
    fontSize: 14,
    position: 'absolute', // child
    bottom: 40,
  },
  userAgeStyle: {
    fontWeight: 'normal',
    color: 'white',
    fontSize: 14,
    position: 'absolute', // child
    bottom: 20,
  },
  userDetailStyle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 100,
    right: 0,
  },
  aboutUserDetail: {
    fontWeight: 'normal',
    color: '#898a8f',
    fontSize: 14,
    top: 20,
  },
  detailContainerStyle: {
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginTop: hp('33%'),
  },
  userBioContainerStyle: {
    justifyContent: 'flex-start',
    marginTop: 15,
    //padding: 15,
  },
  musicListContainerStyle: {
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },
  userSongList: {
    flex: 1,
    backgroundColor: 'green',
    marginHorizontal: 20,
  },
  aboutUserStyle: {
    fontWeight: 'normal',
    color: '#cc0166',
    fontSize: 16,
    position: 'absolute',
    top: 0,
  },
  songTextStyle: {
    fontWeight: 'normal',
    color: '#cc0166',
    fontSize: 16,
    marginTop: 40,
    position: 'absolute',
    top: 0,
  },
  userPhotoViewStyle: {
    fontWeight: 'normal',
    color: '#cc0166',
    fontSize: 16,
    marginTop: 20,
    position: 'absolute',
    top: 0,
  },
  moreDetailTextStyle: {
    fontWeight: 'normal',
    color: '#cc0166',
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 10,
  },
  userBio: {
    flexDirection: 'column',
    marginVertical: 18,
    justifyContent: 'center',
  },
  userBioKey: {
    fontWeight: 'normal',
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 30,
    position: 'absolute',
  },
  userBioValue: {
    fontWeight: 'normal',
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 20,
    right: 0,
    marginRight: 20,
    position: 'absolute',
  },
  bioPointerStyle: {
    height: 7,
    width: 14,
  },
  addUserStyle: {
    height: hp('14%'),
    flexDirection: 'row',
  },
  passUser: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passImage: {
    flex: 1,
    height: 24,
    width: 21,
  },
  addImage: {
    flex: 1,
    height: 22,
    width: 26,
  },
  addUser: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editImageTouch: {
    height: 50,
    width: 50,
    left: 90,
    top: hp(-3),
  },
  editImageStyle: {
    height: 50,
    width: 50,
  },
  chatImageStyle: {
    height: 25,
    width: 23,
  },
  fixBackground: {
    backgroundColor: 'orange',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 100,
    zIndex: -1000,
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: '#660133',
  },
});

export default YourProfileStyle;
