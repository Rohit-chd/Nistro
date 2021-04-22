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

import loginStyle from './LoginStyle';
import Header from '../../Components/Header/Header';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailInputRef = React.useRef(null);
  const PasswordInputRef = React.useRef(null);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={loginStyle.body}>
        <Header navigation={navigation} isShow={true} />
        <View style={loginStyle.forgotPasswordLayout}>
          <Text style={loginStyle.textForgotLable}>
            If you have forgotten your password you can reset it here.
          </Text>
        </View>
        <View style={loginStyle.inputForgotLayout}>
          <TextInput
            ref={emailInputRef}
            style={loginStyle.inputForgot}
            onChangeText={(email) => setEmail(email)}
            placeholder={'E-mail'}
            returnKeyType={'done'}
            keyboardType={'email-address'}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            blurOnSubmit={true}
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
        <TouchableOpacity style={loginStyle.loginButtonLayout}>
          <Text style={loginStyle.textLogin}>SEND EMAIL</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
