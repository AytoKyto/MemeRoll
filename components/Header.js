import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import Nav from "../components/Header";

const Header = () => {
  return (
    <View style={styles.soundContainer}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/add-gif.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  soundContainer: {
    height: "4%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#62CF7E",
    marginBottom: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default Header;
