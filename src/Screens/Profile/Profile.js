import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import headerStyle from './ProfileHeaderStyle';
import profileStyle from './ProfileStyle';
import DatePicker from 'react-native-datepicker';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../store/modules/auth/actions';
import Strings from '@Strings';
var moment = require('moment');
import {completeProfileRequest} from '../../store/modules/auth/actions';
import {SubmitButton} from '../Auth/Styles';
import RNFetchBlob from 'rn-fetch-blob';
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import {widthPercentageToDP} from 'react-native-responsive-screen';


const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const nameInputRef = React.useRef(null);
  //const [dateOfBirth, setDateOfBirth] = useState('');
  const dobInputRef = React.useRef(null);
  const [bio, setBio] = useState('');
  const bioInputRef = React.useRef(null);
  const [ethnicity, setEthnicity] = useState('');
  const ethnicityInputRef = React.useRef(null);
  const [height, setHeight] = useState('');
  const heightInputRef = React.useRef(null);
  const [bodyType, setBodyType] = useState('');
  const bodyTypeInputRef = React.useRef(null);
  const [hairColor, setHairColor] = useState('');
  const hairColorInputRef = React.useRef(null);
  const [eyeColor, setEyeColor] = useState('');
  const eyeColorInputRef = React.useRef(null);
  const [education, setEducation] = useState('');
  const educationInputRef = React.useRef(null);

  const [status, setStatus] = useState('');
  const statusInputRef = React.useRef(null);

  const [language, setLanguage] = useState('');
  const languageInputRef = React.useRef(null);
  const [smoker, setSmoker] = useState('');
  const smokerInputRef = React.useRef(null);
  const [date, setDate] = useState(new Date());
  const [isDateSelect, setIsDateSelect] = useState(true);
  const [isMenSelect, setIsMenSelect] = useState('M');
  return (
    <View style={profileStyle.body}>
      <Header navigation={navigation} />
      <KeyboardAwareScrollView
        style={profileStyle.scrollViewKeyboard}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        resetScrollToCoords={{x: 0, y: 0}}>
        <View style={profileStyle.scrollviewContainer}>
          <View style={profileStyle.forgotLayout}>
            <Text style={profileStyle.textForgot}>Photos</Text>
            <View style={profileStyle.photoLayout}>
              <Image
                style={profileStyle.add}
                resizeMode="contain"
                source={require('../../../assets/images/ic_add.png')}
              />
            </View>
            <Text style={profileStyle.textLookingfor}>Looking for</Text>
            <View style={profileStyle.lookingforLayout}>
              <TouchableOpacity
                onPress={() => setIsDateSelect(true)}
                style={[
                  profileStyle.dateLayout,
                  {backgroundColor: isDateSelect ? '#cc0166' : 'white'},
                ]}>
                <Text
                  style={[
                    profileStyle.textMale,
                    {color: isDateSelect ? 'white' : '#cc0166'},
                  ]}>
                  Date
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsDateSelect(false)}
                style={[
                  profileStyle.friendshipLayout,
                  {backgroundColor: isDateSelect ? 'white' : '#cc0166'},
                ]}>
                <Text
                  style={[
                    profileStyle.textFemale,
                    {color: isDateSelect ? '#cc0166' : 'white'},
                  ]}>
                  Friendship
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={profileStyle.textLookingfor}>Interested in</Text>
            <View style={profileStyle.genderLayout}>
              <TouchableOpacity
                onPress={() => setIsMenSelect('M')}
                style={[
                  profileStyle.maleLayout,
                  {
                    backgroundColor: isMenSelect.toString().match('M')
                      ? '#cc0166'
                      : 'white',
                  },
                ]}>
                <Image
                  resizeMode="contain"
                  style={[
                    profileStyle.genderIcon,
                    {
                      tintColor: isMenSelect.toString().match('M')
                        ? 'white'
                        : '#cc0166',
                    },
                  ]}
                  source={require('../../../assets/images/mars.png')}
                />
                <Text
                  style={[
                    profileStyle.textMale,
                    {
                      color: isMenSelect.toString().match('M')
                        ? 'white'
                        : '#cc0166',
                    },
                  ]}>
                  Men
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsMenSelect('F')}
                style={[
                  profileStyle.femaleLayout,
                  {
                    backgroundColor: isMenSelect.toString().match('F')
                      ? '#cc0166'
                      : 'white',
                  },
                ]}>
                <Image
                  resizeMode="contain"
                  style={[
                    profileStyle.genderIcon,
                    {
                      tintColor: isMenSelect.toString().match('F')
                        ? 'white'
                        : '#cc0166',
                    },
                  ]}
                  source={require('../../../assets/images/femenine.png')}
                />
                <Text
                  style={[
                    profileStyle.textFemale,
                    {
                      color: isMenSelect.toString().match('F')
                        ? 'white'
                        : '#cc0166',
                    },
                  ]}>
                  Women
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsMenSelect('B')}
                style={[
                  profileStyle.bothLayout,
                  {
                    backgroundColor: isMenSelect.toString().match('B')
                      ? '#cc0166'
                      : 'white',
                  },
                ]}>
                <Image
                  resizeMode="contain"
                  style={[
                    profileStyle.genderIcon,
                    {
                      tintColor: isMenSelect.toString().match('B')
                        ? 'white'
                        : '#cc0166',
                    },
                  ]}
                  source={require('../../../assets/images/ic_gender_both.png')}
                />
                <Text
                  style={[
                    profileStyle.textFemale,
                    {
                      color: isMenSelect.toString().match('B')
                        ? 'white'
                        : '#cc0166',
                    },
                  ]}>
                  Both
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={profileStyle.bioMarginTop}>
            <Text style={profileStyle.textForgot}>Bio</Text>
            <View style={profileStyle.inputBioLayout}>
              <TextInput
                ref={bioInputRef}
                style={profileStyle.bioInput}
                onChangeText={(bio) => setBio(bio)}
                multiline={true}
                numberOfLines={5}
                returnKeyType={'next'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  ethnicityInputRef.current.focus();
                }}
                //blurOnSubmit={true}
              />
            </View>
          </View>
          <View style={profileStyle.enthMarginTop}>
            <Text style={profileStyle.textLookingfor}>Ethnicity</Text>
            <View style={profileStyle.inputLayout}>
              <TextInput
                ref={ethnicityInputRef}
                style={profileStyle.input}
                onChangeText={(ethnicity) => setEthnicity(ethnicity)}
                placeholder={'English'}
                returnKeyType={'next'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  heightInputRef.current.focus();
                }}
                //blurOnSubmit={true}
              />
            </View>
            <Text style={profileStyle.textLookingfor}>
              Height (feet and inches)
            </Text>
            <View style={profileStyle.inputLayout}>
              <TextInput
                ref={heightInputRef}
                style={profileStyle.input}
                onChangeText={(height) => setHeight(height)}
                placeholder={'Height (feet and inches)'}
                returnKeyType={'next'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  bodyTypeInputRef.current.focus();
                }}
                //blurOnSubmit={true}
              />
            </View>
            <Text style={profileStyle.textLookingfor}>Body type</Text>
            <View style={profileStyle.inputLayout}>
              <TextInput
                ref={bodyTypeInputRef}
                style={profileStyle.input}
                onChangeText={(bodyType) => setBodyType(bodyType)}
                placeholder={'Body type'}
                returnKeyType={'next'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  hairColorInputRef.current.focus();
                }}
                //blurOnSubmit={true}
              />
            </View>
            <Text style={profileStyle.textLookingfor}>Hair color</Text>
            <View style={profileStyle.inputLayout}>
              <TextInput
                ref={hairColorInputRef}
                style={profileStyle.input}
                onChangeText={(hairColor) => setHairColor(hairColor)}
                placeholder={'Hair color'}
                returnKeyType={'next'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  eyeColorInputRef.current.focus();
                }}
                //blurOnSubmit={true}
              />
            </View>
            <Text style={profileStyle.textLookingfor}>Eye color</Text>
            <View style={profileStyle.inputLayout}>
              <TextInput
                ref={eyeColorInputRef}
                style={profileStyle.input}
                onChangeText={(eyeColor) => setEyeColor(eyeColor)}
                placeholder={'Eye color'}
                returnKeyType={'next'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  educationInputRef.current.focus();
                }}
                //blurOnSubmit={true}
              />
            </View>
            <Text style={profileStyle.textLookingfor}>University</Text>

            <View style={profileStyle.inputLayout}>
              <TextInput
                ref={educationInputRef}
                style={profileStyle.input}
                onChangeText={(education) => setEducation(education)}
                placeholder={'University'}
                returnKeyType={'next'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  statusInputRef.current.focus();
                }}
                //blurOnSubmit={true}
              />
            </View>
            <Text style={profileStyle.textLookingfor}>Status</Text>
            <View style={profileStyle.inputLayout}>
              <TextInput
                ref={statusInputRef}
                style={profileStyle.input}
                onChangeText={(status) => setStatus(status)}
                placeholder={'Status'}
                returnKeyType={'next'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  languageInputRef.current.focus();
                }}
                //blurOnSubmit={true}
              />
            </View>
            <Text style={profileStyle.textLookingfor}>Languages</Text>
            <View style={profileStyle.inputLayout}>
              <TextInput
                ref={languageInputRef}
                style={profileStyle.input}
                onChangeText={(language) => setLanguage(language)}
                placeholder={'Languages'}
                returnKeyType={'next'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  smokerInputRef.current.focus();
                }}
                //blurOnSubmit={true}
              />
            </View>
            <Text style={profileStyle.textLookingfor}>Smoker status</Text>
            <View style={profileStyle.inputLayout}>
              <TextInput
                ref={smokerInputRef}
                style={profileStyle.input}
                onChangeText={(smoker) => setSmoker(smoker)}
                placeholder={'Smoker status'}
                returnKeyType={'done'}
                keyboardType={'default'}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                //blurOnSubmit={true}
              />
            </View>
            <TouchableOpacity
              style={profileStyle.loginButtonLayout}
              onPress={() => navigation.navigate('genratedProfile')}>
              <Text style={profileStyle.textLogin}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
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
            source={require('../../../assets/images/ic_arrow_back.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[profileStyle.globalFlex, {justifyContent: 'center'}]}
          onPress={() => navigation.navigate('genratedProfile')}>
          <Text style={headerStyle.skip}>SKIP</Text>
          {/* <Image
            style={headerStyle.done}
            resizeMode="contain"
            source={require('../../../assets/images/ic_check_circle.png')}
          /> */}
        </TouchableOpacity>
      </View>
      <View style={headerStyle.body}>
        <View style={profileStyle.profileBg}>
          <Image
            style={headerStyle.image}
            resizeMode="contain"
            source={require('../../../assets/images/ic_auth_header.png')}
          />
          <Image
            style={headerStyle.logo}
            resizeMode="stretch"
            source={require('../../../assets/images/ic_profile_bg.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
