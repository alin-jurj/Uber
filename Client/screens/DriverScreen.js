import React from 'react'
import { Text, ImageBackground, Image, View, FlatList, TouchableOpacity, StyleSheet, Pressable  } from 'react-native'

function DriverScreen() {

    const DATA = [
        {
          id: 1,
          pictureUrl: 'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=',
          initials: 'AJ',
        },
        {
          id: 2,
          pictureUrl: '',
          initials: 'AJ',
        },
        {
          id: 3,
          pictureUrl: '',
          initials: 'KZ'
        },
        // {
        //   id: 4,
        //   pictureUrl: '',
        //   initials: 'KZ'
        // },
        // {
        //   id: 5,
        //   pictureUrl: '',
        //   initials: 'KZ'
        // }
      ];

    const Client = ({ item }) => (
        <Pressable style={styles.driver} onLongPress={() => console.log("pressed view!")}>
          {item.pictureUrl != '' &&
            <Image source={{uri: item.pictureUrl}} style={{height: 85, width: 85, borderRadius: 50, borderWidth: 1, borderColor: '#0D0B84'}} ></Image>
          }
          {
            item.pictureUrl == '' &&
            <View style={{height: 85, width: 85, borderRadius: 50, borderWidth: 1, backgroundColor: '#0D0B84', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 36, color: 'white'}}>{item.initials}</Text>
            </View>
          }
          
          <View style={styles.driverDetails}>
            <Text style={styles.description}>From: 11th street</Text>
            <Text style={styles.description}>To: 13th street</Text>
            <Text style={styles.description}>Distance: 2.4km</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => console.log("pressed button!")}><Text style={{color: 'white', fontSize: 12}}>Choose</Text></TouchableOpacity>
        </Pressable>
      );

  return (
    <View style={styles.container}>
        <ImageBackground source={{uri: 'https://cdn2.vectorstock.com/i/1000x1000/30/16/planning-summer-vacations-travel-by-car-vector-18923016.jpg'}} resizeMode="stretch" style={styles.image}>
              <View style={{height: DATA.length * 104, maxHeight: 420, justifyContent: 'center', alignItems: 'center'}}>
              <FlatList data={DATA}
                renderItem={({item}) => <Client item={item} />}
                keyExtractor={item => item.id} />
              </View>
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
      justifyContent: 'flex-end',
      paddingBottom: 100
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
      marginLeft: -40
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


export default DriverScreen