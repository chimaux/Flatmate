import { StyleSheet, Text, View, SafeAreaView, Pressable, TextInput, TouchableOpacity  } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { screenWidth } from './Welcome';
import CountryPicker from 'react-native-country-picker-modal'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button1 from '../components/Button1';

const Login = ({navigation}) => {
  

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
      <Text style={styles.text1}>Login With</Text>
      <Text style={styles.text1}>Phone Number</Text>
      <Text style={styles.text2}>Please enter your phone number correctly.</Text>
      <Text
      style={{
        fontSize:18,
        marginTop:20,
        marginBottom:5,
      }}
      >Phone</Text>
      <View
      style={{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:10
      }}
      >

<View style={{
  flexDirection:"row",
  alignItems:"center",
  backgroundColor:"#9D69FC33",
  // paddingVertical:10,
  // paddingHorizontal:10,
  overflow:"hidden",
  borderRadius:10,
  width:"28%"
}}>

{/* <Text
style={{
  fontSize:18,
}}
>+234</Text> */}
<CountryPicker
containerButtonStyle={{
  // backgroundColor:"#9D69FC33",
  height:55,
  minWidth:50,
  paddingLeft:10,
  justifyContent:"center"

}}
withFlagButton={false}
withCallingCodeButton
countryCode={countryCode}
onSelect={(val)=>{
  setCallingCode(val.callingCode)
  setCountryCode(val.cca2)
}}
/>
<MaterialIcons name="keyboard-arrow-down" size={30} color="#9BC6F2" />
</View>

<TextInput
style={[styles.phoneNoInput,{borderColor: focus?"#9D69FC":"gray"}]}
placeholder='993 4567 221'
placeholderTextColor={"#848484"}
keyboardType='numbers-and-punctuation'
value={phoneNumberVal}
onChangeText={(val)=>{
 setPhoneNumberVal(val)
}}
maxLength={12}
onFocus={()=> {
  setFocus(true)
}}
onBlur={()=> {
  setFocus(false)
}}
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
 
 <Button1
 text="Login"
 containerStyles={{
  
 }}
 />

    </View>
   </KeyboardAwareScrollView>
  )
}

export default Login

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

})