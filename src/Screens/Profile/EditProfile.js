import React, { useState } from 'react';
import {
	View,
	TextInput,
	Image,
	Text,
	TouchableOpacity,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	SafeAreaView,
	FlatList,
	Picker,
	StyleSheet
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import headerStyle from './ProfileHeaderStyle';
import profileStyle from './ProfileStyle';
import DatePicker from 'react-native-datepicker';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitButton } from '../Auth/Styles';
import RNFetchBlob from 'rn-fetch-blob';
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Loader from '../../Components/Loader';
const ProfileScreen = ({ navigation }) => {
	const Save = 'SAVE';
	const userData = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();
	const [ name, setName ] = useState(userData.userName);
	const nameInputRef = React.useRef(null);
	const dobInputRef = React.useRef(null);
	const [ bio, setBio ] = useState('');
	const bioInputRef = React.useRef(null);
	const [ ethnicity, setEthnicity ] = useState(null); //Indian
	const ethnicityInputRef = React.useRef(null);
	const [ height, setHeight ] = useState('');
	const heightInputRef = React.useRef(null);
	const [ bodyType, setBodyType ] = useState('');
	const bodyTypeInputRef = React.useRef(null);
	const [ hairColor, setHairColor ] = useState('');
	const hairColorInputRef = React.useRef(null);
	const [ eyeColor, setEyeColor ] = useState('');
	const eyeColorInputRef = React.useRef(null);
	const [ education, setEducation ] = useState('');
	const [language, setLanguage] = useState('');
    const [smoke, setSmoker] = useState('');
	const educationInputRef = React.useRef(null);
	const [ profileImage, setProfileImage ] = useState(require('../../../assets/images/ic_auth_header.png'));
	const [ sendImage, setSendImage ] = useState();
	const [ date, setDate ] = useState(userData.dateOfBirth);
	const [ userImageList, setUserImageList ] = useState([]);
	const [ userImageArray, setUserImageArray ] = useState([]);
	const [ isDateSelect, setIsDateSelect ] = useState(true);
	const [ isMenSelect, setIsMenSelect ] = useState('1');
	const [ status, setStatus ] = useState('');
	const statusInputRef = React.useRef(null);
	const [loading, isLoading] = useState(false);
	const token = useSelector((state) => state.auth.token);

	const renderUserImageItem = ({ item }) => <UserImageItem image={item.image} />;
	const UserImageItem = ({ image }) => (
		<View>
			<Image style={{ height: 90, width: 90, margin: 5, borderRadius: 10 }} source={image} />
		</View>
	);
	const handleClick = (type) => {
		request(
			Platform.select({
				android: PERMISSIONS.ANDROID.CAMERA,
				ios: PERMISSIONS.IOS.CAMERA
			})
		)
			.then((result) => {
				switch (result) {
					case RESULTS.UNAVAILABLE:
						console.log('This feature is not available (on this device / in this context)');
						break;
					case RESULTS.DENIED:
						requestCameraPermission(imageType);
						break;
					case RESULTS.GRANTED:
						if (userImageList.length <= 3) openCamera(type);
						else console.log('No more pics');
						break;
					case RESULTS.BLOCKED:
						console.log('The permission is denied and not requestable anymore');
						break;
				}
			})
			.catch((error) => {});
	};
	const openCamera = (type) => {
		const options = {
			title: 'Select Image',
			storageOptions: {
				skipBackup: true,
				path: 'images'
			}
		};
		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
			} else if (response.error) {
			} else if (response.customButton) {
			} else {
				if (type === 'profile') {
					const profilePic = { uri: 'data:image/jpeg;base64,' + response.data };
					const profilePicNwe = { uri: response.uri.replace('file://', '') };
					setProfileImage(profilePic);
					setSendImage(profilePicNwe);
				} else {
					const image = { image: { uri: 'data:image/jpeg;base64,' + response.data } };
					setUserImageList((userImageList) => [ ...userImageList, image ]);
					const profileImageArray = { uri: response.uri.replace('file://', '') };
					setUserImageArray((userImageArray) => [ ...userImageArray, profileImageArray ]);
				}
			}
		});
	};

	function handleSubmit() {
		isLoading(true)
		RNFetchBlob.fetch(
			'POST',
			'http://nistroapi.medrectech.info/api/UserProfile/SaveUserProfile',
			{
				Authorization: 'Bearer ' + token,
				'Content-Type': 'multipart/form-data'
			},
			[
				{
					name: 'UserImage',
					filename: 'profile.png',
					type: 'image/foo',
					data: RNFetchBlob.wrap(decodeURIComponent(sendImage.uri))
				},
				{
					name: 'UserPhotosList',
					filename: 'profile-array.png',
					type: 'image/foo',
					data: RNFetchBlob.wrap(decodeURIComponent(sendImage.uri))
				},
				{ name: 'UserId', data: userData.userId },
				{ name: 'LookingForId', data: isMenSelect },
				{ name: 'Bio', data: bio }
			]
		)
			.then((resp) => {
				console.log("response from server=="+resp);
				isLoading(false)
				navigation.navigate('generatedProfile')
			})
			.catch((err) => {
				console.log("error response from server=="+err);
				isLoading(false)
				
			});
	}
	const requestCameraPermission = () => {};
	return (
		<SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
		 <Loader
          loading={loading} />
			<View style={profileStyle.body}>
				<View style={headerStyle.container}>
					<View style={headerStyle.backArrowContainer}>
						<TouchableOpacity>
							<Image
								style={headerStyle.backArrow}
								resizeMode="contain"
								source={require('../../../assets/images/ic_arrow_back.png')}
							/>
						</TouchableOpacity>
					</View>
					<View style={headerStyle.body}>
						<TouchableOpacity onPress={() => handleClick('profile')}>
							<View style={profileStyle.profileImageStyle}>
								<Image style={headerStyle.image} resizeMode="cover" source={profileImage} />
								{!sendImage ? (
									<Image
										style={headerStyle.logo}
										resizeMode="stretch"
										source={require('../../../assets/images/ic_profile_bg.png')}
									/>
								) : null}
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<KeyboardAwareScrollView
					style={profileStyle.scrollViewKeyboard}
					scrollEnabled={true}
					keyboardShouldPersistTaps="handled"
					resetScrollToCoords={{ x: 0, y: 0 }}
				>
					<View style={profileStyle.scrollviewContainer}>
						{/* <View style={profileStyle.inputLayout}>
							<Text style={profileStyle.input}>{name}</Text>
						</View>

						<View style={profileStyle.inputLayout}>
							<Text style={profileStyle.inputDob}>{date}</Text>

							{
								<DatePicker
									style={profileStyle.pickerDob}
									date={''}
									mode="date"
									placeholder=" "
									format="YYYY-MM-DD"
									showIcon={true}
									hideText={false}
									//minDate="1920-01-01"
									maxDate={moment().subtract(18, 'years')}
									confirmBtnText="Confirm"
									cancelBtnText="Cancel"
									iconSource={require('../../../assets/images/ic_calendar.png')}
									customStyles={{
										dateIcon: {
											position: 'absolute',
											right: 0,
											top: 4,
											marginLeft: 0
										},
										dateInput: {
											//marginLeft: 36,
											borderColor: 'white',
											justifyContent: 'center',
											alignItems: 'flex-start'
										},
										datePicker: {
											alignItems: 'stretch'
										}
										// ... You can check the source to find the other keys.
									}}
									onDateChange={(date) => {
										setDate(date);
									}}
								/>
							}
						</View> */}
						<View style={profileStyle.forgotLayout}>
							<Text style={profileStyle.textForgot}>Photos</Text>
							<View style={profileStyle.userImageView}>
								<TouchableOpacity onPress={() => handleClick('imageArray')}>
									<View style={profileStyle.photoLayout}>
										<Image
											style={profileStyle.add}
											resizeMode="contain"
											source={require('../../../assets/images/ic_add.png')}
										/>
									</View>
								</TouchableOpacity>
								<FlatList
									showsHorizontalScrollIndicator={false}
									data={userImageList}
									extraData={userImageList}
									style={{ marginTop: 5 }}
									renderItem={renderUserImageItem}
									horizontal={true}
								/>
							</View>
							<Text style={profileStyle.textLookingfor}>Interested in</Text>
							<View style={profileStyle.genderLayout}>
								<TouchableOpacity
									onPress={() => setIsMenSelect('1')}
									style={[
										profileStyle.maleLayout,
										{
											backgroundColor: isMenSelect.toString().match('1') ? '#cc0166' : 'white'
										}
									]}
								>
									<Image
										resizeMode="contain"
										style={[
											profileStyle.genderIcon,
											{
												tintColor: isMenSelect.toString().match('1') ? 'white' : '#cc0166'
											}
										]}
										source={require('../../../assets/images/mars.png')}
									/>
									<Text
										style={[
											profileStyle.textMale,
											{
												color: isMenSelect.toString().match('1') ? 'white' : '#cc0166'
											}
										]}
									>
										Men
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => setIsMenSelect('2')}
									style={[
										profileStyle.femaleLayout,
										{
											backgroundColor: isMenSelect.toString().match('2') ? '#cc0166' : 'white'
										}
									]}
								>
									<Image
										resizeMode="contain"
										style={[
											profileStyle.genderIcon,
											{
												tintColor: isMenSelect.toString().match('2') ? 'white' : '#cc0166'
											}
										]}
										source={require('../../../assets/images/femenine.png')}
									/>
									<Text
										style={[
											profileStyle.textFemale,
											{
												color: isMenSelect.toString().match('2') ? 'white' : '#cc0166'
											}
										]}
									>
										Women
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => setIsMenSelect('3')}
									style={[
										profileStyle.bothLayout,
										{
											backgroundColor: isMenSelect.toString().match('3') ? '#cc0166' : 'white'
										}
									]}
								>
									<Image
										resizeMode="contain"
										style={[
											profileStyle.genderIcon,
											{
												tintColor: isMenSelect.toString().match('3') ? 'white' : '#cc0166'
											}
										]}
										source={require('../../../assets/images/ic_gender_both.png')}
									/>
									<Text
										style={[
											profileStyle.textFemale,
											{
												color: isMenSelect.toString().match('3') ? 'white' : '#cc0166'
											}
										]}
									>
										Both
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View style={profileStyle.bioMarginTop}>
							<Text style={profileStyle.textForgot}>Bio</Text>
							<View style={profileStyle.inputBioLayout}>
								<TextInput
									ref={bioInputRef}
									style={profileStyle.bioInput}
									onChangeText={setBio}
									multiline={true}
									numberOfLines={5}
									returnKeyType={'next'}
									keyboardType={'default'}
									onSubmitEditing={() => {
										ethnicityInputRef.current.focus();
									}}
									//blurOnSubmit={true}
								/>
							</View>
						</View>
						<View style={profileStyle.enthMarginTop}>
              <Text style={profileStyle.textLookingfor}>Ethnicity</Text>

              <RNPickerSelect
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => {
                  setEthnicity(value);
                }}
                value={ethnicity}
                items={[
                  {label: 'Indian', value: 'Indian'},
                  {label: 'African', value: 'African'},
                ]}
              />

              <Text style={profileStyle.textLookingfor}>
                Height (feet and inches)
              </Text>

              <RNPickerSelect
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => {
                  setHeight(value);
                }}
                value={height}
                items={[
                  {label: '5', value: '5'},
                  {label: '6', value: '6'},
                ]}
              />

              <Text style={profileStyle.textLookingfor}>Body Type</Text>

              <RNPickerSelect
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => {
                  setBodyType(value);
                }}
                value={bodyType}
                items={[
                  {label: 'Ectomorph', value: 'Ectomorph'},
                  {label: 'Endomorph', value: 'Endomorph'},
                  {label: 'Mesomorph', value: 'Mesomorph'},
                ]}
              />

              <Text style={profileStyle.textLookingfor}>Hair Color</Text>

              <RNPickerSelect
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => {
                  setHairColor(value);
                }}
                value={hairColor}
                items={[
                  {label: 'Black', value: 'Black'},
                  {label: 'Dark Brown', value: 'Dark Brown'},
                  {label: 'Brown', value: 'Brown'},
                ]}
              />

              <Text style={profileStyle.textLookingfor}>Eye Color</Text>

              <RNPickerSelect
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => {
                  setEyeColor(value);
                }}
                value={eyeColor}
                items={[
                  {label: 'Black', value: 'Black'},
                  {label: 'Dark Brown', value: 'Dark Brown'},
                  {label: 'Brown', value: 'Brown'},
                ]}
              />

              <Text style={profileStyle.textLookingfor}>University</Text>

              <RNPickerSelect
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => {
                  setEducation(value);
                }}
                value={education}
                items={[
                  {label: 'MCA', value: 'MCA'},
                  {label: 'MBA', value: 'MBA'},
                  {label: 'BCA', value: 'BCA'},
                  {label: 'B.TECH', value: 'B.TECH'},
                  {label: 'B.COM', value: 'B.COM'},
                ]}
              />

              <Text style={profileStyle.textLookingfor}>Status</Text>

              <RNPickerSelect
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => {
                  setStatus(value);
                }}
                value={status}
                items={[
                  {label: 'Single', value: 'single'},
                  {label: 'Marrried', value: 'Marrried'},
                ]}
              />

              <Text style={profileStyle.textLookingfor}>Languages</Text>

              <RNPickerSelect
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => {
                  setLanguage(value);
                }}
                value={language}
                items={[
                  {label: 'English', value: 'English'},
                  {label: 'Spanish', value: 'Spanish'},
                  {label: 'French', value: 'French'},
                  {label: 'Italian', value: 'Italian'},
                ]}
              />

              <Text style={profileStyle.textLookingfor}>Smoker Status</Text>

              <RNPickerSelect
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => {
                  setSmoker(value);
                }}
                value={smoke}
                items={[
                  {label: 'Yes', value: 'Yes'},
                  {label: 'No', value: 'No'},
                ]}
              />
              <View
                style={{
                  marginBottom: 20,
                  marginTop: 20,
                  marginLeft: -20,
                  marginRight: -20,
                }}>
                  
                <SubmitButton loading={false} onPress={handleSubmit}>
                 SAVE
                </SubmitButton>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    height: 45,
    width: widthPercentageToDP('89%'),
    marginTop: 10,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 10,
    color: '#898a8f',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    marginTop: 5,
    height: 45,
    paddingLeft: 20,
    width: widthPercentageToDP('89%'),
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 8,
    color: '#898a8f',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default ProfileScreen;
