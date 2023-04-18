import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Login from '../screens/Login'
import Welcome from '../screens/Welcome';
import Signup from '../screens/Signup';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const AuthStack = () => {
    
  return (
<Stack.Navigator
    screenOptions={{
      headerShown:false
     
    }}
>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
</Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({

    text1:{
        color:"red"
    }

})