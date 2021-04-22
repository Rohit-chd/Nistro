import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import profileStyle from './UserProfileStyle';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const OtherUserProfile = ({route, navigation}) => {
  const {isShowAccept} = route.params;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={profileStyle.container}>
      <Header navigation={navigation} />
      <ScrollView
        bounces={false}
        style={{marginTop: -50, backgroundColor: 'white'}}>
        <UserImage navigation={navigation} />

        <UserAbout />
        <UserMusicList />
        <UserImages />
        <UserMoreDetail />
        {isShowAccept ? (
          <AddPassUser />
        ) : (
          <View style={{height: 20, backgroundColor: '#cc0166'}} />
        )}
      </ScrollView>
    </View>
  );
};
const SongList = [
  {
    id: '1',
    image: require('../../../assets/images/ic_artist1.png'),
    title: 'Alan Warker',
  },
  {
    id: '2',
    image: require('../../../assets/images/ic_artist2.png'),
    title: 'TJ Jackson',
  },
  {
    id: '3',
    image: require('../../../assets/images/ic_artist3.png'),
    title: 'Ed sheeran',
  },
  {
    id: '4',
    image: require('../../../assets/images/ic_artist4.png'),
    title: 'Eminem',
  },
];
const UserImageList = [
  {
    id: '1',
    image: require('../../../assets/images/card_clear.png'),
  },
  {
    id: '2',
    image: require('../../../assets/images/no_pathgirl1.png'),
  },
  {
    id: '3',
    image: require('../../../assets/images/card_clear.png'),
  },
];
const AddPassUser = () => {
  return (
    <View style={profileStyle.addUserStyle}>
      <View style={profileStyle.passUser}>
        <View
          style={{
            height: 61,
            width: 61,
            borderRadius: 30.5,
            backgroundColor: '#cc0166',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: wp('20%'),
          }}>
          <Image
            resizeMode={'contain'}
            style={profileStyle.passImage}
            source={require('../../../assets/images/ic_delete.png')}
          />
        </View>
      </View>
      <View style={profileStyle.addUser}>
        <View
          style={{
            height: 61,
            width: 61,
            borderRadius: 30.5,
            backgroundColor: '#1ed760',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: wp('20%'),
          }}>
          <Image
            resizeMode={'contain'}
            style={profileStyle.addImage}
            source={require('../../../assets/images/check_mark_sign.png')}
          />
        </View>
      </View>
    </View>
  );
};
const UserImages = () => {
  return (
    <View style={profileStyle.musicListContainerStyle}>
      <Text style={profileStyle.userPhotoViewStyle}>Photos </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 50}}
        data={UserImageList}
        renderItem={renderUserImageItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};
const UserMusicList = () => {
  return (
    <View style={profileStyle.musicListContainerStyle}>
      <Text style={profileStyle.songTextStyle}>Artist</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 70}}
        data={SongList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};
const renderItem = ({item}) => <Item image={item.image} title={item.title} />;
const Item = ({image, title}) => (
  <View style={{flexDirection: 'column', margin: 10}}>
    <Image style={{height: 80, width: 80}} source={image} />
    <Text style={{textAlign: 'center', fontSize: 10, marginTop: 5}}>
      {title}
    </Text>
  </View>
);
const renderUserImageItem = ({item}) => <UserImageItem image={item.image} />;
const UserImageItem = ({image}) => (
  <View>
    <Image
      style={{height: 233, width: 184, marginHorizontal: 10}}
      source={image}
    />
  </View>
);

const UserAbout = () => {
  return (
    <View style={profileStyle.detailContainerStyle}>
      <Text style={profileStyle.aboutUserStyle}>About Me</Text>
      <Text style={profileStyle.aboutUserDetail}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et
      </Text>
    </View>
  );
};
const UserMoreDetail = () => {
  return (
    <View style={profileStyle.userBioContainerStyle}>
      <Text style={profileStyle.moreDetailTextStyle}>More Details</Text>
      <LinearGradient colors={['#cc0166', '#cc0166', '#cc0166']}>
        <View style={profileStyle.userBio}>
          <Image
            source={require('../../../assets/images/bio_pointer.png')}
            style={profileStyle.bioPointerStyle}
          />
          <Text style={profileStyle.userBioKey}>Ethnicity</Text>
          <Text style={profileStyle.userBioValue}>English</Text>
        </View>

        <View style={profileStyle.userBio}>
          <Image
            source={require('../../../assets/images/bio_pointer.png')}
            style={profileStyle.bioPointerStyle}
          />
          <Text style={profileStyle.userBioKey}>Height (feet and inches)</Text>
          <Text style={profileStyle.userBioValue}>5'7''</Text>
        </View>

        <View style={profileStyle.userBio}>
          <Image
            source={require('../../../assets/images/bio_pointer.png')}
            style={profileStyle.bioPointerStyle}
          />
          <Text style={profileStyle.userBioKey}>Body type</Text>
          <Text style={profileStyle.userBioValue}>Athletic</Text>
        </View>

        <View style={profileStyle.userBio}>
          <Image
            source={require('../../../assets/images/bio_pointer.png')}
            style={profileStyle.bioPointerStyle}
          />
          <Text style={profileStyle.userBioKey}>Hair color</Text>
          <Text style={profileStyle.userBioValue}>Brown</Text>
        </View>

        <View style={profileStyle.userBio}>
          <Image
            source={require('../../../assets/images/bio_pointer.png')}
            style={profileStyle.bioPointerStyle}
          />
          <Text style={profileStyle.userBioKey}>Eye color</Text>
          <Text style={profileStyle.userBioValue}>Black</Text>
        </View>

        <View style={profileStyle.userBio}>
          <Image
            source={require('../../../assets/images/bio_pointer.png')}
            style={profileStyle.bioPointerStyle}
          />
          <Text style={profileStyle.userBioKey}>Education</Text>
          <Text style={profileStyle.userBioValue}>BCA</Text>
        </View>

        <View style={profileStyle.userBio}>
          <Image
            source={require('../../../assets/images/bio_pointer.png')}
            style={profileStyle.bioPointerStyle}
          />
          <Text style={profileStyle.userBioKey}>Status</Text>
          <Text style={profileStyle.userBioValue}>Single</Text>
        </View>
        <View style={profileStyle.userBio}>
          <Image
            source={require('../../../assets/images/bio_pointer.png')}
            style={profileStyle.bioPointerStyle}
          />
          <Text style={profileStyle.userBioKey}>Languages</Text>
          <Text style={profileStyle.userBioValue}>English, Hindi</Text>
        </View>
        <View style={profileStyle.userBio}>
          <Image
            source={require('../../../assets/images/bio_pointer.png')}
            style={profileStyle.bioPointerStyle}
          />
          <Text style={profileStyle.userBioKey}>Smoking</Text>
          <Text style={profileStyle.userBioValue}>No</Text>
        </View>
      </LinearGradient>
    </View>
  );
};
const UserImage = ({navigation}) => {
  return (
    <View style={profileStyle.body}>
      <View style={profileStyle.userProfileView}>
        <ImageBackground
          source={require('../../../assets/images/ic_girl_profile.png')}
          style={profileStyle.image}
          resizeMode="contain">
          <Image
            style={profileStyle.imageOverLay}
            resizeMode="stretch"
            source={require('../../../assets/images/image_overlay.png')}
          />
        </ImageBackground>
        <View style={profileStyle.userDetailStyle}>
          <Text style={profileStyle.userNameStyle}>Micheal Jones</Text>
          <Text style={profileStyle.userAgeStyle}>Age 28</Text>
        </View>
        <TouchableOpacity style={profileStyle.editImageTouch}>
          <View
            style={{
              height: 46,
              width: 46,
              borderRadius: 23,
              backgroundColor: '#cc0166',
              //left: 90,
              //top: hp('2%'),
              right: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'white',
              borderWidth: 2,
            }}>
            <Image
              resizeMode="contain"
              style={profileStyle.chatImageStyle}
              source={require('../../../assets/images/ic_chat.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Header = ({navigation}) => {
  return (
    <View style={profileStyle.body}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={profileStyle.backArrow}
          resizeMode="contain"
          source={require('../../../assets/images/ic_arrow_back.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default OtherUserProfile;
