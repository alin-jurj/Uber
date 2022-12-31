import { StatusBar } from 'expo-status-bar';
import { Settings, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import LoginScreen from './screens/LoginScreen';
import ClientSearchScreen from './screens/ClientSearchScreen';
import NavBar from './Components/NavBar'
import DriverScreen from './screens/DriverScreen';
import SettingsScreen from './screens/SettingsScreen';
import NotYetImplemented from './screens/NotYetImplemented';
import AccountScreen from './screens/AccountScreen';
import RegisterScreen from './screens/RegisterScreen';
import React from 'react';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
export const Context = React.createContext();
export default function App() {
  const [loginDetails,setloginDetails] = useState('');

  return (
   
    <NavigationContainer>
    <Context.Provider value={{loginDetails,setloginDetails}}>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen options = {{headerShown: false}} name="Driver" component={DriverScreen} />
      <Stack.Screen options = {{headerShown: false}} name="ClientSearch" component={ClientSearchScreen} />
      <Stack.Screen options = {{headerShown: false}} name="Settings" component={SettingsScreen}/>
      <Stack.Screen options = {{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen options = {{headerShown:false}} name="Register" component={RegisterScreen} />
      <Stack.Screen options = {{headerShown: false}} name="Map" component={MapScreen} />
      <Stack.Screen options = {{headerShown: false}} name="Account" component={AccountScreen} />
      <Stack.Screen options = {{headerShown: false}} name="NotImplemented" component={NotYetImplemented}/>
    </Stack.Navigator>
    {loginDetails!='' && <NavBar />} 
    
    </Context.Provider>
  </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
