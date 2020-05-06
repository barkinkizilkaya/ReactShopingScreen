import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header'
import HeroImage from './Components/HeroImage'
import Body from './Components/Body'

export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <HeroImage></HeroImage>
     <Body></Body>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
