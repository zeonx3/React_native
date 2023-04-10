import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.caja1}/>
        <View style={styles.caja2}/>
        <View style={styles.caja3}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    caja1:{
        /* flex:1, */
        width:100,/* 
        height:100, */
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',/* 
        top:100,
        left:-100 */
    },
    caja2:{
       /*  flex:1, */
        width:100,/* 
        height:100, */
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',/* 
        top:50 */
    },
    caja3:{
        /* flex:1, */
        width:100,/* 
        height:100, */
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',/* 
        left:100,
        top:-100 */
        
    }
})


