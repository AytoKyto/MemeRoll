/* Import de React */
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Alert,
  Text,
  View,
} from "react-native";
/* Modules de ReactNavigation */
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
/* Pages */
import Demo from "./pages/Demo";
import Cours from "./pages/Cours";
import Game from "./pages/Game";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Game") {
              iconName = focused ? "ios-skull" : "ios-skull-outline";
            }  else if (route.name === "Information") {
              iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#F00A0A",
          inactiveTintColor: "#F00A0A",
        }}
      >
        <Tab.Screen name="Game" component={Game} /> 
        <Tab.Screen name="Information" component={Demo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
