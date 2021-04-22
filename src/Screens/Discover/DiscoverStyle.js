import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const DiscoverStyle = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: 'white'
	},
	dialogStyle: {
		alignItems: 'center',
		marginTop: -50
	},
	dialogImage: {
		height: 70,
		width: 70
	},
	dialogBottomStyle: {
		borderRadius: 10,
		alignItems: 'center',
		height: '30%'
	},
	dialogTextStyle: {
		fontSize: 20,
		color: '#cc0166',
		textAlign: 'center',
		letterSpacing: 2,
		marginBottom: 20
	},
	dialogOperationStyle: {
		flexDirection: 'row',
		alignContent: 'center',
		marginTop:30,
	},
	cancelStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	viewStyle: {
		flex: 1,
		backgroundColor: 'red',
		height: '100%'
	}
});

export default DiscoverStyle;
