import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const Navbar = ({navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('HomePage')}>
        <Image style={styles.image} source={require('../assets/logo.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>EduFirst</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: Dimensions.get('window').height * 0.06,
    borderRadius: 10,
  },
  header: {
    backgroundColor: 'black',
    padding: 10,
    // display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 50,
  },
});
