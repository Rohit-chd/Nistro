import React,{useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import headerStyle from './GenratedProfileStyle';
import profileStyle from './ProfileStyle';
import authHandler from '../../config/AuthenticationHandler'
import {authorize} from 'react-native-app-auth';
import { useDispatch, useSelector } from 'react-redux';
import { generateUserProfileRequest } from '../../store/modules/auth/actions';
import Loader from '../../Components/Loader';
const GenratedProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.auth.loading);
  const [ name, setName ] = useState(userData.userName);
  let userPlaylist = [];
  async function onLogin() {
    try {
      const result = await authorize(authHandler);
      getUserPlaylist(result.accessToken)
    } catch (error) {
      
    } 
  }
  if(userData.isProfileGenerated){
   // isLoading(false)
    navigation.navigate('discoverRoute')
  }
  
  async function getUserPlaylist(accessToken){
    fetch('https://api.spotify.com/v1/me/playlists', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+accessToken, 
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      for(let i = 0; i < data.total; i++){
        getUserMusicList(data.items[i].id,accessToken)
      }
    })
    .catch((error) => {
    });
  }
  async function getUserMusicList(id,accessToken){
    fetch('https://api.spotify.com/v1/playlists/'+id+'/tracks', {
      method: 'GET', // or 'PUT'
      headers: {
        'Authorization': 'Bearer '+accessToken, 
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      for(let i = 0; i < data.total; i++){
        userPlaylist.push({
          name: data.items[i].track.album.name,
          artists: data.items[i].track.artists[0].name,
          ImageUrl: data.items[i].track.album.images[1].url
        });
      }
      generateUserProfile()
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  function generateUserProfile(){
    dispatch(generateUserProfileRequest(token,userData,userPlaylist));
  }
  
  return (
  
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
 
                <View style={profileStyle.body}>
        <Header navigation={navigation} />
        <Text style={profileStyle.textGenratedProfile}>{name}</Text>
        <Text style={profileStyle.textGenratedProfileAge}>Age 28</Text>
        <ImageBackground
          style={profileStyle.signInVivaLayout}
          resizeMode="cover"
          source={require('../../../assets/images/ic_gen_profile_b.png')}>
          <TouchableOpacity
            style={profileStyle.musicLayout}
            onPress={() => navigation.navigate('discoverRoute')}>
            <Image
              style={profileStyle.musicLogo}
              resizeMode="contain"
              source={require('../../../assets/images/ic_music.png')}
            />
            <Text style={profileStyle.textMusic}>Sign in via iTunes</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Loader
          loading={loading} />
        <TouchableOpacity
          style={profileStyle.spotifyLayout}
          onPress={() => onLogin()} >
          <Image
            style={profileStyle.spotifyLogo}
            resizeMode="contain"
            source={require('../../../assets/images/spotify_logo.png')}
          />
          <Text style={profileStyle.textSpotify}>Sign in via Spotify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Header = ({navigation}) => {
  return (
    <View style={headerStyle.container}>
      <View style={headerStyle.backArrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={headerStyle.backArrow}
            resizeMode="contain"
           // source={require('../../../assets/images/ic_arrow_back.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={profileStyle.globalFlex}
          onPress={() => navigation.navigate('discoverRoute')}>
          <Image
            style={headerStyle.done}
            resizeMode="contain"
          //  source={require('../../../assets/images/ic_check_circle.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={headerStyle.body}>
        <View style={profileStyle.genrateProfileBg}>
          <Image
            style={headerStyle.image}
            resizeMode="contain"
            source={require('../../../assets/images/ic_auth_header.png')}
          />
          <Image
            style={headerStyle.logo}
            resizeMode="stretch"
            source={require('../../../assets/images/ic_profile_logo.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default GenratedProfileScreen;
