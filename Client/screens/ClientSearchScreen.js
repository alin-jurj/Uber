import React, { useState, useEffect } from 'react'
import { Text, View, ImageBackground, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, Keyboard, Pressable } from 'react-native'

import { useContext } from 'react';
import { BackgroundContext } from '../App';
import * as Location from 'expo-location';
import { LoginContext } from '../App';
import { ContextCoordinate } from '../App';
import { ChosenVehicleContext } from '../App';



function ClientSearchScreen({navigation}) {
  const [text, changeText] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const contextcoordonate= useContext(ContextCoordinate);
  const logincontext = useContext(LoginContext)
  const [datta, setdatta] = useState('')
  const [location, setlocation] = useState('')
  const backGroundContext = useContext(BackgroundContext);
  const chosenVehicleContext = useContext(ChosenVehicleContext);
  const date = new Date();

  async function getLocation() {

    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      }

  let location = await Location.getCurrentPositionAsync({});

  console.log(location);
  
  setlocation(location);
  contextcoordonate.setcoordinate(location.coords);

  }
 useEffect(() => {

    getLocation();

    fetch("http://10.0.2.2:8000/car/")
    .then(res => res.json())
    .then(data => {
     //console.log(data)
      setdatta(data)
    }).catch(error => console.log(error))

   
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const DATA = [
    {
      id: 1,
      pictureUrl: 'https://www.renaultgroup.com/wp-content/uploads/2022/05/dacia-1300-1.jpeg',
      time: '11:59',
      category: 'Basic',
      price: '13 lei'
    },
    {
      id: 2,
      pictureUrl: 'https://i.ytimg.com/vi/tArC9-RHmU4/maxresdefault.jpg',
      time: '10:59',
      category: 'Luxury',
      price: '130 lei'
    },
    {
      id: 3,
      pictureUrl: 'https://i.ytimg.com/vi/tArC9-RHmU4/maxresdefault.jpg',
      time: '10:59',
      category: 'Luxury',
      price: '130 lei'
    }
  ];
  
  const Driver = ({ item }) => (
    
    <Pressable style={styles.driver} onLongPress={() => {
      console.log("Pressed view!");
      chosenVehicleContext.setChosenVehicle(item)
      navigation.navigate('MapPreview');
    }}>
      {console.log(item?.pictureUrl)}
      <Image source={{uri: item?.pictureUrl}} style={{height: 80, width: 130, borderRadius: 10}} resizeMode='stretch'></Image>
      <View style={styles.driverDetails}>
        
        <Text style={styles.description}>Arrival: {date.getHours()}:{date.getMinutes()+20}</Text>
        <Text style={styles.description}>Category: {item?.category}</Text>
        <Text style={styles.description}>Price: {item?.price} RON/KM</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}><Text style={{color: 'white', fontSize: 12}}>Choose</Text></TouchableOpacity>
    </Pressable>
  );

  return (
    <View style={styles.container}>
        <ImageBackground source={{uri: backGroundContext.background}} resizeMode="stretch" style={styles.image}>
            <TextInput style={styles.input} placeholder="Search for a destination..." placeholderTextColor={'grey'} onChangeText={changeText} value={text}></TextInput>
            {text != '' &&
              <View 
                style={{
                  height: 210,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: isKeyboardVisible ? 200 : 0
                }}>
                
                <FlatList data={datta}
                  renderItem={({item}) => <Driver item={item} />}
                  keyExtractor={item => item._id }/>
              </View>
            }
            
        </ImageBackground>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    image: {
      paddingTop: 150,
      width: 480,
      height: 820,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 100
    },
    input: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: '#0D0B84',
        backgroundColor: '#BBC7F2',
        borderRadius: 20,
        padding: 15,
        color: 'black',
    },
    listContainer: {
      height: 210,
      justifyContent: 'center',
      alignItems: 'center'
    },
    driver: {
      width: 375,
      height: 100,
      backgroundColor: '#7F89E1',
      borderWidth: 1,
      borderColor: '#0D0B84',
      flexDirection: 'row',
      padding: 9,
      marginVertical: 2,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    description: {
      color: 'white',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 18,
      borderRadius: 20,
      backgroundColor: '#01135d',
      marginRight: 10
  },
  });

export default ClientSearchScreen