import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardingScreen from '../Screens/Onboarding/Onboarding';
import LoginScreen from '../Screens/Auth/Login';
import SignUpScreen from '../Screens/Auth/SignUp';
import ForgotPasswordScreen from '../Screens/Auth/ForgotPassword';
import EditProfileScreen from '../Screens/Profile/EditProfile';
import ProfileScreen from '../Screens/Profile/Profile';
import GeneratedProfileScreen from '../Screens/Profile/GeneratedProfile';
import DrawerNavigationRoute from './DrawerNavigationRoute';
import YourProfileScreen from '../Screens/Profile/YourProfile';
import ConversationScreen from '../Screens/Discover/Conversation';
import HistoryScreen from '../Screens/Discover/History';
import OtherUserProfile from '../Screens/Profile/OtherUserProfile';
import ChatScreen from '../Screens/Discover/Chat';

const Stack = createStackNavigator();

const NavigationRoute = () => {
   const data = 'data';
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
        <Stack.Screen component={EditProfileScreen} name="editProfile" />
        <Stack.Screen component={ProfileScreen} name="profile" />
        <Stack.Screen component={GeneratedProfileScreen} name="generatedProfile"/>
        <Stack.Screen component={DrawerNavigationRoute} name="discoverRoute" />
        <Stack.Screen component={YourProfileScreen} name="YourProfileScreen" />
        <Stack.Screen component={ConversationScreen} name="conversation" />
        <Stack.Screen component={ChatScreen} name="chat" />
        <Stack.Screen component={HistoryScreen} name="history" />
        <Stack.Screen component={OtherUserProfile} name="OtherUserProfile" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoute;