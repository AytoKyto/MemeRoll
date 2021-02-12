import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
  View,
} from "react-native";

import { Heart } from "../components/Heart";
import { Bot } from "../components/Bot";

export default function Game() {
  const [round, setRound] = useState(1);

  const [playerLife, setPlayerLife] = useState(3);
  const [playerBullet, setPlayerBullet] = useState(2);
  const [isHidden, setIsHidden] = useState(false);

  const [botLife, setBotLife] = useState(3);
  const [botBullet, setBotBullet] = useState(2);
  const [isBotHidden, setIsBotHidden] = useState(false);

  const [playerAction, setPlayerAction] = useState();
  const [botAction, setBotAction] = useState();
  const conflict = `${playerAction} ${botAction}`;

  const BotAction = () => {
    let hide = 1;
    let shot = 2;
    let reload = 3;

    var RandomNumber = Math.floor(Math.random() * 3) + 1;

    if (RandomNumber == hide) {
      setBotAction("hide");
      alert(botAction);
    } else if (RandomNumber == shot) {
      setBotAction("shot");
      alert(botAction);
    } else if (RandomNumber == reload) {
      setBotAction("reload");
      alert(botAction);
    } else {
      alert("error");
    }
  }


  const imgMain = () => {
    if (playerAction == "hide") {
      return (
        <Image
          style={styles.imgInBoxMain}
          source={require("../assets/heroHiden.png")}
        />
      );
    } else if (playerAction == "shot") {
      return (
        <Image
          style={styles.imgInBoxMain}
          source={require("../assets/heroShot.png")}
        />
      );
    } else if (playerAction == "reload") {
      return (
        <Image
          style={styles.imgInBoxMain}
          source={require("../assets/heroReload.png")}
        />
      );
    } 
  };

  const imgBot = () => {
    if (botAction == "hide") {
      return (
        <Image
          style={styles.imgInBoxMain}
          source={require("../assets/heroHiden.png")}
        />
      );
    } else if (botAction == "shot") {
      return (
        <Image
          style={styles.imgInBoxMain}
          source={require("../assets/heroShotRev.png")}
        />
      );
    } else if (botAction == "reload") {
      return (
        <Image
          style={styles.imgInBoxMain}
          source={require("../assets/heroReload.png")}
        />
      );
    }
  };

  const Actions = () => {
    if (conflict == "shot shot") {
      setPlayerBullet(playerBullet - 1);
      setBotBullet(botBullet - 1);
      alert("bullets intercepted each other !!");
    } else if (conflict == "hide hide") {
      alert("Pussys!");
    } else if (conflict == "shot hide") {
      alert("YOU MISSED !!");
      setPlayerBullet(playerBullet - 1);
    } else if (conflict == "shot reload") {
      setPlayerLife(playerLife - 1);
    } else if (conflict == "reload shot") {
      alert("He got us!");
      setBotLife(botLife - 1);
      setPlayerBullet(playerBullet + 1);
    } else if (conflict == "reload hide") {
      setPlayerBullet(playerBullet + 1);
    } else if (conflict == "reload reload") {
      alert(`that's anticlimactic`);
      setPlayerBullet(playerBullet + 1);
      setBotBullet(botBullet + 1);
    } else if (conflict == "hide shot") {
      alert("He missed !");
      setBotBullet(botBullet - 1);
    } else if (conflict == "hide reload") {
      setBotBullet(botBullet + 1);
    }

    else {
      alert(`you clicked on ${playerAction}`);
    }
  };

  const isGameFinished =()=>{
    if(playerLife || botLife ===0){
      alert("ONE OF YOU DESERVED TO DIE!!!");
      setRound(round +1);

    }
  }

  const oskour = (choice) => {
    BotAction();
    Actions(conflict);
    setPlayerAction(choice);
  };
  return (
    <View style={styles.bigWrapper}>
      <View style={styles.wrapperLogo}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.wrapperTour}>
        <Text style={styles.tour}>Round</Text>
  <Text style={styles.nbrTour}>{round}</Text>
      </View>
      <Bot />
      <View style={styles.wrapperGameView}>
        <ImageBackground
          source={require("../assets/wall.jpg")}
          style={styles.image}
        ></ImageBackground>

        {/* joueur*/}
        <View style={styles.wrapperMainPerso}>
          <View style={styles.wrapperLifeBar}>
            <View style={styles.wrapperHeart}>
              <Heart hearts={playerLife} />
            </View>
            <Image style={styles.life} source={require("../assets/mun.png")} />
            <Text style={styles.mun}>{playerBullet}</Text>
          </View>
          {/* <Image
            style={styles.imgInBoxMain}
            source={require("../assets/heroHiden.png")}
          /> */}
          {imgMain()}
        </View>

        {/* ennemy*/}
        <View style={styles.wrapperBot}>
          <View style={styles.wrapperLifeBar}>
            <View style={styles.wrapperHeart}>
              <Heart hearts={botLife} />
            </View>
            <Image style={styles.life} source={require("../assets/mun.png")} />
            <Text style={styles.mun2}>{botBullet}</Text>
          </View>
          {/* <Image
            style={styles.imgInBoxMain}
            source={require("../assets/heroReload.png")}
          /> */}
          {imgBot()}
        </View>

        <View style={styles.wrapperWall}>
          <Image
            style={styles.imgInBox}
            source={require("../assets/wallbox.png")}
          />
        </View>
      </View>
      <View style={styles.wrapperAction}>
        <TouchableOpacity onPress={() => oskour("hide")}>
          <View style={styles.wrapperShield}>
            <Image
              style={styles.actionLogo}
              source={require("../assets/shield.png")}
            />
            <Text style={styles.actionName}>Shield</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => oskour('shot')}>
          <View style={styles.wrapperShot}>
            <Image
              style={styles.actionLogo}
              source={require("../assets/shot.png")}
            />
            <Text style={styles.actionName}>Shot</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => oskour("reload")}>
          <View style={styles.wrapperReload}>
            <Image
              style={styles.actionLogo}
              source={require("../assets/reload.png")}
            />
            <Text style={styles.actionName}>Reload</Text>
          </View>
        </TouchableOpacity>
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
    marginTop: "12%",
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
    width: "40%",
    height: "55%",
    bottom: "0%",
    position: "absolute",
    zIndex: 999,
  },
  wrapperBot: {
    width: "40%",
    height: "45%",
    position: "absolute",
    marginLeft: "50%",
    marginTop: "10%",
  },
  wrapperWall: {
    height: "25%",
    width: "55%",
    position: "absolute",
    right: "0%",
    marginTop: "40%",
  },
  wrapperLifeBar: {
    width: "100%",
    height: "15%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 20,
  },
  life: {
    width: "15%",
    height: "90%",
    resizeMode: "contain",
    marginLeft: "-22%",
  },
  wrapperHeart: {
    width: "100%",
    height: "100%",
  },
  mun: {
    width: "20%",
    height: "100%",
    fontSize: 33,
    color: "white",
    marginLeft: "4%",
  },
  mun2: {
    marginTop: "-5%",
    width: "20%",
    height: "100%",
    fontSize: 33,
    color: "white",
    marginLeft: "4%",
  },
  imgInBox: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  imgInBoxMain: {
    height: "83%",
    width: "100%",
    resizeMode: "contain",
  },
});
