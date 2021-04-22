import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardingScreen from '../Screens/Onboarding/Onboarding';
import LoginScreen from '../Screens/Auth/Login';
import SignUpScreen from '../Screens/Auth/SignUp';
import ForgotPasswordScreen from '../Screens/Auth/ForgotPassword';
import ProfileScreen from '../Screens/Profile/Profile';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const signed = useSelector((state) => state.auth.signed);
  console.log('signed id ==' + signed);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={OnBoardingScreen} name="Onboarding" />
        <Stack.Screen component={LoginScreen} name="login" />
        <Stack.Screen component={SignUpScreen} name="signUp" />
        <Stack.Screen component={ForgotPasswordScreen} name="forgotPassword" />
        <Stack.Screen component={ProfileScreen} name="profile" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
