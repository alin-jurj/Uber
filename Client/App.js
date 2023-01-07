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
import AddCarScreen from './screens/AddCarScreen';
import BackgroundScreen from './screens/BackgroundScreen';
import MapPreview from './screens/MapPreview';

const Stack = createNativeStackNavigator();
export const LoginContext = React.createContext();
export const BackgroundContext = React.createContext();
export const ContextCoordinate = React.createContext();
export const ChosenVehicleContext = React.createContext();
export default function App() {
  const [loginDetails,setloginDetails] = useState('');
  const [background, setBackground] = useState('https://cdn2.vectorstock.com/i/1000x1000/30/16/planning-summer-vacations-travel-by-car-vector-18923016.jpg');
  const [coordinate, setcoordinate] = useState();
  const [ChosenVehicle, setChosenVehicle] = useState();
  return (
   
    <NavigationContainer>
    <ChosenVehicleContext.Provider value = {{ChosenVehicle, setChosenVehicle}}>
    <ContextCoordinate.Provider value={{coordinate,setcoordinate}}>
    <LoginContext.Provider value={{loginDetails,setloginDetails}}>
    <BackgroundContext.Provider value={{background, setBackground}}>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen options = {{headerShown: false}} name="Driver" component={DriverScreen} />
      <Stack.Screen options = {{headerShown: false}} name="ClientSearch" component={ClientSearchScreen} />
      <Stack.Screen options = {{headerShown: false}} name="Settings" component={SettingsScreen}/>
      <Stack.Screen options = {{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen options = {{headerShown:false}} name="Register" component={RegisterScreen} />
      <Stack.Screen options = {{headerShown: false}} name="Map" component={MapScreen} />
      <Stack.Screen options = {{headerShown: false}} name="MapPreview" component={MapPreview} />
      <Stack.Screen options = {{headerShown: false}} name="Account" component={AccountScreen} />
      <Stack.Screen options = {{headerShown: false}} name="NotImplemented" component={NotYetImplemented}/>
      <Stack.Screen options = {{headerShown: false}} name="AddCarScreen" component={AddCarScreen}/>
      <Stack.Screen options = {{headerShown: false}} name="BackgroundScreen" component={BackgroundScreen}/>
    </Stack.Navigator>
    {loginDetails!='' && <NavBar />} 
    </BackgroundContext.Provider>
    </LoginContext.Provider>
    </ContextCoordinate.Provider>
    </ChosenVehicleContext.Provider>
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
