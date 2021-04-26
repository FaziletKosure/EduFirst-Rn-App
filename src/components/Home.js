import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Navbar from './Navbar';

const Home = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navbar navigation={props.navigation} />

      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.MainContainer}>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('TutorsPage')}>
          <Text style={styles.TextStyle}>TUTORS </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('AboutPage')}>
          <Text style={styles.TextStyle}>ABOUT US</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#000',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#fff',
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1.3,
  },
});
