import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './ConversationStyle';
const Conversation = ({route, navigation}) => {
  var {navi} = navigation;
  const renderItem = ({item}) => <Item title={item.title} navi={navigation} />;

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header navigation={navigation} />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          ItemSeparatorComponent={FlatListItemSeparator}
          keyExtractor={(item) => {
            item.id;
            item.description;
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const FlatListItemSeparator = () => {
  return (
    //Item Separator
    <View style={{height: 0.5, width: '100%', backgroundColor: '#898a8f'}} />
  );
};
const Item = ({title, navi}) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
      height: 80,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginVertical: 10,
    }}>
    {/*  */}
    <TouchableOpacity
      //onPress={() => navi.navigate('chat')}
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 80,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <TouchableOpacity
        onPress={() =>
          navi.navigate('OtherUserProfile', {
            isShowAccept: false,
          })
        }>
        <View
          style={{
            height: 44,
            width: 44,
            borderRadius: 22,
            backgroundColor: '#cc0166',
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}>
        <TouchableOpacity
          onPress={() =>
            navi.navigate('OtherUserProfile', {
              isShowAccept: false,
            })
          }>
          <Text style={{color: '#cc0166', fontSize: 14, lineHeight: 19}}>
            {title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navi.navigate('chat')}>
          <Text style={{color: '#898a8f', fontSize: 13, lineHeight: 15}}>
            Lorem ipsum dolor sit amet, consecte ...
          </Text>
          <Text
            style={{
              color: '#898a8f',
              fontSize: 10,
              lineHeight: 15,
              textAlign: 'right',
              marginTop: 5,
              marginRight: -15,
            }}>
            20 Aug 2020 11:30 AM
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navi.navigate('chat')}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 8, height: 14}}
            resizeMode="contain"
            source={require('../../../assets/images/ic_arrow_right.png')}
          />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  </View>
);
const DATA = [
  {
    id: '1',
    title: 'Adrianne',
    description: 'Lorem ipsum dolor sit amet, consecte ...',
  },
  {
    id: '2',
    title: 'Adrianne',
    description: 'Lorem ipsum dolor sit amet, consecte ...',
  },
  {
    id: '3',
    title: 'Adrianne',
    description: 'Lorem ipsum dolor sit amet, consecte ...',
  },
  {
    id: '4',
    title: 'Adrianne',
    description: 'Lorem ipsum dolor sit amet, consecte ...',
  },
];

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backArrowContainer}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            lineHeight: 25,
            letterSpacing: 1.6,
            alignSelf: 'center',
            textAlign: 'center',
            position: 'absolute',
            top: 7,
            left: 0,
            right: 0,
          }}>
          Conversation
        </Text>
        <TouchableOpacity
          style={styles.globalFlex}
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

export default Conversation;
