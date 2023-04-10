import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
  return (
   <View style={styles.container}>
        <View style={styles.cajaC}/>
        <View style={styles.cajaA}/>
        <View style={styles.cajaB}/>
   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#00CA82',
        flex:1,
        /* width:400,
        height:400, *//* 
        justifyContent:'center',
        alignItems:'center', */
    },
    cajaA:{
        width:100,
        height:100,
        backgroundColor:'#00B0FF',
        borderColor:'white',
        borderWidth:10,
        position:'absolute',
        bottom: 0,
        right: 0,
    },
    cajaB:{
        width:100,
        height:100,
        backgroundColor:'#E64A19',
        borderColor:'blue',
        borderWidth:10,
        position:'absolute',
        right: 0,
    },
    cajaC:{
        /* width:100,
        height:100, */
        backgroundColor:'#FFCA28',
        borderColor:'blue',
        borderWidth:10,
        /* position:'absolute',
        bottom: 0, */
        ...StyleSheet.absoluteFillObject
    }
})