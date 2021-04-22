import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import policyStyle from './PolicyStyle';

const DiscoverScreen = ({route, navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Header navigation={navigation} route={route} />
        <ScrollView>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                lineHeight: 21,
                textAlign: 'left',
                fontWeight: 'bold',
              }}>
              Heading
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                lineHeight: 21,
                textAlign: 'left',
                marginTop: 10,
              }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet .{'\n'}
              {'\n'}Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
              {'\n'}
              {'\n'}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.{'\n'} {'\n'}Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et
              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Laccusam et justo duo dolores et ea
              rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum. Stet clita
              kasd
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const Header = ({route, navigation}) => {
  const {title} = route.params;
  return (
    <View style={policyStyle.container}>
      <View style={policyStyle.backArrowContainer}>
        <TouchableOpacity
          style={policyStyle.backArrowTouch}
          onPress={() => navigation.goBack()}>
          <Image
            style={policyStyle.backArrow}
            resizeMode="contain"
            source={require('../../../assets/images/ic_arrow_back.png')}
          />
        </TouchableOpacity>
        <View style={{flexGrow: 1, justifyContent: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              lineHeight: 25,
              letterSpacing: 1.6,
              textAlign: 'center',
              marginRight: 20,
            }}>
            {title}
          </Text>
        </View>
      </View>
      <View style={policyStyle.body} />
    </View>
  );
};

export default DiscoverScreen;
