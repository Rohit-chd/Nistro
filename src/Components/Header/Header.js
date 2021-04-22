import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import headerStyle from './HeaderStyle';

const Header = ({navigation, isShow}) => {
  return (
    <View style={headerStyle.container}>
      <View style={headerStyle.backArrowContainer}>
        {isShow ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={headerStyle.backArrow}
              resizeMode="contain"
              source={require('../../../assets/images/ic_arrow_back.png')}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={headerStyle.body}>
        <Image
          style={headerStyle.logo}
          resizeMode="contain"
          source={require('../../../assets/images/ic_auth_header.png')}
        />
      </View>
    </View>
  );
};
export default Header;
