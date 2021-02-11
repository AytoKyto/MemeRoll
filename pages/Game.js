import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Alert,
  Text,
  ImageBackground,
  View,
} from "react-native";

import GameLogic from "../components/GameLogic";

export default function Game() {
  return (
    <View style={styles.bigWrapper}>
      <View style={styles.wrapperLogo}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.wrapperTour}>
        <Text style={styles.tour}>TOUR</Text>
        <Text style={styles.nbrTour}>4</Text>
      </View>
      <View style={styles.wrapperGameView}>
        <ImageBackground
          source={require("../assets/wall.png")}
          style={styles.image}
        ></ImageBackground>
      <View style={styles.wrapperMainPerso}></View>
      <View style={styles.wrapperBot}></View>
      <View style={styles.wrapperWall}></View>
      </View>
      <View style={styles.wrapperAction}>
        <GameLogic style={styles.gamelogic} choice={"hide"}>
          <View style={styles.wrapperShield}>
            <Image
              style={styles.actionLogo}
              source={require("../assets/shield.png")}
            />
            <Text style={styles.actionName}>Shield</Text>
          </View>
        </GameLogic>

        <GameLogic style={styles.gamelogic} choice={"shot"}>
          <View style={styles.wrapperShot}>
            <Image
              style={styles.actionLogo}
              source={require("../assets/shot.png")}
            />
            <Text style={styles.actionName}>Shot</Text>
          </View>
        </GameLogic>

        <GameLogic style={styles.gamelogic} choice={"reload"}>
          <View style={styles.wrapperReload}>
            <Image
              style={styles.actionLogo}
              source={require("../assets/reload.png")}
            />
            <Text style={styles.actionName}>Reload</Text>
          </View>
        </GameLogic>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bigWrapper: {
    backgroundColor: "#132E49",
    height: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 50,
  },
  wrapperLogo: {
    position: "absolute",
    width: "100%",
    height: "18%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#365370",
  },
  wrapperGameView: {
    width: "100%",
    height: "65%",
    backgroundColor: "#707070",
    marginTop: 100,
  },
  wrapperTour: {
    backgroundColor: "white",
    position: "absolute",
    width: "40%",
    height: "9%",
    display: "flex",
    marginTop: "20%",
    marginLeft: "80%",
    borderRadius: 2000,
    zIndex: 999,
  },
  tour: {
    color: "#F00A0A",
    marginLeft: "20%",
    marginTop: "5%",
  },
  nbrTour: {
    color: "#F00A0A",
    marginLeft: "35%",
    marginTop: "-2%",
    fontSize: 25,
  },
  wrapperAction: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "95%",
    paddingLeft: 20,
    paddingRight: 20,
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
    color: "white",
  },
  wrapperShield: {
    width: "110%",
    height: 200,
    borderRadius: 2000,
    backgroundColor: "#F00A0A",
    padding: 10,
    margin: 10,
  },
  gamelogic: {
    width: "50%",
  },
  wrapperShot: {
    width: "155%",
    height: 200,
    backgroundColor: "#F00A0A",
    borderRadius: 2000,
    padding: 10,
    margin: 10,
    marginLeft: -5,
  },
  wrapperReload: {
    width: "100%",
    height: 200,
    backgroundColor: "#F00A0A",
    borderRadius: 2000,
    padding: 10,
    margin: 10,
  },
  gamelogic: {
    width: "fitContent",
  },
  wrapperMainPerso: {
    backgroundColor: "#F00A0A",
    width: "33%",
    height: "45%",
    bottom: "0%",
    position: "absolute",
  },
  wrapperBot: {
    backgroundColor: "white",
    width: "33%",
    height: "45%",
    position: "absolute",
    marginLeft: "40%",
    marginTop: "10%",
  },
  wrapperWall: {
    backgroundColor: "#F00A0A",
    height: "25%",
    width: "65%",
    position: "absolute",
    right: "0%",
    marginTop: "40%",
  }
});
