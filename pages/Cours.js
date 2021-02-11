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

export default function Cours() {
  function onPressLearnMore() {
    console.log("");
  }
  {
    /* La scrollview permet de rajouter un overflow scroll si le contenu dépasse de l'écran */
  }
  return (
    <View style={styles.bigWrapper}>
    <View style={styles.gifWrapper}>
    <Image
            style={styles.tinyLogo}
            source={require("../assets/add-song.png")}
          />
    </View>
      <ScrollView style={styles.gridWrapper}></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  gifWrapper: {
    backgroundColor: '#808080',
    height: "70%",
    width: "100%",
    zIndex: -999,
    position: "absolute",
    overflow: "hidden",
  },
  bigWrapper: {
    backgroundColor: "#161F38",
    height: "100%",
  },
  tinyLogo: {
    width: "100%",
    height: "100%",
  },
  gridWrapper: {
    backgroundColor: "red",
    height: "30%",
  },
});
