import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Chats from "../screens/Chats";
import Profile from "../screens/Profile";
import Favorite from "../screens/Favorite";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { HOMEICON, HOMEICON2, LOVE, LOVE2, CHATICON, CHATICON2, PROFILE, PROFILE2 } from "../assets/svgs/auth_svg";
import { screenWidth } from "../screens/Welcome";
const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          paddingHorizontal: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 1,

          elevation: 1,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View style={styles.nav}>
                <HOMEICON2 />
                <Text style={styles.navText}>Home</Text>
              </View>
            ) : (
    
              <HOMEICON />
     
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View style={styles.nav}>
                <LOVE2/>
                <Text style={styles.navText}>Favorite</Text>
              </View>
            ) : (
              <LOVE/>
            );
          },
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View style={styles.nav}>
                <CHATICON2 />
                <Text style={styles.navText}>Chat</Text>
              </View>
            ) : (
              <CHATICON />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View style={styles.nav}>
                <PROFILE2/>
                <Text style={styles.navText}>Profile</Text>
              </View>
            ) : (
              <PROFILE/>
            );
          },
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#9D69FC",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 4,
    width:screenWidth*0.27
  },
  navText: {
    color: "#ffffff",
    marginLeft: 5,
  },
});
