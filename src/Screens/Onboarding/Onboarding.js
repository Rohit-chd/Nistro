import React, { useEffect } from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import boardingStyle from './OnboardingStyle';
import { StackActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const OnboardingScreen = ({ navigation }) => {
	const signed = useSelector((state) => state.auth.signed);
	const userData = useSelector((state) => state.auth.user);
	const screen =  signed ? userData.isProfileEdited
		? userData.isProfileGenerated ? 'generatedProfile' : 'discoverRoute'
		: 'generatedProfile': 'login';
	useEffect(() => {
		setTimeout(() => {
			navigation.dispatch(StackActions.replace(screen));
		}, 2500);
	});
	return (
		<SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
			<View style={boardingStyle.body}>
				<Image style={boardingStyle.logo} source={require('../../../assets/images/n_logo.png')} />
			</View>
		</SafeAreaView>
	);
};
export default OnboardingScreen;
