
  import { FaLocationArrow, FaTimes } from 'react-icons/fa'
  import {View,Text,TouchableOpacity} from 'react-native'

  import React, { useRef, useState } from 'react';
  import MapView, {Marker} from 'react-native-maps';
  import MapViewDirections from 'react-native-maps-directions'

  
  function MapScreen(){

    const [state, setState] = useState({
        pickupCords: {
              latitude: 45.748871,
              longitude: 21.208679,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
        },
        droplocationCords: {
              latitude: 45.798871,
              longitude: 21.278679,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
         }

    })
    const { pickupCords, droplocationCords} = state
    return (
      <View style={styles.container}>
          <MapView
           style={styles.map}
           initialRegion={pickupCords}
         >
         <Marker
           coordinate={pickupCords}
         />
         <Marker
           coordinate={droplocationCords}
         />
         <MapViewDirections
           origin={pickupCords}
           destination={droplocationCords}
           apikey = {`AIzaSyAIhY8_TW5tlV1-TH6aFmhLtqWETzYOIww`}
           strokeWidth={7}
           strokeColor="red"
         />
         </MapView>
         <View style={styles.bottomCard}>
            <Text> Where are you going..?</Text>
            <TouchableOpacity
                style={styles.inputStyle}
            >
            <Text>Choose your location </Text>
            </TouchableOpacity>
         </View>
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
  