import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native";
import AUTH_SVG from "../assets/svgs/auth_svg";
import Button1 from "../components/Button1";
export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

const Signup = ({navigation}) => {

 const [selectCategory,setSelectCategory]=useState(null)


  const category = [
    {
      img: require("../assets/images/img1.png"),
      text: "Real Estate Agent",
    },
    {
      img: require("../assets/images/img2.png"),
      text: "Looking for Rommate",
    },
    {
      img: require("../assets/images/img3.png"),
      text: "Landlord",
    },
  ];


  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ ...StyleSheet.absoluteFillObject }}
        source={require("../assets/images/auth_BG.png")}
      >
        <View
        style={styles.overlay}
        >

        </View>

  <View
  style={styles.authTab}
  >
<Text
style={styles.secondText}
>How would you like to sign up</Text>
<Text
style={[styles.secondText, {marginBottom:20}]}
>on the app?</Text>



{
  category.map((item,index)=>{
    return(
      <Pressable
     onPress={()=> setSelectCategory(index)}
      key={index.toString()}
style={[styles.categoryBox,{
  backgroundColor:selectCategory === index ?"#9D69FB":"#ffffff",
}]}
>

<Image
 source={item.img}
 style={{
  width:65,
  height:"100%",
  backgroundColor:"#f3f9f9",
  borderRadius:19,
  borderWidth:selectCategory === index ?2:0,
  borderColor:selectCategory === index ?"#ffffff":"",
  
 }}
/>

<Text 
style={{
  color:"#000000",
  fontSize:18,
  fontWeight:500,
  marginLeft:10,
  color:selectCategory === index ?"#ffffff":"#000000"
}}
>
  {item.text}
</Text>
</Pressable>

    )
  })
}



<TouchableOpacity
onPress={()=> navigation.navigate("Welcome")}
>
<Text style={{
      // fontWeight:500,
      fontSize: 18,
      color:"#000000",
      textAlign:"center",
      paddingTop:25
}}>Already a member? <Text style={{color:"#1877F2"}}>Login</Text></Text>
</TouchableOpacity>


  </View>

        <SafeAreaView />
        <View style={styles.logo}>
          <AUTH_SVG />
        </View>

        <View
          style={{
            alignItems: "center",
            marginTop:20
          }}
        >
          <Text style={styles.bgText}>
            The best place to find roomates, home apartment and rental listings.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6ffff",
  },
  logo: {
    width: screenWidth,
    alignItems: "center",
    marginTop: 40,
    //  backgroundColor:"red",
    height: screenHeight * 0.1,
  },
  bgText: {
    color: "#FFFFFF",
    width: screenWidth * 0.9,
    textAlign: "center",
    fontSize: 18,
    fontWeight:500
  },
  overlay:{
    position:"absolute",
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:"rgba(0,0,0,0.4)"
  },
  authTab:{
    position:"absolute",
    bottom:0,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    width:screenWidth,
    height:410,
    backgroundColor:"#FFFFFF",
    paddingHorizontal:20,
    paddingTop:20
  },


  secondText:{
color:"#000000",
width: screenWidth * 0.9,
textAlign: "center",
fontSize: 18,
fontWeight:500
  },
  categoryBox:{
    borderWidth:1,
    borderColor:"#ddecfb",
    height:65,
    borderRadius:20,
    overflow:"hidden",
    flexDirection:"row",
    alignItems:"center",
    marginBottom:20,
    padding:1
  }
});
