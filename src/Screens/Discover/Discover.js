'use strict';
import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Platform,
  LogBox,
  SafeAreaView,
} from 'react-native';
import discoverStyle from './DiscoverStyle';
import SwipeableCard from '../Drawer/SwipeableCard';
import {Dialog} from 'react-native-simple-dialogs';
import StarRating from 'react-native-star-rating';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const DiscoverScreen = ({route, navigation}) => {
  const showDialog = JSON.stringify(
    route.params == null ? null : route.params.showDialog,
  );
  console.log('showdialog=' + showDialog);
  const [showFeedBackDialog, setFeedBackDialog] = useState(showDialog);
  //setFeedBackDialog(showDialog);
  console.log('showFeedBackDialog=' + showFeedBackDialog);
  let [Sample_Card_Array, setSample_Card_Array] = useState([
    {
      id: '1',
      card_Title: 'Card 1',
    },
    {
      id: '2',
      card_Title: 'Card 2',
    },
    {
      id: '3',
      card_Title: 'Card 3',
    },
    {
      id: '4',
      card_Title: 'Card 4',
    },
    {
      id: '5',
      card_Title: 'Card 5',
    },
  ]);
  let [no_More_Card, setNo_More_Card] = useState(false);
  let [cardsLength, setCardsLength] = useState(5);

  const removeCard = (id) => {
    Sample_Card_Array.splice(
      Sample_Card_Array.findIndex((x) => x.id == id),
      1,
    );
    setCardsLength(Sample_Card_Array.length);
    setSample_Card_Array(Sample_Card_Array);
    if (Sample_Card_Array.length == 0) {
      setNo_More_Card(true);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={discoverStyle.body}>
        <HeaderDiscover navigation={navigation} />
        <View
          style={{
            flex: 1,
            marginLeft: 20,
            marginRight: 20,
          }}>
          {Sample_Card_Array.map((item, key) => (
            <SwipeableCard
              key={key}
              item={item}
              navigation={navigation}
              removeCard={removeCard.bind(this, item.id)}
            />
          ))}
          {no_More_Card ? (
            <View>
              <View
                style={{
                  backgroundColor: '#cc0166',
                  borderRadius: 10,
                  height: hp('65%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  opacity: 0.5,
                  flexDirection: 'row',
                }}
              />
              <Image
                resizeMode="contain"
                style={{
                  height: 112,
                  width: 112,
                  position: 'absolute',
                  left: hp('16%'),
                  right: 0,
                  top: hp('25%'),
                  bottom: 0,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
                source={require('../../../assets/images/ic_auth_header.png')}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  lineHeight: 25,
                  letterSpacing: 1.6,
                  color: '#cc0166',
                  marginTop: 16,
                }}>
                No more users
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  lineHeight: 25,
                  letterSpacing: 1.6,
                  color: '#898a8f',
                  marginTop: 12,
                }}>
                Try again later for more users
              </Text>
            </View>
          ) : null}
        </View>

        {no_More_Card ? null : (
          <View
            style={{
              flex: 0.1,
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
              marginRight: 20,
            }}>
            <Image
              resizeMode="contain"
              style={{
                height: hp('16%'),
                width: wp('16%'),
              }}
              source={require('../../../assets/images/ic_artist1.png')}
            />
            <Image
              resizeMode="contain"
              style={{
                height: hp('16%'),
                width: wp('16%'),
              }}
              source={require('../../../assets/images/ic_artist2.png')}
            />
            <Image
              resizeMode="contain"
              style={{
                height: hp('16%'),
                width: wp('16%'),
              }}
              source={require('../../../assets/images/ic_artist3.png')}
            />
            <Image
              resizeMode="contain"
              style={{
                height: hp('16%'),
                width: wp('16%'),
              }}
              source={require('../../../assets/images/ic_artist4.png')}
            />
          </View>
        )}

        <View
          style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
            marginRight: 20,
          }}>
          <View
            style={{
              height: 44,
              width: 44,
              borderRadius: 22,
              backgroundColor: no_More_Card ? '#898a8f' : '#cc0166',
              justifyContent: 'center',
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                alignSelf: 'center',
                alignContent: 'center',
              }}
              source={require('../../../assets/images/ic_rss_feed.png')}
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              color: '#898a8f',
              lineHeight: 28,
              letterSpacing: 1.15,
              fontSize: 23,
            }}>
            {cardsLength}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('conversation')}>
            <View
              style={{
                height: 44,
                width: 44,
                borderRadius: 22,
                backgroundColor: '#cc0166',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 22,
                  height: 22,
                  alignSelf: 'center',
                }}
                source={require('../../../assets/images/ic_chat.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* {showFeedBackDialog ? (
          <ShowDialogFeedback setFeedBackDialog={setFeedBackDialog} />
        ) : null} */}
      </View>
    </SafeAreaView>
  );
};

const HeaderDiscover = ({navigation}) => {
  return (
    <View
      style={{
        height: 50,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          resizeMode="contain"
          style={{
            width: 18,
            height: 15,
            alignSelf: 'center',
            alignContent: 'center',
          }}
          source={require('../../../assets/images/ic_drawer.png')}
        />
      </TouchableOpacity>
      <Image
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
        }}
        source={require('../../../assets/images/ic_n_logo.png')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('YourProfileScreen')}>
        <Image
          resizeMode="contain"
          style={{
            width: 18,
            height: 15,
            alignSelf: 'center',
          }}
          source={require('../../../assets/images/ic_profile.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const ShowDialogFeedback = ({setFeedBackDialog}) => {
  let [rating, setRating] = useState(4);
  return (
    <Dialog
      dialogStyle={{height: 240, backgroundColor: 'transparent'}}
      contentStyle={{
        backgroundColor: 'white',
        borderRadius: 20,
        flex: 1,
      }}
      visible={true}
      title=""
      onTouchOutside={() => this.setState({dialogVisible: false})}>
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          marginLeft: -50,
          marginRight: -50,
          flexDirection: 'column',
          marginTop: -60,
        }}>
        <Image
          resizeMode="contain"
          style={{
            width: 87,
            height: 87,
            alignSelf: 'center',
          }}
          source={require('../../../assets/images/ic_profile_logo.png')}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,
            lineHeight: 25,
            color: '#cc0166',
            marginTop: 16,
            marginLeft: 50,
            marginRight: 50,
          }}>
          How was your experience with us?
        </Text>
        <StarRating
          containerStyle={{
            marginTop: 10,
            marginLeft: 80,
            marginRight: 80,
            marginBottom: 10,
          }}
          disabled={false}
          maxStars={5}
          starSize={30}
          rating={rating}
          emptyStar={require('../../../assets/images/inactive_star.png')}
          fullStar={require('../../../assets/images/star.png')}
          selectedStar={(rating) => {
            setRating(rating);
          }}
        />
        <View
          style={{
            height: 0.5,
            marginTop: 10,
            backgroundColor: '#292828',
            marginLeft: 20,
            marginRight: 20,
          }}
        />
        <View
          style={{
            height: 70,
            marginLeft: 25,
            marginRight: 25,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => setFeedBackDialog(false)}
            style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                lineHeight: 25,
                letterSpacing: 1.6,
                color: '#cc0166',
                //marginTop: 16,
                //marginLeft: 50,
                //marginRight: 50,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 0.5,
              // marginTop: 10,
              backgroundColor: '#292828',
              //marginLeft: 20,
              //marginRight: 20,
            }}
          />
          <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                lineHeight: 25,
                letterSpacing: 1.6,
                color: '#cc0166',
                //marginTop: 16,
                //marginLeft: 50,
                //marginRight: 50,
              }}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Dialog>
  );
};

export default DiscoverScreen;
