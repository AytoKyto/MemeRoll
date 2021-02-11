import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import Header from "../components/Header";

export default function Demo() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperLogo}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.wrapperOption}>
        <Text style={styles.textOption}>Setting</Text>
      </View>
      <View style={styles.wrapperOption}>
        <Text style={styles.textOption}>Accessibility</Text>
      </View>
      <View style={styles.wrapperOption}>
        <Text style={styles.textOption}>More Information</Text>
      </View>
      <View style={styles.wrapperInfo}>
        <Text style={styles.textInfoH1}>Created by</Text>
        <Text style={styles.textInfo}>Aegir BOISSEL</Text>
        <Text style={styles.textInfoH1}>and</Text>
        <Text style={styles.textInfo}>Mathis FLEURY</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "white",
    backgroundColor: "#132E49",
    height: "100%",
  },
  wrapperOption: {
    backgroundColor: "white",
    height: "70%",
    borderRadius: 2000,
    height: "7%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  textOption: {
    color: "#F00A0A",
    fontSize: 20,
  },
  wrapperInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  textInfoH1: {
    fontSize: 18,
    color: "white",
  },
  textInfo: {
    fontSize: 20,
    color: "white",
  },
  wrapperLogo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 100,
  },
});
