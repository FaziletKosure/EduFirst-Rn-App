import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

const SearchBar = props => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          onChangeText={value => props.onSearch(value)}
          placeholderTextColor="#fff"
          placeholder="Search for a location, tutor, or subject"
          style={styles.text}
        />
        <Text style={styles.glass}>🔎</Text>
      </View>
      {/* <Text style={styles.glass}>🔎</Text> */}
    </View>
  );
};

export {SearchBar};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginTop: 15,
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
    borderRadius: 35,
    borderWidth: 1,
    elevation: 5,

    // borderRadius: 2,
    // borderColor: '#ddd',
    // borderBottomWidth: 0,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 1,
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop: 10,
    // borderTopColor: '#badc58',
    // borderBottomColor: '#badc58',
    // borderTopWidth: 2,
    // borderBottomWidth: 2,
  },
  text: {
    // fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginLeft: 20,
  },
  glass: {
    position: 'absolute',
    left: 8,
    top: 10,
    fontSize: 25,
    margin: 5,
  },
});
