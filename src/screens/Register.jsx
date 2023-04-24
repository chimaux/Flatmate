import { StyleSheet, Text, View, SafeAreaView, Pressable, TextInput, TouchableOpacity  } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { screenWidth } from './Welcome';
import CountryPicker from 'react-native-country-picker-modal'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Register = ({navigation}) => {
  

const[callingCode,setCallingCode]=useState("+234")
const[countryCode, setCountryCode]=useState("NG")
const[phoneNumberVal, setPhoneNumberVal]=useState("")
const[focus, setFocus]=useState(false)

  return (
    
   <KeyboardAwareScrollView
   contentContainerStyle={{
    flex:1
   }}
   >
     <View style={styles.container}>
          <SafeAreaView/>
      <Pressable style={styles.back}
      onPress={()=> navigation.goBack()}
      >
      <Ionicons name="arrow-back-outline" size={30} color="#231F20" />
      </Pressable>
      <Text style={styles.text1}>Register With</Text>
      <Text style={styles.text1}>Email & Password</Text>
      <Text style={styles.text2}>Please enter your email correctly.</Text>

  
      <Text
      style={{
        fontSize:18,
        marginTop:20,
        marginBottom:5,
      }}
      >Username</Text>
<View

>
<TextInput
style={styles.phoneNoInput2}
placeholder='user name'
placeholderTextColor={"#848484"}

/>
</View>
      <Text
      style={{
        fontSize:18,
        marginTop:20,
        marginBottom:5,
      }}
      >Email</Text>
<View

>
<TextInput
style={styles.phoneNoInput2}
placeholder='email address'
placeholderTextColor={"#848484"}
keyboardType='email-address'
/>
</View>
      <Text
      style={{
        fontSize:18,
        marginTop:20,
        marginBottom:5,
      }}
      >Password</Text>
<View

>
<TextInput
style={styles.phoneNoInput2}
placeholder='Password'
placeholderTextColor={"#848484"}
secureTextEntry
/>
</View>

<View
style={{
  position:"absolute",
  bottom:80,
  width:screenWidth,
  paddingHorizontal:30
}}
>

<TouchableOpacity style={styles.btn}

>

<Text style={styles.btnText}>
Register
</Text>
</TouchableOpacity>

</View>
    </View>
   </KeyboardAwareScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    flex:1,
   paddingHorizontal:30,
   paddingVertical:50,
   
  },
  back:{
    width:"15%",
    paddingVertical:5
  },
  text1:{
color:"#000000",
fontSize:25,
fontWeight:500
  }
  ,
  text2:{
color:"#837B7B",
fontSize:18,
marginTop:10
  },
  phoneNoInput:{
    borderWidth:1,
    borderColor:"#ebe1fe",
    borderRadius:10,
    marginLeft:10,
    paddingHorizontal:10,
    width:"70%",
    fontSize:18,
  },
  phoneNoInput2:{
    borderWidth:1,
    borderColor:"#ebe1fe",
    borderRadius:10,
     paddingVertical:15.5,
     paddingHorizontal:10,
     fontSize:18,

  },
  btn:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#9D69FC",
    borderRadius:20,
    flexDirection:"row",
    paddingVertical:15.5,
    marginVertical:8,

  },
  btnText:{
    color:"#ffffff",
    fontWeight:500,
    fontSize:18,
   
  },
})