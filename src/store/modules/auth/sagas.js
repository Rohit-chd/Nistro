import { takeLatest, call, put, all } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';
import api from '../../../Services';
var FormData = require('form-data');
import { signInSuccess, signFailure, signUpSuccess, completeProfileFailure, completeProfileSuccess } from './actions';
import axios from 'axios';
import { Platform } from 'react-native';

export function* signIn({ payload }) {
	try {
		const { email, password } = payload;
		const response = yield call(api.post, 'login', {
			EmailId: email,
			password: password
		});
		if(response.data.status){
			const { token } = response.data.tokendata;
			const { data } = response.data;
			yield put(signInSuccess(token, data));
		}
		else {
			showMessage({
				message: 'Login',
				description: response.data.message,
				type: 'danger',
				backgroundColor: "red"
			});
			yield put(signFailure());
		}
		
	} catch (err) {
		showMessage({
			message: 'Login',
			description: 'Authentication failed, check your email / password',
			type: 'danger',
			backgroundColor: "red"
		});

		yield put(signFailure());
	}
}

export function* signUp({ payload }) {
	try {
		const { name, email, gender, referralCode, password, date } = payload;

		var response = yield call(api.post, 'users/SignUp', {
			UserName: name,
			EmailId: email,
			GenderId: 1,
			password,
			password,
			UserTypeId: 2,
			DateOfBirth: date,
			DeviceToken: 'weff'
		});
	
		if(response.data.status){
			const { token } = response.data.tokendata;
			const { data } = response.data;
			yield put(signUpSuccess(token, data));
			showMessage({
				message: 'User registration',
				description: 'User successfully registered',
				type: 'success'
			});
		}else{
			showMessage({
				message: 'User registration',
				description: response.data.message,
				type: "red"
			});
			yield put(signFailure());
		}
		
	} catch (err) {
		console.log("khbk "+err)
		showMessage({
			message: 'User registration',
			description: 'Registration failed, check your data',
			type: "red"
		});
		yield put(signFailure());
	}
}

export function* fbLogin({ payload }) {
	console.log(payload.fbResult);
	try {
		const response = yield call(api.post, 'users/SignUpLogInWithFaceBook', {
			UserName: payload.fbResult.name,
			EmailId: payload.fbResult.email,
			DateOfBirth: payload.fbResult.birthday,
			FaceBookId: payload.fbResult.id,
			UserTypeId: 2,
			FaceBookAccessToken: payload.fbToken
		});
		const { token } = response.data.tokendata;
		const { data } = response.data;
		yield put(signInSuccess(token, data));
	} catch (err) {
		console.log(err);
		showMessage({
			message: 'Login',
			description: 'Authentication failed, check your email / password',
			type: "red"
		});

		yield put(signFailure());
	}
}

export function* userCompleteProfileRequest({ payload }) {
	const formData = new FormData();
	formData.append('UserId', '3DDB8F57-2EDF-417E-90D4-27FF2353FBF0');
	formData.append('LookingForId', '1');
	formData.append('Bio', 'Lorem ipsumdolor sit amet');
	formData.append('UserImage', payload.sendImage);
	try {
		axios({
			method: 'POST',
			url: 'http://nistroapi.medrectech.info/api/UserProfile/SaveUserProfile',
			data: formData,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data',
				Authorization: 'Bearer ' + payload.token
			}
		});
	} catch (err) {
		console.log('djfkdjwfdfdskjfdko');
		showMessage({
			message: 'User registration',
			description: 'Registration failed, check your data',
			type: "red"
		});
		yield put(signFailure());
	}
}

export function* generateUserProfileRequest({ payload }) {
	try {
		const response = yield call(api.post, 'MostListenedSong/PlayList', {
			UserId: payload.userData.userId,
			userSong: payload.userPlaylist
		});
		const { data } = response.data;
		const { token } = response.data.tokendata;
		yield put(signInSuccess(token, data));
	} catch (err) {
		showMessage({
			message: 'Profile',
			description: 'Spotify authentication failed',
			type: "red"
		});

		yield put(signFailure());
	}
}

export function setToken({ payload }) {
	if (!payload) {
		return;
	}
	const { token } = payload.auth;
	if (token) {
		api.defaults.headers.Authorization = `Bearer ${token}`;
	}
}

export function signOut() {
	showMessage({
		type: 'MeetApp',
		message: 'User Signed Out'
	});
}

export default all([
	takeLatest('persist/REHYDRATE', setToken),
	takeLatest('@auth/SIGN_IN_REQUEST', signIn),
	takeLatest('@auth/SIGN_UP_REQUEST', signUp),
	takeLatest('@auth/SIGN_OUT', signOut),
	takeLatest('@auth/COMPLETE_PROFILE_REQUEST', userCompleteProfileRequest),
	takeLatest('@auth/FACEBOOK_AUTH', fbLogin),
	takeLatest('@auth/GENERATE_PROFILE_REQUEST', generateUserProfileRequest)
]);
