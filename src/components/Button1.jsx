import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { screenWidth } from '../screens/Welcome'
import { TouchableOpacity } from 'react-native'

const Button1 = ({text,containerStyles}) => {
  return (
<View
style={{
  position:"absolute",
  bottom:80,
  width:screenWidth,
  paddingHorizontal:30
}}
>

<TouchableOpacity style={[styles.btn,{...containerStyles}]}

>

<Text style={styles.btnText}>
{text}
</Text>
</TouchableOpacity>

</View>
  )
}

export default Button1

const styles = StyleSheet.create({
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