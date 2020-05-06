import React from 'react';
import {View,Image,Text,StyleSheet,Dimensions} from 'react-native'


const Header = props =>{
  return(
      <View style={styles.header}>
        <Image source={require('../Components/img/img1.png')}
        style = {styles.logo}></Image>
        <Text style={styles.title}>Shoping Cart</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    header:{
       height:80,
       marginTop:20,
       backgroundColor:'#fff',
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       padding:20,
       borderBottomWidth:4,
       borderBottomColor:'#ccc',
       width:Dimensions.get('window').width
    },
    logo:{
     width:40,
     height:40,
     marginTop:20
    },
    title:{
        marginTop:20,
        marginLeft:10,
        color:'#000',
        fontWeight:'bold',
        fontSize:15
    }

});

export default Header;