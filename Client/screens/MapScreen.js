
  import { FaLocationArrow, FaTimes } from 'react-icons/fa'
  import {View,Text,TouchableOpacity,Alert, ActivityIndicator} from 'react-native'

  import React, { useEffect, useRef, useState } from 'react';
  import MapView, {Marker} from 'react-native-maps';
  import MapViewDirections from 'react-native-maps-directions'
  import dacia from '../assets/dacia.png'
  import { ContextCoordinate, LoginContext } from '../App';
  import { useContext } from 'react';
  import { ChosenVehicleContext } from '../App';
  import {getDistance} from 'geolib';
  
  function MapScreen({navigation}){
    const contextcoordonate = useContext(ContextCoordinate);
    const chosenVehicleContext = useContext(ChosenVehicleContext);
    const loginContext = useContext(LoginContext);
    const [isloading,setisloading] = useState(true);

    let distance =   getDistance(
      {latitude: contextcoordonate.coordinate.latitude, longitude: contextcoordonate.coordinate.longitude},
      {latitude:45.925815, longitude:20.890289 }
  ); 

     
    function addRequest() {
    fetch("http://10.0.2.2:8000/request/add",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            passengerPicture: loginContext.loginDetails.pictureUrl,
            passengerUsername: loginContext.loginDetails.username,
            requestCategory: chosenVehicleContext.ChosenVehicle.category,
            distance: distance
        })
      })
      .then(res=>res.text())
      .then( data=>{
        data = JSON.parse(data);
        
        console.log(data.status);
      }).catch(error =>console.log(error))
  }

    useEffect (() => {
      addRequest();
      console.log("I'm appearing instantly");
      setTimeout(() => {
        setisloading(false);
        fetch("http://10.0.2.2:8000/request/getWithCar?username="+loginContext.loginDetails.username)
        .then(res => {if(!res.ok) throw new Error(); else res.json()}) //{if(res.json().status == 404) navigation.navigate('ClientSearch')})
        .then(data => console.log(data))
        .catch(error => {navigation.navigate('ClientSearch');console.log('me gusta')})
      setTimeout(() => {
        console.log('I am appearing...', 'After 5 seconds!');
        setstate ( {
          pickupCords: {
            latitude:45.948944,
            longitude: 20.731437,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
      },
      droplocationCords: {
            latitude: contextcoordonate.coordinate.latitude,
            longitude: contextcoordonate.coordinate.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
       }
        })

        setTimeout(() => {
          console.log('I am appearing...', 'After 5 seconds!');
          setstate ( {
            pickupCords: {
              latitude:45.957895,
              longitude: 20.746501,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
        },
        droplocationCords: {
              latitude: contextcoordonate.coordinate.latitude,
              longitude: contextcoordonate.coordinate.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
         }
          })

          setTimeout(() => {
            console.log('I am appearing...', 'After 5 seconds!');
            setstate ( {
              pickupCords: {
                latitude:contextcoordonate.coordinate.latitude,
                longitude: contextcoordonate.coordinate.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
          },
          droplocationCords: {
                latitude: contextcoordonate.coordinate.latitude,
                longitude: contextcoordonate.coordinate.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
           }
            })
            setTimeout(() => {
              console.log('I am appearing...', 'After 5 seconds!');
              setstate ( {
                pickupCords: {
                  latitude:45.966059,
                  longitude:  20.823962,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
            },
            droplocationCords: {
                  latitude: 45.925815,
                  longitude:  20.890289,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
             }
              })

              setTimeout(() => {
                console.log('I am appearing...', 'After 5 seconds!');
                setstate ( {
                  pickupCords: {
                    latitude:45.943237,
                    longitude:  20.856525,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
              },
              droplocationCords: {
                    latitude: 45.925815,
                    longitude:  20.890289,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
               }
                })
                setTimeout(() => {
                  console.log('I am appearing...', 'After 5 seconds!');
                  setstate ( {
                    pickupCords: {
                      latitude: 45.925815,
                      longitude:  20.890289,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                },
                droplocationCords: {
                      latitude: 45.925815,
                      longitude:  20.890289,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                 }
                  })
                  setTimeout(() => {
                       navigation.navigate('ClientSearch')
                       //remove request 
                       fetch('http://10.0.2.2:8000/request/delete?id=' + loginContext.loginDetails.username, { method: 'DELETE' })
                      .then(() => console.log('deleted')).catch((error)=>console.log(error))
                  }, 2000);
                }, 5000);
              }, 5000);
            }, 5000);
          }, 5000);
        }, 5000);

       
      }, 5000);
    }, 15000);
      console.log(contextcoordonate.coordinate);

    
    },[])
    const [state,setstate] =useState( {
        pickupCords: {
              latitude:45.933874,
              longitude: 20.704014,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
        },
        droplocationCords: {
              latitude: contextcoordonate.coordinate.latitude,
              longitude: contextcoordonate.coordinate.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
         }

    });
  
    return (
      
      <View style={styles.container}>
        {isloading && <View style={{flex:1, justifyContent:'center', allignItems:'center'}}>
          <ActivityIndicator size = 'large'></ActivityIndicator>
          <Text style={{textAlign:'center'}}>Waiting for driver to respond</Text>
        </View>}
        {!isloading && 
          <MapView
           style={styles.map}
           initialRegion={state.pickupCords}
         >
         <Marker
           coordinate={state.pickupCords}
           image = {chosenVehicleContext.ChosenVehicle.pictureUrl}
         />
         <Marker
           coordinate={state.droplocationCords}
         />
         <MapViewDirections
           origin={state.pickupCords}
           destination={state.droplocationCords}
           apikey = {`AIzaSyAIhY8_TW5tlV1-TH6aFmhLtqWETzYOIww`}
           strokeWidth={5}
           strokeColor="red"
         />
         </MapView>
      } 
      </View>
        
      
    )
  }

  const styles=({
    container:{
      flex:1
    },
    map:{
      flex:1
    },
    bottomCard: {
        backgroundColor: 'white',
        width: '100%',
        padding: 30,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24
    },
    inputStyle: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        allignItems: 'center',
        height: 48,
        justifyContent: 'center',
        marginTop: 16
    }
  });
  
  export default MapScreen;
  