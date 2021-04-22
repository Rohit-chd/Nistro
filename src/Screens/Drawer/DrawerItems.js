import React from 'react';
import {View, StyleSheet, Image, Text, Alert, SafeAreaView} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {signOut} from '../../store/modules/auth/actions';

export function DrawerContent(props) {
  const dispatch = useDispatch();

  return (
    <LinearGradient
      style={styles.drawerContent}
      colors={['#cc0166', '#660133']}>
      <DrawerContentScrollView {...props} bounces={false}>
        <View style={styles.drawerContent}>
          <Image
            resizeMode="contain"
            style={{
              height: 78,
              width: 78,
              alignSelf: 'center',
              marginTop: 10,
            }}
            source={require('../../../assets/images/ic_auth_header.png')}
          />

          <DrawerItem
            style={{marginBottom: -10, marginTop: 20}}
            label={({color}) => (
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  lineHeight: 18,
                  letterSpacing: 1.2,
                }}>
                Feedback
              </Text>
            )}
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate('discover', {
                showDialog: true,
              });
            }}
          />
          <DrawerItem
            style={{marginBottom: -10}}
            label={({color}) => (
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  lineHeight: 18,
                  letterSpacing: 1.2,
                }}>
                Privacy Policy
              </Text>
            )}
            onPress={() => {
              props.navigation.navigate('Privacypolicy', {
                title: 'Privacy Policy',
              });
            }}
          />
          <DrawerItem
            style={{marginBottom: -10}}
            label={({color}) => (
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  lineHeight: 18,
                  letterSpacing: 1.2,
                }}>
                Terms & Conditions
              </Text>
            )}
            onPress={() => {
              props.navigation.navigate('Privacypolicy', {
                title: 'Terms & Conditions',
              });
            }}
          />
          <DrawerItem
            label={({color}) => (
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  lineHeight: 18,
                  letterSpacing: 1.2,
                }}>
                Share the app to gain more swipe
              </Text>
            )}
            onPress={() => {
              //props.navigation.navigate('Feedback');
            }}
          />
          <View
            style={{
              flex: 1,
              marginTop: hp('34%'),
              justifyContent: 'flex-end',
              paddingBottom: 10,
            }}>
            <DrawerItem
              style={{marginBottom: -10}}
              label={({color}) => (
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                    lineHeight: 18,
                    letterSpacing: 1.2,
                  }}>
                  Freeze Account
                </Text>
              )}
              onPress={() => {
                //props.navigation.navigate('Privacypolicy');
              }}
            />
            <DrawerItem
              style={{marginBottom: -10}}
              label={({color}) => (
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                    lineHeight: 18,
                    letterSpacing: 1.2,
                  }}>
                  Have a referral code?
                </Text>
              )}
              onPress={() => {
                props.navigation.closeDrawer();
                props.navigation.navigate('referralCode', {
                  showDialog: true,
                });
              }}
            />
            <DrawerItem
              style={{marginBottom: -10}}
              label={({color}) => (
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                    lineHeight: 18,
                    letterSpacing: 1.2,
                  }}>
                  Change Password
                </Text>
              )}
              onPress={() => {
                props.navigation.navigate('changePassword');
              }}
            />
            <DrawerItem
              style={{marginBottom: -10}}
              label={({color}) => (
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                    lineHeight: 18,
                    letterSpacing: 1.2,
                  }}>
                  Log Out
                </Text>
              )}
              onPress={() => {
                dispatch(signOut());
                props.navigation.navigate('login');


              }}
            />
            <View style={{justifyContent: 'center', marginTop: 20}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 7,
                  lineHeight: 10,
                  letterSpacing: 0.7,
                  textAlign: 'center',
                }}>
                Version 1.0.0
              </Text>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    height: hp('91%'),
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
