import React from "react";
import { StyleSheet, Image, View } from "react-native";

export const Heart = (props) => {
  const { hearts } = props;

  let heartCount = [];

  for (let i = 0; i < hearts; i++) {
    heartCount.push(
      <Image style={styles.life} source={require("../assets/life.png")} />
    );
  }

  return <View style={styles.lifeWrapp}>{heartCount}</View>;
};

const styles = StyleSheet.create({
  lifeWrapp: {
    width: "30%",
    height: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: "20%",
  },
  life: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
});
