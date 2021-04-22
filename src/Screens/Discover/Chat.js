import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import styles from './ConversationStyle';
export default function ChatScreen({route, navigation}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />
      <GiftedChat
        messages={messages}
        onPressAvatar={() =>
          navigation.navigate('OtherUserProfile', {
            isShowAccept: false,
          })
        }
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backArrowContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('OtherUserProfile', {
              isShowAccept: false,
            })
          }
          style={{
            flex: 1,
            height: 60,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              lineHeight: 25,
              letterSpacing: 1.6,
              alignSelf: 'center',
              textAlign: 'center',
              position: 'absolute',
              //s top: 7,
              left: 0,
              right: 0,
            }}>
            Adrianne
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 0.1}}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.close}
            resizeMode="contain"
            source={require('../../../assets/images/ic_close.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.body} />
    </View>
  );
};
