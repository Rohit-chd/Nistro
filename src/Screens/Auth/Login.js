import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, Keyboard, SafeAreaView, Alert } from 'react-native';
import loginStyle from './LoginStyle';
import Header from '../../Components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest, facebookLogin } from '../../store/modules/auth/actions';
import { Container, SubmitButton,FacebookLogin } from './Styles';
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk';

const LoginScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const emailInputRef = React.useRef(null);
	const passwordInputRef = React.useRef(null);
	const loading = useSelector((state) => state.auth.loading);
	const signed = useSelector((state) => state.auth.signed);
	const userData = useSelector((state) => state.auth.user);
	const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  
	function handleSubmit() {
		if (isEmailValid()){ 
			if(mediumRegex.test(password)){
				dispatch(signInRequest(email, password));
			}else{
				showAlert("Password must have at least two uppercase ('A'-'Z'),one lowercase ('a'-'z'),one special character (@,!,#, etc), minimum 6 digits.).")
			}
		}
		else {showAlert('Please enter valid e-mail id');}
	}
	console.log("signed "+signed);
	if(signed){
	const screen =	userData.isProfileEdited
				? userData.isProfileGenerated ? 'discoverRoute' : 'generatedProfile'
				: 'editProfile'
				navigation.navigate(screen);
	}

	
	const isEmailValid = () => {
		let emailCheck = email;
		let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return pattern.test(String(emailCheck).toLowerCase());
	};

	showAlert = (message) => {
		Alert.alert('', message, [ { text: 'OK', onPress: () => console.log('OK Pressed') } ]);
	};
	return (
		<SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
			<View style={loginStyle.body}>
				<Header isShow={false} />
				<Container>
					<View style={loginStyle.inputLayout}>
						<TextInput
							ref={emailInputRef}
							style={loginStyle.input}
							onChangeText={setEmail}
							placeholder={'E-mail'}
							returnKeyType={'next'}
							keyboardType={'email-address'}
							onSubmitEditing={() => {
								passwordInputRef.current.focus();
							}}
							blurOnSubmit={true}
						/>
						<TouchableOpacity
							onPress={() => {
								emailInputRef.current.clear();
								setEmail('');
							}}
						>
							<Image
								resizeMode="contain"
								style={[ loginStyle.closeIdle, { opacity: email.length > 0 ? 1 : 0.5 } ]}
								source={require('../../../assets/images/ic_input_close.png')}
							/>
						</TouchableOpacity>
					</View>
					<View style={loginStyle.inputLayout}>
						<TextInput
							ref={passwordInputRef}
							style={loginStyle.input}
							onChangeText={setPassword}
							secureTextEntry={true}
							placeholder={'Password'}
							returnKeyType={'done'}
							keyboardType={'default'}
							onSubmitEditing={() => {
								Keyboard.dismiss();
							}}
							//blurOnSubmit={true}
						/>
						<TouchableOpacity
							onPress={() => {
								passwordInputRef.current.clear();
								setPassword('');
							}}
						>
							<Image
								resizeMode="contain"
								style={[ loginStyle.closeIdle, { opacity: password.length > 0 ? 1 : 0.5 } ]}
								source={require('../../../assets/images/ic_input_close.png')}
							/>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={loginStyle.forgotLayout}
						onPress={() => {
							navigation.navigate('forgotPassword');
							setPassword('');
						}}
					>
						<Text style={loginStyle.textForgot}>Forgot Password ?</Text>
					</TouchableOpacity>
				</Container>
				<SubmitButton loading={loading} onPress={handleSubmit}>
					LOGIN
				</SubmitButton>
				<FacebookLogin onPress={loginWithFacebook}>LOGIN WITH FACEBOOK</FacebookLogin>

				<TouchableOpacity style={loginStyle.registerLayout} onPress={() => navigation.navigate('signUp')}>
					<Text style={loginStyle.textHaveAccount}>Don't have an account ?</Text>
					<Text style={loginStyle.textregister}>Register here</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);

	function loginWithFacebook() {
		LoginManager.logInWithPermissions([ 'email' ]).then(
			function(result) {
				if (result.isCancelled) {
					console.log('Login cancelled');
				} else {
					console.log('Login success with permissions: ' + result.grantedPermissions.toString());
					AccessToken.getCurrentAccessToken().then((data) => {
						let accessToken = data.accessToken;
						const responseInfoCallback = (error, result) => {
							if (error) {
								alert('Error fetching data:');
							}
							dispatch(facebookLogin(accessToken, result));
						};

						const infoRequest = new GraphRequest(
							'/me',
							{
								accessToken: accessToken,
								parameters: {
									fields: {
										string: 'email,name,birthday,gender'
									}
								}
							},
							responseInfoCallback
						);
						new GraphRequestManager().addRequest(infoRequest).start();
					});
				}
			},
			function(error) {
				console.log('Login fail with error: ' + error);
			}
		);
	}
};

export default LoginScreen;
