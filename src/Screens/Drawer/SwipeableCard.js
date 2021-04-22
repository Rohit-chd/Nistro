'use strict';
//This is an example of Tinder like Swipeable Card//
import React from 'react';
//import react in our code.
import {
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  PanResponder,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Slider from 'react-native-slider';

import * as Progress from 'react-native-progress';
//import all the components we are going to use.
const SCREEN_WIDTH = Dimensions.get('window').width;
export default class SwipeableCard extends React.Component {
  constructor() {
    super();
    this.panResponder;
    this.state = {
      Xposition: new Animated.Value(0),
      RightText: false,
      LeftText: false,
    };
    const touchThreshold = 20;
    this.Card_Opacity = new Animated.Value(1);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      //onMoveShouldSetPanResponder: () => true,
      //onMoveShouldSetPanResponder: (event, gesture) => {
      //return Math.abs(gesture.dx) > 100 || Math.abs(gesture.dy) > 100;
      //},
      onMoveShouldSetPanResponder: (_, gestureState) => {
        const {dx, dy} = gestureState;
        return dx > 2 || dx < -2 || dy > 2 || dy < -2;
      },

      onMoveShouldSetPanResponderCapture: (_, gestureState) => {
        const {dx, dy} = gestureState;
        return dx > 2 || dx < -2 || dy > 2 || dy < -2;
      },
      onStartShouldSetPanResponderCapture: () => false,
      //onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: (evt, gestureState) => {
        this.state.Xposition.setValue(gestureState.dx);
        if (gestureState.dx > SCREEN_WIDTH - 250) {
          this.setState({
            RightText: true,
            LeftText: false,
          });
        } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
          this.setState({
            LeftText: true,
            RightText: false,
          });
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (
          gestureState.dx < SCREEN_WIDTH - 150 &&
          gestureState.dx > -SCREEN_WIDTH + 150
        ) {
          this.setState({
            LeftText: false,
            RightText: false,
          });
          Animated.spring(
            this.state.Xposition,
            {
              toValue: 0,
              speed: 5,
              bounciness: 10,
            },
            {useNativeDriver: true},
          ).start();
        } else if (gestureState.dx > SCREEN_WIDTH - 150) {
          Animated.parallel(
            [
              Animated.timing(this.state.Xposition, {
                toValue: SCREEN_WIDTH,
                duration: 200,
              }),
              Animated.timing(this.Card_Opacity, {
                toValue: 0,
                duration: 200,
              }),
            ],
            {useNativeDriver: true},
          ).start(() => {
            this.setState({LeftText: false, RightText: false}, () => {
              this.props.removeCard();
            });
          });
        } else if (gestureState.dx < -SCREEN_WIDTH + 150) {
          Animated.parallel(
            [
              Animated.timing(this.state.Xposition, {
                toValue: -SCREEN_WIDTH,
                duration: 200,
              }),
              Animated.timing(this.Card_Opacity, {
                toValue: 0,
                duration: 200,
              }),
            ],
            {useNativeDriver: true},
          ).start(() => {
            this.setState({LeftText: false, RightText: false}, () => {
              this.props.removeCard();
            });
          });
        }
      },
    });
  }
  render() {
    const rotateCard = this.state.Xposition.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['-20deg', '0deg', '20deg'],
    });
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[
          styles.card_Style,
          {
            backgroundColor: this.props.item.backgroundColor,
            opacity: this.Card_Opacity,
            transform: [
              {translateX: this.state.Xposition},
              {rotate: rotateCard},
            ],
          },
        ]}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
          }}>
          <Image
            resizeMode="stretch"
            style={{
              width: wp('95%'),
              height: hp('70%'),
              alignSelf: 'center',
            }}
            source={require('../../../assets/images/ic_demoimage.png')}
          />
          <LinearGradient
            colors={['transparent', 'transparent', '#cc0166']}
            style={{
              height: hp('67%'),
              width: wp('90%'),
              position: 'absolute',
              alignSelf: 'center',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: wp('90%'),
                  height: 60,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingLeft: 14,
                  paddingRight: 8,
                }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 22,
                    height: 25,
                    alignSelf: 'flex-start',
                    marginTop: 13,
                  }}
                  source={require('../../../assets/images/ic_flag.png')}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 0.8,
                    height: 70,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('OtherUserProfile', {
                        isShowAccept: true,
                      })
                    }>
                    <Image
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30,
                        //alignSelf: '',
                        //marginTop: 13,
                        marginRight: 15,
                      }}
                      source={require('../../../assets/images/ic_info.png')}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                      lineHeight: 25,
                      letterSpacing: 1.6,
                      textAlign: 'center',
                    }}>
                    Lillian J. Marshall
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.4,
                    height: 70,
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: 'white',
                      lineHeight: 20,
                      letterSpacing: 1.3,
                      textAlign: 'center',
                    }}>
                    Age 26
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      color: 'white',
                      lineHeight: 17,
                      letterSpacing: 1.1,
                      textAlign: 'center',
                    }}>
                    Match 70%
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
        {this.state.LeftText ? (
          <View style={{position: 'absolute', left: 0, right: 0}}>
            <Image
              resizeMode="stretch"
              style={{
                width: wp('91%'),
                height: hp('68%'),
                alignSelf: 'center',
                //position: 'absolute',
              }}
              source={require('../../../assets/images/ic_reject.png')}
            />
            <Image
              resizeMode="stretch"
              style={{
                width: 97,
                height: 97,
                alignSelf: 'center',
                position: 'absolute',
                marginTop: hp('30%'),
                top: 0,
              }}
              source={require('../../../assets/images/ic_cross.png')}
            />
          </View>
        ) : null}
        {this.state.RightText ? (
          <View style={{position: 'absolute', left: 0, right: 0}}>
            <Image
              resizeMode="stretch"
              style={{
                width: wp('91%'),
                height: hp('68%'),
                alignSelf: 'center',
                //position: 'absolute',
              }}
              source={require('../../../assets/images/ic_accept.png')}
            />
            <Image
              resizeMode="stretch"
              style={{
                width: 97,
                height: 97,
                alignSelf: 'center',
                position: 'absolute',
                marginTop: hp('30%'),
                top: 0,
              }}
              source={require('../../../assets/images/ic_right.png')}
            />
          </View>
        ) : null}

        <Slider
          onSlidingStart={() => this.props.navigation.navigate('history')}
          style={{
            height: 20,
            width: wp('90.2%'),
            marginLeft: -19,
            marginBottom: 15,
          }}
          trackStyle={{height: 8}}
          minimumTrackTintColor={'#1ed760'}
          maximumTrackTintColor={'#F778A1'}
          thumbStyle={{
            backgroundColor: '#1ed760',
            height: 15,
            width: 15,
            borderWidth: 2,
            borderColor: '#048231',
          }}
          disabled={true}
          value={0.5}
        />
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  card_Style: {
    width: wp('80%'),
    height: hp('68%'),
    position: 'absolute',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignSelf: 'center',
    marginTop: 15,
  },
  Card_Title: {
    color: '#fff',
    fontSize: 24,
  },
  Left_Text_Style: {
    top: 22,
    right: 32,
    position: 'absolute',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  Right_Text_Style: {
    top: 22,
    left: 32,
    position: 'absolute',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});
