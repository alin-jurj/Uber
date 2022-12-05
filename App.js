import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen options = {{headerShows: false}} name="Login" component={LoginScreen} /> */}
      <Stack.Screen options = {{headerShows: false}} name="Map" component={MapScreen} />
    </Stack.Navigator>
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
