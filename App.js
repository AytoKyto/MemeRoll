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
import Account from "./pages/Account";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Favoris") {
              iconName = focused ? "ios-copy" : "ios-copy-outline";
            } else if (route.name === "Collection") {
              iconName = focused ? "ios-grid" : "ios-grid-outline";
            } else if (route.name === "Ajouter") {
              iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#62CF7E",
          inactiveTintColor: "#62CF7E",
        }}
      >
        <Tab.Screen name="Collection" component={Account} /> 
        <Tab.Screen name="Favoris" component={Cours} />
        <Tab.Screen name="Ajouter" component={Demo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
