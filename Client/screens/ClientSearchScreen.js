import React, { useState, useEffect } from 'react'
import { Text, View, ImageBackground, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, Keyboard, Pressable } from 'react-native'
import { ContextCoordinate } from './MapScreen';
import { useContext } from 'react';
import { BackgroundContext } from '../App';

function ClientSearchScreen({navigation}) {
  const [text, changeText] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const contextcoordonate= useContext(ContextCoordinate);
  const backGroundContext = useContext(BackgroundContext);

 useEffect(() => {
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
      navigation.navigate('Map')
    }}>
      <Image source={{uri: item.pictureUrl}} style={{height: 80, width: 130, borderRadius: 10}} resizeMode='stretch'></Image>
      <View style={styles.driverDetails}>
        <Text style={styles.description}>Arrival: {item.time}</Text>
        <Text style={styles.description}>Category: {item.category}</Text>
        <Text style={styles.description}>Price: {item.price}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log("pressed button!")}><Text style={{color: 'white', fontSize: 12}}>Choose</Text></TouchableOpacity>
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
                <FlatList data={DATA}
                  renderItem={({item}) => <Driver item={item} />}
                  keyExtractor={item => item.id} />
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