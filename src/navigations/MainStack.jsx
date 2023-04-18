import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Home from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const MainStack = () => {
    
  return (
<Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
</Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({

    text1:{
        color:"red"
    }

})