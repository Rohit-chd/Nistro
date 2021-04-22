import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  Keyboard,
  Alert,
  SafeAreaView,
} from 'react-native';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import loginStyle from '../Auth/LoginStyle';
import Header from '../../Components/Header/Header';
import DatePicker from 'react-native-datepicker';
import {SubmitButton} from './Styles';
import {signUpRequest} from '../../store/modules/auth/actions';

const SignUpScreen = ({navigation}) => {
  var moment = require('moment');
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [gender, setGender] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const nameInputRef = React.useRef(null);
  const emailInputRef = React.useRef(null);
  const confirmEmailInputRef = React.useRef(null);
  const dobInputRef = React.useRef(null);
  const referralCodeInputRef = React.useRef(null);
  const passwordInputRef = React.useRef(null);
  const confirmPasswordInputRef = React.useRef(null);
  const [date, setDate] = useState('Date of Birth');
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isMaleSelect, setIsMaleSelect] = useState(true);
  const loading = useSelector((state) => state.auth.loading);
  const signed = useSelector((state) => state.auth.signed);
  const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  function handleSubmit() {
   if(name.length>1 && email.length>1 && password.length>1 && !date.match("Date of Birth")){
     if(isEmailValid(email)){
      if(password.match(confirmPassword)){
        if(mediumRegex.test(password)){
          dispatch(signUpRequest(name, email, gender, referralCode, password, date));
        }else{
         setAlertMessage("Password must have at least two uppercase ('A'-'Z'),one lowercase ('a'-'z'),one special character (@,!,#, etc), minimum 6 digits.).");
         setShowAlert(true);
        }
      }else{
        setAlertMessage('Password and Confirm Password Should Same.');
        setShowAlert(true);
      }
      
     }else{
      setAlertMessage('Please enter vaild email.');
      setShowAlert(true);
     }
     
   }else{
     setAlertMessage('Please enter the required fields.');
     setShowAlert(true);
   }
    
  }
  if (signed) {
    navigation.navigate('editProfile');
  }
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={loginStyle.body}>
        <Header navigation={navigation} isShow={true} />
        <KeyboardAwareScrollView
          scrollEnabled={true}
          resetScrollToCoords={{x: 0, y: 0}}
          enableOnAndroid={true}
          enableAutomaticScroll={Platform.OS === 'ios'}
          keyboardShouldPersistTaps="handled">
          <View>
            <View style={loginStyle.inputLayout}>
              <TextInput
                ref={nameInputRef}
                style={loginStyle.input}
                onChangeText={setName}
                placeholder={'Name'}
                returnKeyType={'next'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  emailInputRef.current.focus();
                }}
                //blurOnSubmit={true}
              />
              <TouchableOpacity
                onPress={() => {
                  nameInputRef.current.clear();
                  setName('');
                }}>
                <Image
                  resizeMode="contain"
                  style={[
                    loginStyle.closeIdle,
                    {opacity: name.length > 0 ? 1 : 0.5},
                  ]}
                  source={require('../../../assets/images/ic_input_close.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={loginStyle.inputLayout}>
              <TextInput
                ref={emailInputRef}
                style={loginStyle.input}
                onChangeText={setEmail}
                placeholder={'E-mail'}
                returnKeyType={'next'}
                keyboardType={'email-address'}

                // blurOnSubmit={true}
              />
              <TouchableOpacity
                onPress={() => {
                  emailInputRef.current.clear();
                  setEmail('');
                }}>
                <Image
                  resizeMode="contain"
                  style={[
                    loginStyle.closeIdle,
                    {opacity: email.length > 0 ? 1 : 0.5},
                  ]}
                  source={require('../../../assets/images/ic_input_close.png')}
                />
              </TouchableOpacity>
            </View>
            {/* <View style={loginStyle.inputLayout}>
              <TextInput
                ref={confirmEmailInputRef}
                style={loginStyle.input}
                onChangeText={confirmEmail}
                placeholder={'Confirm E-mail'}
                returnKeyType={'next'}
                keyboardType={'email-address'}
                onSubmitEditing={() => {
                  dobInputRef.current.focus();
                }}
                // blurOnSubmit={true}
              />
              <TouchableOpacity
                onPress={() => {
                  confirmEmailInputRef.current.clear();
                  setConfirmEmail('');
                }}>
                <Image
                  resizeMode="contain"
                  style={[
                    loginStyle.closeIdle,
                    {opacity: confirmEmail.length > 0 ? 1 : 0.5},
                  ]}
                  source={require('../../../assets/images/ic_input_close.png')}
                />
              </TouchableOpacity>
            </View> */}

            <View style={loginStyle.genderLayout}>
              <TouchableOpacity
                onPress={() => setIsMaleSelect(true)}
                style={[
                  loginStyle.maleLayout,
                  {backgroundColor: isMaleSelect ? '#cc0166' : 'white'},
                ]}>
                <Image
                  resizeMode="contain"
                  style={[
                    loginStyle.genderIcon,
                    {tintColor: isMaleSelect ? 'white' : '#cc0166'},
                  ]}
                  source={require('../../../assets/images/mars.png')}
                />
                <Text
                  style={[
                    loginStyle.textMale,
                    {color: isMaleSelect ? 'white' : '#cc0166'},
                  ]}>
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsMaleSelect(false)}
                style={[
                  loginStyle.femaleLayout,
                  {backgroundColor: isMaleSelect ? 'white' : '#cc0166'},
                ]}>
                <Image
                  resizeMode="contain"
                  style={[
                    loginStyle.femaleIcon,
                    {tintColor: isMaleSelect ? '#cc0166' : 'white'},
                  ]}
                  source={require('../../../assets/images/femenine.png')}
                />
                <Text
                  style={[
                    loginStyle.textFemale,
                    {color: isMaleSelect ? '#cc0166' : 'white'},
                  ]}>
                  Female
                </Text>
              </TouchableOpacity>
            </View>
            <View style={loginStyle.inputLayout}>
              <Text style={loginStyle.inputDob}>{date}</Text>

              {
                <DatePicker
                  style={loginStyle.pickerDob}
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
                      marginLeft: 0,
                    },
                    dateInput: {
                      //marginLeft: 36,
                      borderColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    },
                    datePicker: {
                      alignItems: 'stretch',
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={setDate}
                />
              }
            </View>
            <View style={loginStyle.inputLayout}>
              <TextInput
                ref={referralCodeInputRef}
                style={loginStyle.input}
                onChangeText={setReferralCode}
                placeholder={'Referral Code'}
                returnKeyType={'next'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  passwordInputRef.current.focus();
                }}
                //blurOnSubmit={true}
              />
              <TouchableOpacity
                onPress={() => {
                  referralCodeInputRef.current.clear();
                  setReferralCode('');
                }}>
                <Image
                  resizeMode="contain"
                  style={[
                    loginStyle.closeIdle,
                    {opacity: referralCode.length > 0 ? 1 : 0.5},
                  ]}
                  source={require('../../../assets/images/ic_input_close.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={loginStyle.inputLayout}>
              <TextInput
                ref={passwordInputRef}
                style={loginStyle.input}
                onChangeText={setPassword}
                placeholder={'Password'}
                secureTextEntry={true}
                returnKeyType={'next'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  confirmPasswordInputRef.current.focus();
                }}
                //blurOnSubmit={true}
              />
              <TouchableOpacity
                onPress={() => {
                  passwordInputRef.current.clear();
                  setPassword('');
                }}>
                <Image
                  resizeMode="contain"
                  style={[
                    loginStyle.closeIdle,
                    {opacity: password.length > 0 ? 1 : 0.5},
                  ]}
                  source={require('../../../assets/images/ic_input_close.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={loginStyle.inputLayout}>
              <TextInput
                ref={confirmPasswordInputRef}
                style={loginStyle.input}
                onChangeText={setConfirmPassword}
                placeholder={'Confirm Password'}
                secureTextEntry={true}
                returnKeyType={'done'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                //blurOnSubmit={true}
              />
              <TouchableOpacity
                onPress={() => {
                  confirmPasswordInputRef.current.clear();
                  setConfirmPassword('');
                }}>
                <Image
                  resizeMode="contain"
                  style={[
                    loginStyle.closeIdle,
                    {opacity: confirmPassword.length > 0 ? 1 : 0.5},
                  ]}
                  source={require('../../../assets/images/ic_input_close.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginBottom: 20}}>
              <SubmitButton loading={loading} onPress={handleSubmit}>
                Sign Up
              </SubmitButton>
            </View>

            <View />
          </View>
        </KeyboardAwareScrollView>

        {showAlert
          ? Alert.alert(
              //title
              'Error',
              //body
              alertMessage,
              [{text: 'Ok', onPress: () => setShowAlert(false)}],
              {cancelable: false},
              //clicking out side of alert will not cancel
            )
          : null}
      </View>
    </SafeAreaView>
  );
};

const isEmailValid = (userEmail) => {
  let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(String(userEmail).toLowerCase())
}


function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default SignUpScreen;
