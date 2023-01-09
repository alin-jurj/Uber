import React, { useState } from 'react'
import { Text, ImageBackground, Image, View, FlatList, TouchableOpacity, StyleSheet, Pressable  } from 'react-native'
import { useContext, useEffect } from 'react';
import { BackgroundContext, LoginContext } from '../App';


function DriverScreen() {

  const backGroundContext = useContext(BackgroundContext);
  const logincontext = useContext(LoginContext);
  const [users, setUsers] = useState();

  const UpdateDriverRequest = () => {
    fetch("http://10.0.2.2:8000/request/update?id=" + users[0]._id + "&username=" + logincontext.loginDetails.username,{
          method: "PUT",
          headers: {
              'Content-Type': 'application/json'
          },
        })
        .then(res=>res.text())
        .then( data=>{
          console.log(data);
        }).catch(error =>console.error(error))
  }
  useEffect(() => {
    // fetch("http://10.0.2.2:8000/user/")
    // .then(res => res.json())
    // .then(data => {
    //  //console.log(data)
    //   setUsers(data)
    // }).catch(error => console.log(error))
    // console.log(logincontext.loginDetails)
    // fetch("http://10.0.2.2:8000/request/update?id=" + logincontext.loginDetails._id ,{
    //       method: "PUT",
    //       headers: {
    //           'Content-Type': 'application/json'
    //       },
    //     })
    //     .then(res=>res.text())
    //     .then( data=>{
    //       console.log(data);
    //     }).catch(error =>console.error(error))
    fetch("http://10.0.2.2:8000/request")
    .then(res => res.json())
    .then(data => {
     //console.log(data)
      setUsers(data)
    }).catch(error => console.log(error))
    console.log(logincontext.loginDetails)
  }, [])

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
          {typeof item.passengerPicture == 'string' &&
            <Image source={{uri: item.passengerPicture}} style={{height: 85, width: 85, borderRadius: 50, borderWidth: 1, borderColor: '#0D0B84'}} ></Image>
          }
          {
            typeof item.passengerPicture != 'string' &&
            <View style={{height: 85, width: 85, borderRadius: 50, borderWidth: 1, backgroundColor: '#0D0B84', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 36, color: 'white'}}>{item.passengerUsername.slice(0,2)}</Text>
            </View>
          }
          
          <View style={styles.driverDetails}>
            <Text style={styles.description}>From: Lovrin</Text>
            <Text style={styles.description}>To: Sandra</Text>
            <Text style={styles.description}>Distance: 2.4km</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => { UpdateDriverRequest();console.log("pressed button!")}}><Text style={{color: 'white', fontSize: 12}}>Choose</Text></TouchableOpacity>
        </Pressable>
      );

  return (
    <View style={styles.container}>
        <ImageBackground source={{uri: backGroundContext.background}} resizeMode="stretch" style={styles.image}>
              <View style={{height: DATA.length * 104, maxHeight: 420, justifyContent: 'center', alignItems: 'center'}}>
              <FlatList data={users}
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