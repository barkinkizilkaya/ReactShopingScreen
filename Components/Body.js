import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import ImageComponent from './ImageComponent';

const Body = props => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.column1}>
                    <ImageComponent ImgResource={require('./img/img3.jpeg')}></ImageComponent>
                </View>
                <View style={styles.column2}>
                    <ImageComponent ImgResource={require('./img/img4.jpg')}></ImageComponent>
                </View>
                <View style={styles.full}>
                    <ImageComponent ImgResource={require('./img/img5.jpeg')}></ImageComponent>
                </View>
                <View style={styles.column1}>
                    <ImageComponent ImgResource={require('./img/img6.jpeg')}></ImageComponent>
                </View>
                <View style={styles.column2}>
                    <ImageComponent ImgResource={require('./img/img4.jpg')}></ImageComponent>
                </View>
                <View style={styles.full}>
                    <ImageComponent ImgResource={require('./img/img5.jpeg')}></ImageComponent>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        backgroundColor: '#ccc'
    },
    column1: {
        flex: 1,
        padding: 5
    },
    column2: {
        flex: 2,
        padding: 5
    },
    full: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    }


});

export default Body;