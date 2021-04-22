import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import loginStyle from '../Auth/LoginStyle';
import Header from '../../Components/Header/Header';

const ReferralCodeScreen = ({navigation}) => {
  const [referralCode, setReferralCode] = useState('');
  const [username, setUsername] = useState('');
  const referralCodeInputRef = React.useRef(null);
  const usernameInputRef = React.useRef(null);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={loginStyle.referralbody}>
        <Header navigation={navigation} isShow={true} />
        <View style={loginStyle.forgotPasswordLayout}>
          <Text style={loginStyle.textReferralCodeLable}>
            Have a referral code?
          </Text>
        </View>
        <KeyboardAwareScrollView
          scrollEnabled={true}
          resetScrollToCoords={{x: 0, y: 0}}
          enableOnAndroid={true}
          enableAutomaticScroll={Platform.OS === 'ios'}
          extraScrollHeight={0}>
          <View
            style={{
              justifyContent: 'space-around',
              backgroundColor: 'white',
              height: hp('50%'),
            }}>
            <View style={[loginStyle.inputForgotLayout, {marginTop: 0}]}>
              <TextInput
                ref={referralCodeInputRef}
                style={loginStyle.inputForgot}
                onChangeText={(referralCode) => setReferralCode(referralCode)}
                placeholder={'Referral Code'}
                returnKeyType={'done'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                blurOnSubmit={true}
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
            <View style={loginStyle.inputReferralLayout}>
              <View style={loginStyle.lineReferral} />
              <Text style={loginStyle.textReferralOrLable}>Or</Text>
              <View style={loginStyle.lineReferral} />
            </View>
            <View style={[loginStyle.inputForgotLayout, {marginTop: 0}]}>
              <TextInput
                ref={usernameInputRef}
                style={loginStyle.inputForgot}
                onChangeText={(username) => setUsername(username)}
                placeholder={'Username'}
                returnKeyType={'done'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                blurOnSubmit={true}
              />
              <TouchableOpacity
                onPress={() => {
                  usernameInputRef.current.clear();
                  setUsername('');
                }}>
                <Image
                  resizeMode="contain"
                  style={[
                    loginStyle.closeIdle,
                    {opacity: username.length > 0 ? 1 : 0.5},
                  ]}
                  source={require('../../../assets/images/ic_input_close.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[loginStyle.loginButtonLayout, {marginTop: 20}]}>
              <Text style={loginStyle.textLogin}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ReferralCodeScreen;
