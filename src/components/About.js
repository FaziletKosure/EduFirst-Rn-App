import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  ImageBackground,
} from 'react-native';
import Navbar from './Navbar';

const About = props => {
  return (
    <View style={{flex: 1}}>
      <Navbar navigation={props.navigation} />
      <ScrollView>
        <ImageBackground
          source={require('../assets/background1.jpg')}
          style={styles.MainContainer}>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.text}>
            Good Intentions Foundation was established in 2020 by Pranav
            Giridhar. GIF was founded withthe intent to help others and paying
            back to the community. We want to leave a positive mark onthis earth
            by focusing and solving problems based off education, environment
            and other socialissues. At GIF, we strive to follow our founder’s
            principle of putting honesty, transparency andleadership above all.
            Donations will be used to grow the non-profit and build schools in
            ruralareas around the world.
          </Text>
          <Text style={styles.text}>
            Get in touch with us at: pranav@good-intentions.org Visit our
            website at=>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL('https://www.good-intentions.org/home')
              }>
              https://www.good-intentions.org/home
            </Text>
          </Text>
          <Text style={styles.text}>© Good Intentions Foundation.</Text>
          <Text style={styles.title}>What is EduFirst?</Text>
          <Text style={styles.text}>
            <Text style={styles.span}>EduFirst</Text> is an initiative by
            <Text style={styles.span}> Good Intentions Foundation</Text> to help
            every student's learning experience gowell at no cost. We take
            students experiencing problems at school and connect them with a
            tutor qualifiedenough to solve their problems
          </Text>
          <Text style={styles.title}>How can I become a tutor?</Text>
          <Text style={styles.text}>
            Interested in becoming a EduFirst certified tutor? Click{' '}
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://docs.google.com/forms/d/e/1FAIpQLSf28eDZiVVFlTXsqlWjQeXimAhtSo_ClopUV3csxk4Id9S5Qg/viewform',
                )
              }>
              here
            </Text>
            . and fill out the form given. Answer the required questions and our
            certification team will reach out to you and provide you with a
            short test. After you've answered the test and received a passable
            score, our team will present you a certificate allowing you to tutor
            EduFirst students. To become an EduFirst tutor, you must be in high
            school or university, have access to a device and internet and
            accept the EduFirst pledge. What's in it for me? Check out the tutor
            incentives page{' '}
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://www.good-intentions.org/edufirst-certified-tutor-incentives',
                )
              }>
              here
            </Text>
            .
          </Text>
          <Text style={styles.title}>How can I connect with a tutor?</Text>
          <Text style={styles.text}>
            It’s simple! Just use our EduFirst app and be connected with a tutor
            in minutes!
          </Text>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  },
  span: {
    fontWeight: 'bold',
  },
});
