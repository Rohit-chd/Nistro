import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const headerStyle = StyleSheet.create({
	container: {
		width: wp('100%'),
		height: hp('12%'),
		backgroundColor: 'white'
	},
	body: {
		backgroundColor: '#cc0166',
		borderBottomEndRadius: 20,
		height: '100%',
		borderBottomStartRadius: 20,
		alignItems: 'center',
		justifyContent: 'center'
		
	},

	logo: {
		//width: wp('35%'),
		//height: hp('20%'),
		width: 121,
		height: 121,
		alignSelf: 'center',
	},
	image: {
		//width: wp('35%'),
		//height: hp('20%'),
		width: 121,
		height: 121,
		alignSelf: 'center',
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		borderRadius:121/2
	},
	bottomBG: {
		width: wp('35%'),
		height: hp('2%'),
		alignSelf: 'center'
	},
	backArrowContainer: {
		width: wp('100%'),
		height: hp('5%'),
		backgroundColor: '#cc0166',
		flexDirection: 'row'
	},
	backArrow: {
		width: wp('4%'),
		height: hp('4%'),
		marginLeft: hp('2%'),
		backgroundColor: '#cc0166',
		alignSelf: 'flex-start'
	},
	done: {
		width: wp('5%'),
		height: hp('5%'),
		marginRight: hp('2%'),
		backgroundColor: '#cc0166',
		alignSelf: 'flex-end'
	},
	skip: {
		width: wp('15%'),
		height: hp('3%'),
		//marginRight: hp('2%'),
		//marginTop: 5,
		backgroundColor: '#cc0166',
		// backgroundColor: 'yellow',
		alignSelf: 'flex-end',
		color: 'white'
	},

	backArrowTouch: {
		width: wp('6%'),
		height: hp('6%'),
		marginLeft: hp('2%'),
		alignSelf: 'flex-start'
	}
});

export default headerStyle;
