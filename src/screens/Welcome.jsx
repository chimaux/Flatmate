import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native";
import AUTH_SVG from "../assets/svgs/auth_svg";
import Button1 from "../components/Button1";
export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { GOOGLE } from "../assets/svgs/auth_svg";
const Welcome = ({navigation}) => {
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
<TouchableOpacity
onPress={()=> navigation.navigate("Login")}
>
<View style={styles.btn}>
<SimpleLineIcons name="screen-smartphone" size={24} color="#ffffff" />
<Text style={styles.btnText}>
Continue with Phone Number
</Text>
</View>
</TouchableOpacity>

<View style={styles.btn2}>
<MaterialIcons name="facebook" size={30} color="#1877F2" />
<Text style={styles.btnText2}>
Login with Facebook
</Text>
</View>
<View style={styles.btn3}>
<GOOGLE/>
<Text style={styles.btnText2}>
Login with Google
</Text>
</View>


<Text style={{
      fontWeight:500,
      fontSize:15,
      color:"#000000",
      textAlign:"center",
      paddingTop:25
}}>Don’t have an account? <Text style={{color:"#1877F2"}}>Sign Up</Text></Text>


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

export default Welcome;

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
    height:screenHeight*0.42,
    backgroundColor:"#FFFFFF",
    paddingHorizontal:20,
    paddingTop:20
  },
  btn:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#000000",
    borderRadius:20,
    flexDirection:"row",
    paddingVertical:15,
    marginVertical:8,
   
  },
  btn2:{
    alignItems:"center",
    justifyContent:"center",
  
    borderRadius:20,
    borderColor:"#c4c4c4",
    borderWidth:1,
    flexDirection:"row",
    paddingVertical:10,
    marginVertical:8,
  },
  btn3:{
    alignItems:"center",
    justifyContent:"center",
   
    borderRadius:20,
    borderColor:"#c4c4c4",
    borderWidth:1,
    flexDirection:"row",
    paddingVertical:10,
    marginVertical:8,
  },
  btnText:{
    color:"#ffffff",
    fontWeight:500,
    fontSize:15,
    marginLeft:10
  },
  btnText2:{
    color:"#000000",
    fontWeight:500,
    fontSize:15,
    marginLeft:10
  }
});
