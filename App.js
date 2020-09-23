import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  TextInput,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Index from './Screens/index'
import Login from './Screens/login'
import Signup from './Screens/sigup'

const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>  
      <Stack.Navigator screenOptions={{
         headerShown:false
      }} >

<Stack.Screen name="index" component={Index} />  
<Stack.Screen name="signup" component={Signup} />
    <Stack.Screen name="login" component={Login} /> 
  </Stack.Navigator>
      </NavigationContainer>
    )};
  

const styles = StyleSheet.create({
   


});

export default App;
