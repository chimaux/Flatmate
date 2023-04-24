import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Home from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTab } from '../components/BottomTab';
const Stack = createStackNavigator();
const MainStack = () => {
    

  return (
<Stack.Navigator
screenOptions={{
  headerShown:false
}}
>
    <Stack.Screen name="Home" component={BottomTab} />
</Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({

    text1:{
        color:"red"
    }

})