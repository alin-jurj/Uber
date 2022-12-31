import { StatusBar } from 'expo-status-bar';
import { Settings, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import LoginScreen from './screens/LoginScreen';
import ClientSearchScreen from './screens/ClientSearchScreen';
import NavBar from './Client/Components/NavBar';
import DriverScreen from './screens/DriverScreen';
import SettingsScreen from './screens/SettingsScreen';
import NotYetImplemented from './screens/NotYetImplemented';
import AccountScreen from './Client/screens/AccountScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options = {{headerShown: false}} name="Driver" component={DriverScreen} />
      <Stack.Screen options = {{headerShown: false}} name="ClientSearch" component={ClientSearchScreen} />
      <Stack.Screen options = {{headerShown: false}} name="Settings" component={SettingsScreen}/>
      <Stack.Screen options = {{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen options = {{headerShown: false}} name="Map" component={MapScreen} />
      <Stack.Screen options = {{headerShown: false}} name="Account" component={AccountScreen} />
      <Stack.Screen options = {{headerShown: false}} name="NotImplemented" component={NotYetImplemented}/>
    </Stack.Navigator>
    <NavBar />
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
