import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#005C4B',/* 
        justifyContent:'flex-end',
        alignItems:'flex-end', *//* 
        flexDirection:'row', */
        flexWrap:'wrap'

    },
    caja1:{
        
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        color:'white',/* 
        alignSelf:'flex-start', */
    },
    caja2:{
       
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        color:'white',/* 
        alignSelf:'flex-end' */
    },
    caja3:{
        
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        color:'white',/* 
        alignSelf:'center' */
    },
    
})