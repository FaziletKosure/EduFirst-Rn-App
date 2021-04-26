import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Home from './components/Home';
import About from './components/About';
import Tutors from './components/Tutors';
import TermsAndConditions from './components/TermsAndConditions';
// import HangMan from './pages/HangMan';
// import CafePage from './pages/CafePage';
// import CafeList from './pages/CafeList';
// import App from '../App';

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'TermsAndConditionsPage'}
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}>
        {/* <Stack.Screen name="ImageGalleryPage" component={ImageGallery} />
        <Stack.Screen name="WeatherPage" component={App} />
        <Stack.Screen name="WebPage" component={WebPape} /> */}
        <Stack.Screen name="TutorsPage" component={Tutors} />
        <Stack.Screen name="AboutPage" component={About} />

        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen
          name="TermsAndConditionsPage"
          component={TermsAndConditions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
