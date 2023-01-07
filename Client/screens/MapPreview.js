
  import { FaLocationArrow, FaTimes } from 'react-icons/fa'
  import {View,Text,TouchableOpacity,Alert} from 'react-native'

  import React, { useEffect, useRef, useState } from 'react';
  import MapView, {Marker} from 'react-native-maps';
  import MapViewDirections from 'react-native-maps-directions'
  import start from '../assets/start.png'
  import destination from '../assets/destination.png'
  import { ContextCoordinate } from '../App';
  import { useContext } from 'react';
  import {getDistance} from 'geolib';
  import { ChosenVehicleContext } from '../App';

  function MapPreview({navigation}){
    const contextcoordonate = useContext(ContextCoordinate);
    const chosenVehicleContext = useContext(ChosenVehicleContext);
   let distance =   getDistance(
    {latitude: contextcoordonate.coordinate.latitude, longitude: contextcoordonate.coordinate.longitude},
    {latitude:45.925815, longitude:20.890289 }
); 
    const [state,setstate] =useState( {
        pickupCords: {
            latitude: contextcoordonate.coordinate.latitude,
            longitude: contextcoordonate.coordinate.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        droplocationCords: {
              latitude:45.925815,
              longitude:20.890289,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
         }

    });
  
    return (
      
      <View style={styles.container}>
          
        <View style={{paddingTop:50, display:'flex', justifyContent:'center',alignItems:'center',backgroundColor:'#b7e4c7'}}>
            <Text style={{color:'#081c15', fontWeight:'bold'}}>DISTANCE: {distance * 0.001} KM</Text>
            <Text style={{color:'#081c15', fontWeight:'bold'}}> PRICE/KM: {chosenVehicleContext.ChosenVehicle.price}</Text>
            <Text style={{color:'#081c15', fontWeight:'bold'}}> PRICE: {distance * 0.001 * chosenVehicleContext.ChosenVehicle.price} RON </Text>
        </View>
        <MapView
           style={styles.map}
           initialRegion={state.pickupCords}
         >
         <Marker
           coordinate={state.pickupCords}
           image = {start}
         />
         <Marker
           coordinate={state.droplocationCords}
           image = {destination}
         />
         <MapViewDirections
           origin={state.pickupCords}
           destination={state.droplocationCords}
           apikey = {`AIzaSyAIhY8_TW5tlV1-TH6aFmhLtqWETzYOIww`}
           strokeWidth={5}
           strokeColor="red"
         />
         
         </MapView>
         
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
  
  export default MapPreview;
  