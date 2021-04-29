import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import Navbar from './Navbar';
import {SearchBar} from './SearchBar';
import TutorsCard from './TutorsCard';
import sourceData from '../assets/sourceData.json';

const Tutors = props => {
  const renderedFunction = ({item}) => <TutorsCard componentItem={item} />;
  return (
    <View style={{flex: 1}}>
      <Navbar navigation={props.navigation} />

      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/background1.jpg')}
        style={styles.MainContainer}>
        <ScrollView>
          <Text style={styles.title}>TUTORS</Text>
          <SearchBar />
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={sourceData}
            renderItem={renderedFunction}
          />
        </ScrollView>
      </ImageBackground>
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
