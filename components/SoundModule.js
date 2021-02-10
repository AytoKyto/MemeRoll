import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av'

const SoundModule = () => {


    const sound = new Audio.Sound();
    try {
    sound.loadAsync(require('./assets/sounds/COUISINE.mp3'));
      sound.playAsync();
      // Your sound is playing!
    
      // Don't forget to unload the sound from memory
      // when you are done using the Sound object
     sound.unloadAsync();
    } catch (error) {
      // An error occurred!
    }
  
  
   useEffect(() => {
      return sound 
    }, [sound])

    return (
        <View style={styles.soundContainer}>
            <TouchableOpacity style={styles.soundButton} onPressIn={()=>playSound()}>
                <Text>Prout</Text>
            </TouchableOpacity>
        </View>
    );
    
}


const styles = StyleSheet.create({
    soundContainer:{
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    soundButton:{
        padding:30,
        backgroundColor:"#ff00ff",
        borderRadius:20
    }
})


export default SoundModule;
