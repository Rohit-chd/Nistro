import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DiscoverScreen from '../Screens/Discover/Discover';
import FeedbackScreen from '../Screens/Drawer/Feedback';
import PrivacyPolicyScreen from '../Screens/Drawer/PrivacyPolicy';
import ChangePasswordScreen from '../Screens/Auth/ChangePassword';
import ReferralCodeScreen from '../Screens/Drawer/ReferralCode';
import {DrawerContent} from '../Screens/Drawer/DrawerItems';

const Drawer = createDrawerNavigator();

const DrawerNavigationRoute = () => {
  return (
    <Drawer.Navigator
      initialRouteName="discover"
      backBehavior="initialRoute"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen component={DiscoverScreen} name="discover" />
      <Drawer.Screen component={FeedbackScreen} name="Feedback" />
      <Drawer.Screen component={PrivacyPolicyScreen} name="Privacypolicy" />
      <Drawer.Screen component={ChangePasswordScreen} name="changePassword" />
      <Drawer.Screen component={ReferralCodeScreen} name="referralCode" />
    </Drawer.Navigator>
  );
};
export default DrawerNavigationRoute;
