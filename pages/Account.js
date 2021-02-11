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

export default function Account() {
  return (
    <View style={styles.bigWrapper}>
      <View style={styles.wrapperLogo}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.wrapperGameView}></View>
      <View style={styles.wrapperAction}>
        <View style={styles.wrapperShield}>
          <Image
            style={styles.actionLogo}
            source={require("../assets/shield.png")}
          />
          <Text style={styles.actionName}>Shield</Text>
        </View>
        <View style={styles.wrapperShot}>
          <Image
            style={styles.actionLogo}
            source={require("../assets/shot.png")}
          />
          <Text style={styles.actionName}>Shot</Text>
        </View>
        <View style={styles.wrapperReload}>
          <Image
            style={styles.actionLogo}
            source={require("../assets/reload.png")}
          />
          <Text style={styles.actionName}>Reload</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bigWrapper: {
    backgroundColor: "#132E49",
    height: "100%",
  },
  logo: {
    width: 150,
    height: 80,
  },
  wrapperLogo: {
    position: "absolute",
    width: "100%",
    height: "11%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#365370",
  },
  wrapperGameView: {
    width: "100%",
    height: "70%",
    backgroundColor: "#707070",
    marginTop: 85,
  },
  wrapperAction: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  actionLogo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: -35,
  },
  actionName: {
    marginTop: -30,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white"
  },
  wrapperShield: {
    width: "25%",
    height: 180,
    borderRadius: 2000,
    backgroundColor: "#F00A0A",
    padding: 10,
    margin: 10,
  },
  wrapperShot: {
    width: "25%",
    height: 180,
    backgroundColor: "#F00A0A",
    borderRadius: 2000,
    padding: 10,
    margin: 10,
  },
  wrapperReload: {
    width: "25%",
    height: 180,
    backgroundColor: "#F00A0A",
    borderRadius: 2000,
    padding: 10,
    margin: 10,
  },
});
