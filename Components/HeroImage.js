import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import HeroText from './HeroText'
const HeroImage = props => {
    return (
        <ImageBackground
            source={require('./img/img2.jpeg')}
            style={styles.hero}
        >
            <HeroText></HeroText>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    hero: {
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HeroImage;