import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import Navbar from './Navbar';
import {SearchBar} from './SearchBar';

const Tutors = props => {
  return (
    <View style={{flex: 1}}>
      <Navbar navigation={props.navigation} />
      <ScrollView>
        <ImageBackground
          source={require('../assets/background1.jpg')}
          style={styles.MainContainer}>
          <Text style={styles.title}>TUTORS</Text>
          <SearchBar />
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Tutors;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
    height: Dimensions.get('window').height,

    // backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 15,
    letterSpacing: 3,
  },
});
