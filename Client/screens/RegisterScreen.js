import { KeyboardAvoidingView,ImageBackground, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


function RegisterScreen  ({navigation}) {
    
    const [email, setEmail]  = useState('')
    const [username, setusername]  = useState('')
    const [password, setPassword]  = useState('')
    
    const handleRegister= () =>{
    
       
      fetch("http://localhost:8000/register",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            username,
            email,
            password
        })
      })
      .then(res=>res.json())
      .then( data=>{
        console.log(data);
      }).catch(error =>console.log(error))
      
    }

  return (
   <KeyboardAvoidingView
     style={styles.container}
     behavior="padding"
     >
     <ImageBackground source={{uri:"https://cdn2.vectorstock.com/i/1000x1000/30/16/planning-summer-vacations-travel-by-car-vector-18923016.jpg"}} resizeMode="stretch" style={[styles.image,styles.container]}>
    <View style = {styles.inputContainer}>
        <TextInput
          placeholder='Username'
          value = {username}
          onChangeText={text => setusername(text)}
        style = {styles.input}
        />
        <TextInput
          placeholder='Email'
          value = {email}
          onChangeText={text => setEmail(text)}
        style = {styles.input}
        />
         <TextInput
          placeholder='Password'
          value = {password}
          onChangeText={text => setPassword(text)}
        style = {styles.input}
        secureTextEntry
        />
    </View>

    <View style = {styles.buttonContainer}>
        <TouchableOpacity
           onPress={handleRegister}
           style= {styles.button}
        >
          <Text style = {styles.buttonText}>Register</Text>  
        </TouchableOpacity>
    </View>
    </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

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
      height:700,
    }
})