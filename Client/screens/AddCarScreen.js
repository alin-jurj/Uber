import { KeyboardAvoidingView,ImageBackground, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from 'expo-image-picker';
import {LoginContext} from '../App'
import { SelectList } from 'react-native-dropdown-select-list'
import { BackgroundContext } from '../App';

const AddCarScreen = () => {

    const loginContext = useContext(LoginContext);
    const backGroundContext = useContext(BackgroundContext);

    const [name, setName] = useState('');
    const [username, setUsername] = useState(loginContext.loginDetails.username);
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [pictureUrl, setPhoto] = useState(null);

    const addCar = () =>{
        fetch("http://10.0.2.2:8000/car/add",{
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              name,
              username,
              category,
              price,
              pictureUrl
          })
        })
        .then(res=>res.text())
        .then( data=>{
          console.log(data);
        }).catch(error =>console.error(error))
        
      }

    const uploadImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(result);
      
          if (!result.canceled) {
            setPhoto(result.assets[0].uri);
          }
    }
    
  return (
   <KeyboardAvoidingView
     style={styles.container}
     behavior="padding"
     >
     <ImageBackground source={{uri: backGroundContext.background}} resizeMode="stretch" style={[styles.image,styles.container]}>
    <View style = {styles.inputContainer}>
        
        <TextInput
          placeholder='Name'
          value={name}
          onChangeText={text => setName(text)}
        style = {styles.input}
        />
        <TextInput
          placeholder='Price/Km'
          value={price}
          onChangeText={text => setPrice(text)}
          style = {styles.input}
        />
        <SelectList 
            boxStyles={styles.dropdown}
            inputStyles={{color: 'grey'}}
            dropdownItemStyles={{color: 'grey', borderColor: 'white'}}
            dropdownTextStyles={{color: 'grey'}}
            dropdownStyles={{backgroundColor: 'white', borderColor: 'white'}}
            data={[
                {key:'1', value:'Basic'},
                {key:'2', value:'Luxury'},
                {key:'3', value:'Helicopter'},
            ]}
            search={false}
            save="value"
            setSelected={val => {setCategory(val)}}
        />
        {pictureUrl != null &&
          <View style={{backgroundColor: 'white', borderRadius: 20, marginTop: 5, flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15}}>
            <Text style={{color: 'grey'}}>Chosen image: </Text>
            <Image source={{uri: pictureUrl}} style={{width: 100, height: 40, borderRadius: 5}}></Image>
          </View>
        }
        <TouchableOpacity style={styles.uploadButton} onPress={() => uploadImage()}>
            <Icon name="upload" color={'grey'} size={25}></Icon>
            <Text style={{marginLeft: 5, color: 'grey'}}>{pictureUrl == null ? 'Upload image...' : 'Choose another image...'}</Text>
        </TouchableOpacity>
    </View>

    <View style = {styles.buttonContainer}>
        <TouchableOpacity
           style= {styles.button}
           onPress={addCar}
        >
          <Text style = {styles.buttonText}>Add new car</Text>  
        </TouchableOpacity>
    </View>
    </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default AddCarScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    },
    dropdown:{
        backgroundColor: 'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
        borderColor: 'white',
        color: 'grey'
    },
    uploadButton: {
        backgroundColor: 'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline:{
      backgroundColor:'white',
      marginTop:5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText:{
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText:{
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      width:410,
      height:820,
    }
})
