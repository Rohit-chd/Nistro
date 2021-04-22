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
  const renderItem = ({item}) => <Item image={item.image} title={item.title} />;

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
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const FlatListItemSeparator = () => {
  return (
    //Item Separator
    <View
      style={{
        height: 0.5,
        width: '100%',
        backgroundColor: '#898a8f',
      }}
    />
  );
};
const Item = ({title, image}) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
      height: 50,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginVertical: 10,
      marginTop: 20,
      marginBottom: 20,
    }}>
    <Image
      style={{
        height: 65,
        width: 65,
        //borderRadius: 22,
        //backgroundColor: '#cc0166',
      }}
      resizeMode={'contain'}
      source={image}
    />
    <View
      style={{
        flexDirection: 'column',
        //justifyContent: 'flex-start',
        //alignItems: 'flex-start',
        alignSelf: 'flex-start',
      }}>
      <Text style={{color: '#cc0166', fontSize: 14, lineHeight: 19}}>
        {title}
      </Text>
      <Text style={{color: '#898a8f', fontSize: 13, lineHeight: 15}}>
        Lorem ipsum dolor sit amet, consecte ...
      </Text>
    </View>
  </View>
);
const DATA = [
  {
    id: '1',
    title: 'Alan Warker',
    image: require('../../../assets/images/ic_artist1.png'),
    description: 'Erigga',
  },
  {
    id: '2',
    title: 'TJ Jackson',
    image: require('../../../assets/images/ic_artist2.png'),
    description: 'Drake',
  },
  {
    id: '3',
    title: 'Ed sheeran',
    image: require('../../../assets/images/ic_artist3.png'),
    description: 'Future',
  },
  {
    id: '4',
    title: 'Eminem',
    image: require('../../../assets/images/ic_artist4.png'),
    description: 'Drake',
  },
  {
    id: '1',
    title: 'Alan Warker',
    image: require('../../../assets/images/ic_artist1.png'),
    description: 'Erigga',
  },
  {
    id: '2',
    title: 'TJ Jackson',
    image: require('../../../assets/images/ic_artist2.png'),
    description: 'Drake',
  },
  {
    id: '3',
    title: 'Ed sheeran',
    image: require('../../../assets/images/ic_artist3.png'),
    description: 'Future',
  },
  {
    id: '4',
    title: 'Eminem',
    image: require('../../../assets/images/ic_artist4.png'),
    description: 'Drake',
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
          History
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
