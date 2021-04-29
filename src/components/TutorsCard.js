import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

const TutorsCard = ({componentItem}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: componentItem.img}} style={styles.img} />
        <Text style={styles.title}>{componentItem.userName}</Text>
        <Text style={styles.description}>{componentItem.description}</Text>
      </View>
    </ScrollView>
  );
};

export default TutorsCard;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },

  img: {
    height: Dimensions.get('window').height * 0.3,
    borderRadius: 10,
  },
  big_heart: {
    position: 'absolute',
    tintColor: '#e0e0e0',
    top: '34%',
    left: '34%',
    height: 100,
    width: 100,
    // transform: [{translateX: -50}, {translateY: -50}],
  },

  big_heart_anime: {
    position: 'absolute',
    tintColor: 'red',
    top: '25%',
    left: '25%',
    height: 180,
    width: 180,
    // transform: [{translateX: -80}, {translateY: -80}],
  },

  top_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
  },
  small_heart: {
    fontSize: 19,
  },
  description: {
    textAlign: 'justify',
    fontSize: 16,
  },
});
