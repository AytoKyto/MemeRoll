import React, {useState} from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, Button } from "react-native";


const GameLogic = (props) => {

    const {choice} = props;

    const [playerState, setPlayerState] = useState({
        life: 3,
        bullet: 0,
        hidden:false

    });

    const [botState, setBotState] = useState({
        life: 3,
        bullet: 0,
        hidden:false
    });

    const [playerAction, setPlayerAction] = useState();
    const [botAction, setBotAction] = useState();
    const conflict = `${playerAction} ${botAction}`;

    const Actions = () => {
        switch (conflict) {
            case 'shot shot':
                alert("bullets intercepted each other !!");
                break;
            case 'shot hide':
                alert("YOU MISSED !!");
                break
            case 'shot reload':
                alert("Right in the face !");
                break;
            case 'reload shot':
                alert('He got us!');
                break;
            case 'reload hide':
                alert('We got lucky!');
                break;
            case 'reload reload':
                alert(`that's anticlimactic`);
                break;
            case 'hide shot':
                alert("He missed !");
                break;
            case 'hide hide':
                alert('Pussys!');
                break;
            case 'hide reload':
                alert('Watch out !!');
                break;
            default:
                alert('Nothing appened');
        }
    }

    const playerChoice = (action)=>{
        setPlayerAction(action);
        Actions();
    }

    return(
        <Button onPress={()=>playerChoice(choice)} />
    )

}