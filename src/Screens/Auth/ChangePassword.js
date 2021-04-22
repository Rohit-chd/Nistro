import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import loginStyle from './LoginStyle';
import headerStyle from '../../Components/Header/HeaderStyle';

const ChangePasswordScreen = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const oldPasswordInputRef = React.useRef(null);
  const PasswordInputRef = React.useRef(null);
  const confirmPasswordInputRef = React.useRef(null);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={loginStyle.body}>
        <Header navigation={navigation} isShow={true} />
        <KeyboardAwareScrollView
          scrollEnabled={false}
          resetScrollToCoords={{x: 0, y: 0}}
          keyboardShouldPersistTaps="handled">
          <View style={loginStyle.inputChangeLayout}>
            <TextInput
              ref={oldPasswordInputRef}
              style={loginStyle.inputForgot}
              onChangeText={(oldPassword) => setOldPassword(oldPassword)}
              placeholder={'Old Password'}
              returnKeyType={'next'}
              keyboardType={'default'}
              onSubmitEditing={() => {
                PasswordInputRef.current.focus();
              }}
              blurOnSubmit={true}
            />
            <TouchableOpacity
              onPress={() => {
                oldPasswordInputRef.current.clear();
                setOldPassword('');
              }}>
              <Image
                resizeMode="contain"
                style={[
                  loginStyle.closeIdle,
                  {opacity: oldPassword.length > 0 ? 1 : 0.5},
                ]}
                source={require('../../../assets/images/ic_input_close.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={loginStyle.inputChangeLayout}>
            <TextInput
              ref={PasswordInputRef}
              style={loginStyle.inputForgot}
              onChangeText={(password) => setPassword(password)}
              placeholder={'New Password'}
              returnKeyType={'next'}
              keyboardType={'default'}
              onSubmitEditing={() => {
                confirmPasswordInputRef.current.focus();
              }}
              blurOnSubmit={true}
            />
            <TouchableOpacity
              onPress={() => {
                PasswordInputRef.current.clear();
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

          <View style={loginStyle.inputChangeLayout}>
            <TextInput
              ref={confirmPasswordInputRef}
              style={loginStyle.inputForgot}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
              placeholder={'Confirm Password'}
              returnKeyType={'done'}
              keyboardType={'default'}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              blurOnSubmit={true}
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

          <TouchableOpacity
            style={loginStyle.saveButtonLayout}
            onPress={() => navigation.goBack()}>
            <Text style={loginStyle.textLogin}>SAVE</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const Header = ({navigation}) => {
  return (
    <View style={headerStyle.container}>
      <View style={headerStyle.backArrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={headerStyle.backArrow}
            resizeMode="contain"
            source={require('../../../assets/images/ic_arrow_back.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={headerStyle.body}>
        <Image
          style={headerStyle.logo}
          resizeMode="contain"
          source={require('../../../assets/images/ic_auth_header.png')}
        />
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
