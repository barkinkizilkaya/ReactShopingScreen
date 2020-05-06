import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const HeroText = props => {
    return (
       
            <Text style={styles.headerText}>Macbook Pro</Text>
       
    )
}

const styles = StyleSheet.create({

    headerText: {
        elevation: 1, //for android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        borderRadius: 20,

        alignSelf:'center',
        fontSize:25,
        color:'#292929',
        textAlign:'center',
        backgroundColor:'rgba(255,255,255,0.7)',
        padding:10,
        fontWeight:'bold'
    }
});

export default HeroText;