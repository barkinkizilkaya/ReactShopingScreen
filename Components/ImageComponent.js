import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageComponent = props => {
    return (
        <Image source={props.ImgResource}
        style={styles.Image}
         ></Image>
    )
}

const styles = StyleSheet.create({
    Image:{
        height:200,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
});

export default ImageComponent;