import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av'

const SoundModule = () => {

    return (
        <View style={styles.soundContainer}>
            <TouchableOpacity style={styles.soundButton} >
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