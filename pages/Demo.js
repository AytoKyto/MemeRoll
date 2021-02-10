import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

export default function Demo() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperSong}>
        <Text style={styles.song}>Ajouter votre song</Text>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/add-song.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperGif}>
        <Text style={styles.song}>Ajouter votre song</Text>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/add-gif.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "white",
    backgroundColor: "#161F38",
    height: "100%",
  },
  song: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  button: {
    alignItems: "center",
    backgroundColor: "",
    padding: 100,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});
