import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={styles.soundContainer}>
      <Image style={styles.lifeImg} source={require("../assets/add-gif.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  soundContainer: {
    width: '100%',
    height: '100%',
  },
  lifeImg: {
    width: '100%',
    height: '100%',
    resizeMode: "contain",
  },
});

export default Header;
