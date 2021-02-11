import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, View, Button, Text } from "react-native";

export const Bot = (props) => {
  let hide = 1;
  let shot = 2;
  let reload = 3;
  let botAction = "hide";

  const BotAction = () => {
    var RandomNumber = Math.floor(Math.random() * 3) + 1;

    if (RandomNumber == hide) {
      botAction = "hide";
      alert(botAction);
    } else if (RandomNumber == shot) {
      botAction = "shot";
      alert(botAction);
    } else if (RandomNumber == reload) {
      botAction = "reload";
      alert(botAction);
    } else {
      alert("error");
    }
  };

  return <View></View>;
};
